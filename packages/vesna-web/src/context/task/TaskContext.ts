import {createContext} from 'react';
import {defaultTaskContext, TaskContext} from './TaskContext.types';

export const taskContext = createContext<TaskContext>(defaultTaskContext);
