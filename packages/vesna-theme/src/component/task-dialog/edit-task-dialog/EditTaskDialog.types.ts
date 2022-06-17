import {TaskWire} from '@vesna-task-manager/types';

export interface EditTaskDialogProps {
  task: TaskWire;
  onSave(updatedTask: TaskWire): void;
}
