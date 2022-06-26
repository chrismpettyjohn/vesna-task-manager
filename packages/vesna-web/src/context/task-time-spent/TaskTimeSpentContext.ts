import {createContext} from 'react';
import {
  defaultTaskTimeSpentContext,
  TaskTimeSpentContext,
} from './TaskTimeSpentContext.types';

export const taskTimeSpentContext = createContext<TaskTimeSpentContext>(
  defaultTaskTimeSpentContext
);
