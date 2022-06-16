import {ErrorCode} from '@vesna-task-manager/types';
import {TaskLabelEntity} from '../database/task-label/task-label.entity';
import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';
import {TaskLabelRepository} from '../database/task-label/task-label.repository';

@Injectable()
export class TaskLabelPipe implements PipeTransform {
  constructor(private readonly taskLabelRepo: TaskLabelRepository) {}

  async transform(taskLabelID: number): Promise<TaskLabelEntity> {
    const taskLabel = await this.taskLabelRepo.findOne({id: taskLabelID});

    if (!taskLabel) {
      throw new NotFoundException(ErrorCode.TaskLabelDoesNotExist);
    }

    return taskLabel;
  }
}
