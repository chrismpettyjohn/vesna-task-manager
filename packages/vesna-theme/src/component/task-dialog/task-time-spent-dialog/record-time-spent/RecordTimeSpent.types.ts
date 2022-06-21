import {TaskTimeSpentWire, TaskWire} from '@vesna-task-manager/types';

export interface RecordTimeSpentProps {
  task: TaskWire;
  onFinished(taskTimeSpentWire: TaskTimeSpentWire): void;
}
