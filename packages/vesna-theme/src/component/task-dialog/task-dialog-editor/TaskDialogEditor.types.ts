import {ReactNode} from 'react';
import {CreateTaskDTOWire, TaskWire} from '@vesna-task-manager/types';

export interface TaskDialogEditorProps {
  children: ReactNode;
  defaultTask?: TaskWire;
  onSave(taskWireChanges: CreateTaskDTOWire): Promise<void>;
  hideTaskLabel?: boolean;
}
