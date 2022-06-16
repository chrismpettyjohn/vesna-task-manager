import {ReactNode} from 'react';
import {TaskLabelWire} from '@vesna-task-manager/types';

export interface TaskContext {
  taskLabels?: TaskLabelWire[];
  addTaskLabel(taskLabel: TaskLabelWire): void;
  updateTaskLabelByID(
    taskLabelID: number,
    changes: Partial<TaskLabelWire>
  ): void;
  deleteTaskLabelByID(taskLabelID: number): void;
}

export const defaultTaskContext: TaskContext = {
  taskLabels: [],
  addTaskLabel(taskLabel: TaskLabelWire) {},
  updateTaskLabelByID(taskLabelID: number, changes: Partial<TaskLabelWire>) {},
  deleteTaskLabelByID(taskLabelID: number) {},
};

export interface TaskContextProviderProps {
  children: ReactNode;
}
