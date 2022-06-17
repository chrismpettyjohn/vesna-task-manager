import {TaskLabelWire} from '@vesna-task-manager/types';

export interface CreateTaskLabelDialogProps {
  onCreation(newTask: TaskLabelWire): void;
}
