import {Timestamp} from '../utility/Timestamp';

export interface TaskTimeSpentWire {
  id: number;
  taskID: number;
  notes: string;
  startedAt: Timestamp;
  endedAt: Timestamp;
  durationInSeconds: number;
}
