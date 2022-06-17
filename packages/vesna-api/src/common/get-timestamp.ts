import DayJS from 'dayjs';

export function getTimestamp() {
  return DayJS().toISOString();
}
