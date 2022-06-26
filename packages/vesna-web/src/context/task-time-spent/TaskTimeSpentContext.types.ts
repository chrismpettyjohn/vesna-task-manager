import {ReactNode} from 'react';
import {Timestamp} from '@vesna-task-manager/types';

export interface TaskTimeSpentRecord {
  taskID?: number;
  notes?: string;
  startedAt?: Timestamp;
}

export interface TaskTimeSpentContext {
  taskTimeSpent: TaskTimeSpentRecord[];
  addTaskTimeSpent(): void;
  updateTaskTimeSpent(
    taskIndex: number,
    changes: Partial<TaskTimeSpentRecord>
  ): void;
  deleteTaskTimeSpent(taskIndex: number): void;
}

export const defaultTaskTimeSpentContext: TaskTimeSpentContext = {
  taskTimeSpent: [],
  addTaskTimeSpent() {},
  updateTaskTimeSpent(
    taskIndex: number,
    changes: Partial<TaskTimeSpentRecord>
  ) {},
  deleteTaskTimeSpent(taskIndex: number) {},
};

export interface TaskTimeSpentContextProviderProps {
  children: ReactNode;
}
