import {TaskLabelWire} from '@vesna-task-manager/types';

export interface DeleteTaskLabelButtonProps {
  taskLabel: TaskLabelWire;
  onDeletion(taskLabelID: number): void;
}
