import {TaskLabelWire} from '@vesna-task-manager/types';

export interface EditTaskLabelDialogProps {
  taskLabel: TaskLabelWire;
  onUpdate(updatedTask: TaskLabelWire): void;
  onDelete(taskLabelID: number): void;
}
