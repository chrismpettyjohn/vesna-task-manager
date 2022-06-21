import {Timestamp} from '@vesna-task-manager/types';

export interface TaskTimeSpentWire {
  id: number;
  taskID: number;
  notes: string;
  startedAt: Timestamp;
  endedAt: Timestamp;
  durationInSeconds: number;
}
