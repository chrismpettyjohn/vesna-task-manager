import {TaskTimeSpentEntity} from './task-time-spent.entity';
import {TaskTimeSpentWire} from '@vesna-task-manager/types';

export function taskTimeSpentWire(
  taskTimeSpentEntity: TaskTimeSpentEntity
): TaskTimeSpentWire {
  return {
    id: taskTimeSpentEntity.id!,
    taskID: taskTimeSpentEntity.taskID,
    notes: taskTimeSpentEntity.notes,
    startedAt: taskTimeSpentEntity.startedAt,
    endedAt: taskTimeSpentEntity.endedAt,
    durationInSeconds: taskTimeSpentEntity.durationInSeconds,
  };
}
