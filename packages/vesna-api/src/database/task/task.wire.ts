import {TaskEntity} from './task.entity';
import {TaskWire} from '@vesna-task-manager/types';
import {taskTimeSpentWire} from './task-time-spent.wire';

export function taskWire(taskEntity: TaskEntity): TaskWire {
  if (!taskEntity.timeSpent) {
    throw new Error('taskWire requires timeSpent to be included');
  }

  return {
    id: taskEntity.id!,
    userID: taskEntity.userID,
    labelID: taskEntity.taskLabelID,
    name: taskEntity.name,
    content: taskEntity.content,
    timeSpent: taskEntity.timeSpent.map(_ => taskTimeSpentWire(_)),
    createdAt: taskEntity.createdAt,
    closedAt: taskEntity.closedAt ?? null,
  };
}
