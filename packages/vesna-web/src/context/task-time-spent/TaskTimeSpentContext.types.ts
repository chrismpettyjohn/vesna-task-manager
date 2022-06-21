import {ReactNode} from 'react';
import {Timestamp} from '@vesna-task-manager/types';

export interface TaskTimeSpentContext {
  startTask(): void;
  stopTask(): {startedAt: Timestamp; endedAt: Timestamp};
}

export const defaultTaskTimeSpentContext: TaskTimeSpentContext = {
  startTask() {},
  stopTask(): {startedAt: Timestamp; endedAt: Timestamp} {
    return {
      startedAt: '',
      endedAt: '',
    };
  },
};

export interface TaskTimeSpentContextProviderProps {
  children: ReactNode;
}
