import {TaskWire} from '@vesna-task-manager/types';

export interface CreateTaskDialogProps {
  taskLabelID?: number;
  onCreation(newTask: TaskWire): void;
}
