import {ReactNode} from 'react';
import {CreateTaskLabelDTOWire, TaskLabelWire} from '@vesna-task-manager/types';

export interface TaskLabelDialogEditorProps {
  children: ReactNode;
  defaultTaskLabel?: TaskLabelWire;
  onSave(updatedTaskLabel: CreateTaskLabelDTOWire): Promise<void>;
}
