import {TaskWire} from '@vesna-task-manager/types';

export interface DeleteTaskButtonProps {
  task: TaskWire;
  onDeletion(): void;
}
