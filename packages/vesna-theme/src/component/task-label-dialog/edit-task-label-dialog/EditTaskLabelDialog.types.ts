import {TaskLabelWire} from '@vesna-task-manager/types';

export interface EditTaskLabelDialogProps {
  taskLabel: TaskLabelWire;
  onCreation(newTask: TaskLabelWire): void;
}
