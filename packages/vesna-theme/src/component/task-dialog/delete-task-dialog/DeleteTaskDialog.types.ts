import {TaskWire} from '@vesna-task-manager/types';

export interface DeleteTaskDialogProps {
  task: TaskWire;
  onDeletion(): void;
}
