import {TaskLabelWire} from '@vesna-task-manager/types';

export interface CreateTaskLabelDialogProps {
  isOpen: boolean;
  onCreation(newTask: TaskLabelWire): void;
  onClose(): void;
}
