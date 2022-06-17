import {taskWire} from '../task/task.wire';
import {TaskLabelEntity} from './task-label.entity';
import {InternalServerErrorException} from '@nestjs/common';
import {ErrorCode, TaskLabelWire} from '@vesna-task-manager/types';

export function taskLabelWire(taskLabelEntity: TaskLabelEntity): TaskLabelWire {
  if (!taskLabelEntity.tasks) {
    throw new InternalServerErrorException(
      ErrorCode.TaskLabelWireMissingTaskRelations
    );
  }

  return {
    id: taskLabelEntity.id!,
    icon: taskLabelEntity.icon,
    name: taskLabelEntity.name,
    desc: taskLabelEntity.desc,
    tasks: taskLabelEntity.tasks.map(_ => taskWire(_)),
  };
}
