import {ErrorCode} from '@vesna-task-manager/types';
import {TaskEntity} from '../database/task/task.entity';
import {TaskRepository} from '../database/task/task.repository';
import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';

@Injectable()
export class TaskPipe implements PipeTransform {
  constructor(private readonly taskRepo: TaskRepository) {}

  async transform(taskID: number): Promise<TaskEntity> {
    const task = await this.taskRepo.findOne({id: taskID});

    if (!task) {
      throw new NotFoundException(ErrorCode.TaskDoesNotExist);
    }

    return task;
  }
}
