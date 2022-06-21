import {TaskPipe} from './task.pipe';
import {taskWire} from '../database/task/task.wire';
import {getTimestamp} from '../common/get-timestamp';
import {TaskEntity} from '../database/task/task.entity';
import {CreateTaskDTO, UpdateTaskDTO} from './task.dto';
import {HasSession} from '../session/has-session.decorator';
import {GetSession} from '../session/get-session.decorator';
import {ActivityService} from '../activity/activity.service';
import {ActivityResource, ErrorCode, TaskWire} from '@vesna-task-manager/types';
import {TaskRepository} from '../database/task/task.repository';
import {SessionEntity} from '../database/session/session.entity';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UnauthorizedException,
} from '@nestjs/common';

@Controller('tasks')
@HasSession()
export class TaskController {
  constructor(
    private readonly taskRepo: TaskRepository,
    private readonly activityService: ActivityService
  ) {}

  @Get()
  async getTasks(@GetSession() session: SessionEntity): Promise<TaskWire[]> {
    const userTasks = await this.taskRepo.find(
      {userID: session.userID},
      {id: 'DESC'}
    );
    return userTasks.map(_ => taskWire(_));
  }

  @Post()
  async createTask(
    @Body() createTaskDTO: CreateTaskDTO,
    @GetSession() session: SessionEntity
  ): Promise<TaskWire> {
    const newTask = await this.taskRepo.create({
      taskLabelID: createTaskDTO.taskLabelID,
      userID: session.userID,
      createdAt: getTimestamp(),
      name: createTaskDTO.name,
      content: createTaskDTO.content,
    });

    await this.activityService.recordAction(
      session.userID,
      session.id!,
      newTask.id!,
      ActivityResource.Task,
      'Task created',
      createTaskDTO
    );

    return taskWire(newTask);
  }

  @Patch(':taskID')
  async updateTaskByID(
    @Body() updateTaskDTO: UpdateTaskDTO,
    @GetSession() session: SessionEntity,
    @Param('taskID', TaskPipe) task: TaskEntity
  ): Promise<void> {
    if (task.userID !== session.userID) {
      throw new UnauthorizedException(ErrorCode.ResourceAccessDenied);
    }

    await this.activityService.recordAction(
      session.userID,
      session.id!,
      task.id!,
      ActivityResource.Task,
      'Task updated',
      updateTaskDTO
    );

    await this.taskRepo.update({id: task.id!}, updateTaskDTO);
  }

  @Delete(':taskID')
  async deleteTaskByID(
    @GetSession() session: SessionEntity,
    @Param('taskID', TaskPipe) task: TaskEntity
  ): Promise<void> {
    if (task.userID !== session.userID) {
      throw new UnauthorizedException(ErrorCode.ResourceAccessDenied);
    }

    await this.activityService.recordAction(
      session.userID,
      session.id!,
      task.id!,
      ActivityResource.Task,
      'Task deleted',
      task
    );

    await this.taskRepo.delete({id: task.id!});
  }
}
