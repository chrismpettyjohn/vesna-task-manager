import {Timestamp} from '../utility/Timestamp';

export interface CreateTaskTimeSpentDTOWire {
  durationInSeconds: number;
  startedAt: Timestamp;
  endedAt: Timestamp;
  notes: string;
}
