import {TaskWire} from '@vesna-task-manager/types';

export interface CreateTaskDialogProps {
  onCreation(newTask: TaskWire): void;
}
