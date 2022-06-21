import {Timestamp} from '@vesna-task-manager/types';

export interface TaskTimeSpentWire {
  id: number;
  taskID: number;
  startedAt: Timestamp;
  endedAt: Timestamp;
  durationInSeconds: number;
}
