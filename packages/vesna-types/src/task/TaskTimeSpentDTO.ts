import {Timestamp} from '../utility/Timestamp';

export interface CreateTaskTimeSpentDTOWire {
  startedAt: Timestamp;
  endedAt: Timestamp;
}
