import DayJS from 'dayjs';
import {Timestamp} from '@vesna-task-manager/types';

export function getDurationInSeconds(start: Timestamp, end: Timestamp): number {
  return DayJS(end).diff(DayJS(start), 'second');
}
