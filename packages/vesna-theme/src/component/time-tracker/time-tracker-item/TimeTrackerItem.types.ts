import {Timestamp} from '@vesna-task-manager/types';

export interface TimeTrackerItemProps {
  onFinish(taskID: number, startedAt: Timestamp): void;
}
