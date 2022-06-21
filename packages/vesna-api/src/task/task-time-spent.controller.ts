import DayJS from 'dayjs';
import {TaskPipe} from './task.pipe';
import {taskWire} from '../database/task/task.wire';
import {TaskEntity} from '../database/task/task.entity';
import {HasSession} from '../session/has-session.decorator';
import {GetSession} from '../session/get-session.decorator';
import {CreateTaskTimeSpentDTO} from './task-time-spent.dto';
import {ActivityService} from '../activity/activity.service';
import {SessionEntity} from '../database/session/session.entity';
import {taskTimeSpentWire} from '../database/task/task-time-spent.wire';
import {ActivityResource, TaskTimeSpentWire} from '@vesna-task-manager/types';
import {TaskTimeSpentRepository} from '../database/task/task-time-spent.repository';
import {Body, Controller, Get, Param, Post} from '@nestjs/common';

@Controller('tasks/:taskID/time-spent')
@HasSession()
export class TaskTimeSpentController {
  constructor(
    private readonly taskTimeSpentRepo: TaskTimeSpentRepository,
    private readonly activityService: ActivityService
  ) {}

  @Get()
  async getTaskTimeSpent(
    @GetSession() session: SessionEntity,
    @Param('taskID', TaskPipe) task: TaskEntity
  ): Promise<TaskTimeSpentWire[]> {
    return taskWire(task).timeSpent;
  }

  @Post()
  async recordTime(
    @Body() createTimeSpentDTO: CreateTaskTimeSpentDTO,
    @GetSession() session: SessionEntity,
    @Param('taskID', TaskPipe) task: TaskEntity
  ): Promise<TaskTimeSpentWire> {
    const taskTimeSpent = await this.taskTimeSpentRepo.create({
      taskID: task.id!,
      startedAt: createTimeSpentDTO.startedAt,
      endedAt: createTimeSpentDTO.endedAt,
      durationInSeconds: DayJS(createTimeSpentDTO.endedAt).diff(
        createTimeSpentDTO.startedAt,
        'second'
      ),
    });

    await this.activityService.recordAction(
      session.userID,
      taskTimeSpent.id!,
      ActivityResource.Task,
      'Task Activity Recorded',
      createTimeSpentDTO
    );

    return taskTimeSpentWire(taskTimeSpent);
  }
}
