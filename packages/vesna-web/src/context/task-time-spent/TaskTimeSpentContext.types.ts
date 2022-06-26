import {ReactNode} from 'react';

export interface TaskTimeSpentContext {
  taskTimeSpent: number[];
  addTaskTimeSpent(): void;
  deleteTaskTimeSpent(taskIndex: number): void;
}

export const defaultTaskTimeSpentContext: TaskTimeSpentContext = {
  taskTimeSpent: [],
  addTaskTimeSpent() {},
  deleteTaskTimeSpent(taskIndex: number) {},
};

export interface TaskTimeSpentContextProviderProps {
  children: ReactNode;
}
