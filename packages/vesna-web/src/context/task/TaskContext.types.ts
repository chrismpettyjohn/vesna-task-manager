import {ReactNode} from 'react';
import {
  TaskLabelWire,
  TaskTimeSpentWire,
  TaskWire,
} from '@vesna-task-manager/types';

export interface TaskContext {
  taskLabels?: TaskLabelWire[];
  addTaskLabel(taskLabel: TaskLabelWire): void;
  updateTaskLabelByID(
    taskLabelID: number,
    changes: Partial<TaskLabelWire>
  ): void;
  deleteTaskLabelByID(taskLabelID: number): void;
  tasks?: TaskWire[];
  addTask(task: TaskWire): void;
  updateTaskByID(taskID: number, changes: Partial<TaskWire>): void;
  deleteTaskByID(taskID: number): void;
  addTimeSpentByID(taskID: number, taskTimeSpent: TaskTimeSpentWire): void;
}

export const defaultTaskContext: TaskContext = {
  taskLabels: [],
  addTaskLabel(taskLabel: TaskLabelWire) {},
  updateTaskLabelByID(taskLabelID: number, changes: Partial<TaskLabelWire>) {},
  deleteTaskLabelByID(taskLabelID: number) {},
  tasks: [],
  addTask(task: TaskWire) {},
  updateTaskByID(taskID: number, changes: Partial<TaskLabelWire>) {},
  deleteTaskByID(taskID: number) {},
  addTimeSpentByID(taskID: number, taskTimeSpent: TaskTimeSpentWire) {},
};

export interface TaskContextProviderProps {
  children: ReactNode;
}
