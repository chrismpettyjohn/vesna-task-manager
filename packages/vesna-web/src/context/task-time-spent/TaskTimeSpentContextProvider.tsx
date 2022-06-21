import DayJS from 'dayjs';
import {toast} from 'react-toastify';
import React, {useState} from 'react';
import {Timestamp} from '@vesna-task-manager/types';
import {taskTimeSpentContext} from './TaskTimeSpentContext';
import {TaskTimeSpentContextProviderProps} from './TaskTimeSpentContext.types';

export function TaskTimeSpentContextProvider({
  children,
}: TaskTimeSpentContextProviderProps) {
  const [startedAt, setStartedAt] = useState<Timestamp>();

  const startTask = async () => {
    if (startedAt) {
      toast.error('The timer is already running!');
      return;
    }

    setStartedAt(DayJS().toISOString());
  };

  const stopTask = () => {
    if (!startedAt) {
      throw new Error("The timer wasn't running!");
    }

    const originalStartedAt = DayJS(startedAt).toISOString();
    const endedAt = DayJS().toISOString();

    setStartedAt(undefined);

    return {
      startedAt: originalStartedAt!,
      endedAt,
    };
  };

  return (
    <taskTimeSpentContext.Provider value={{startTask, stopTask}}>
      {children}
    </taskTimeSpentContext.Provider>
  );
}
