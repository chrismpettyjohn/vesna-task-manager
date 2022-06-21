import {TaskLabelPipe} from './task-label.pipe';
import {HasSession} from '../session/has-session.decorator';
import {GetSession} from '../session/get-session.decorator';
import {SessionEntity} from '../database/session/session.entity';
import {ErrorCode, TaskLabelWire} from '@vesna-task-manager/types';
import {taskLabelWire} from '../database/task-label/task-label.wire';
import {CreateTaskLabelDTO, UpdateTaskLabelDTO} from './task-label.dto';
import {TaskLabelEntity} from '../database/task-label/task-label.entity';
import {TaskLabelRepository} from '../database/task-label/task-label.repository';
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

@Controller('task-labels')
@HasSession()
export class TaskLabelController {
  constructor(private readonly taskLabelRepo: TaskLabelRepository) {}

  @Get()
  async getTaskLabels(
    @GetSession() session: SessionEntity
  ): Promise<TaskLabelWire[]> {
    const userTaskLabels = await this.taskLabelRepo.find(
      {userID: session.userID},
      {id: 'DESC'}
    );
    return userTaskLabels.map(_ => taskLabelWire(_));
  }

  @Post()
  async createTaskLabel(
    @Body() createTaskLabelDTO: CreateTaskLabelDTO,
    @GetSession() session: SessionEntity
  ): Promise<TaskLabelWire> {
    const newTaskLabel = await this.taskLabelRepo.create({
      userID: session.userID,
      icon: createTaskLabelDTO.icon,
      name: createTaskLabelDTO.name,
      desc: createTaskLabelDTO.desc,
      color: createTaskLabelDTO.color,
    });
    return taskLabelWire(newTaskLabel);
  }

  @Patch(':taskLabelID')
  async updateTaskLabelByID(
    @Body() updateTaskLabelDTO: UpdateTaskLabelDTO,
    @GetSession() session: SessionEntity,
    @Param('taskLabelID', TaskLabelPipe) taskLabel: TaskLabelEntity
  ): Promise<void> {
    if (taskLabel.userID !== session.userID) {
      throw new UnauthorizedException(ErrorCode.ResourceAccessDenied);
    }

    await this.taskLabelRepo.update({id: taskLabel.id!}, updateTaskLabelDTO);
  }

  @Delete(':taskLabelID')
  async deleteTaskLabelByID(
    @GetSession() session: SessionEntity,
    @Param('taskLabelID', TaskLabelPipe) taskLabel: TaskLabelEntity
  ): Promise<void> {
    if (taskLabel.userID !== session.userID) {
      throw new UnauthorizedException(ErrorCode.ResourceAccessDenied);
    }
    await this.taskLabelRepo.delete({id: taskLabel.id!});
  }
}
