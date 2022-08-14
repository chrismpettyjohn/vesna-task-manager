import React, {useEffect, useState} from 'react';
import {taskTimeSpentContext} from './TaskTimeSpentContext';
import {localStorageService} from '../../service/local-storage.service';
import {
  TaskTimeSpentContextProviderProps,
  TaskTimeSpentRecord,
} from './TaskTimeSpentContext.types';

const TASK_TIME_SPENT_LOCAL_STORAGE_KEY = 'user-task-time-spent';

export function TaskTimeSpentContextProvider({
  children,
}: TaskTimeSpentContextProviderProps) {
  const [initialized, setInitialized] = useState(false);
  const [taskTimeSpent, setTaskTimeSpent] = useState<TaskTimeSpentRecord[]>([]);

  useEffect(() => {
    const startingTaskTimeSpent: any = localStorageService.exists(
      TASK_TIME_SPENT_LOCAL_STORAGE_KEY
    )
      ? JSON.parse(localStorageService.get(TASK_TIME_SPENT_LOCAL_STORAGE_KEY))
      : [];
    setTaskTimeSpent(startingTaskTimeSpent);
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (taskTimeSpent) {
      localStorageService.set(
        TASK_TIME_SPENT_LOCAL_STORAGE_KEY,
        JSON.stringify(taskTimeSpent)
      );
    }
  }, [taskTimeSpent]);

  const addTaskTimeSpent = () => {
    setTaskTimeSpent(_ => {
      return [
        ..._,
        {
          taskID: undefined,
          notes: '',
          startedAt: undefined,
        },
      ];
    });
  };

  const updateTaskTimeSpent = (
    taskIndex: number,
    changes: Partial<TaskTimeSpentRecord>
  ) => {
    setTaskTimeSpent(_ => {
      const newTaskTimeSpent = [..._];
      newTaskTimeSpent[taskIndex] = {
        ...newTaskTimeSpent[taskIndex],
        ...changes,
      };
      return newTaskTimeSpent;
    });
  };

  const deleteTaskTimeSpent = (taskIndex: number) => {
    setTaskTimeSpent(_ => {
      const newTaskTimeSpent = [..._];
      delete newTaskTimeSpent[taskIndex];
      return newTaskTimeSpent;
    });
  };

  return (
    <taskTimeSpentContext.Provider
      value={{
        taskTimeSpent,
        addTaskTimeSpent,
        updateTaskTimeSpent,
        deleteTaskTimeSpent,
      }}
    >
      {initialized ? children : null}
    </taskTimeSpentContext.Provider>
  );
}
