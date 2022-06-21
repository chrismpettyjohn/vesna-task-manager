import DayJS from 'dayjs';
import {Timestamp} from '@vesna-task-manager/types';

export function formatTimestamp(timestamp: Timestamp): string {
  return DayJS(timestamp).format('MMMM DD, YYYY (hh:mmA)');
}
