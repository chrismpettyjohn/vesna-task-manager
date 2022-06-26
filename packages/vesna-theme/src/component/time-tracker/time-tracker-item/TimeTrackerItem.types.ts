import {TaskTimeSpentWire} from '@vesna-task-manager/types';

export interface TimeTrackerItemProps {
  onFinish(taskTimeSpent: TaskTimeSpentWire): void;
}
