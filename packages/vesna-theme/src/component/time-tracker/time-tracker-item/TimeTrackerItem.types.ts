import {TaskTimeSpentWire} from '@vesna-task-manager/types';

export interface TimeTrackerItemProps {
  onCancel(): void;
  onFinish(taskTimeSpent: TaskTimeSpentWire): void;
}
