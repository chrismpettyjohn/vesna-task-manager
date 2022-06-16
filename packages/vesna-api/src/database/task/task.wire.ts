import {TaskEntity} from './task.entity';
import {TaskWire} from '@vesna-task-manager/types';

export function taskWire(taskEntity: TaskEntity): TaskWire {
  return {
    id: taskEntity.id!,
    userID: taskEntity.userID,
    labelID: taskEntity.taskLabelID,
    name: taskEntity.name,
    content: taskEntity.content,
    createdAt: taskEntity.createdAt,
    closedAt: taskEntity.closedAt ?? null,
  };
}
