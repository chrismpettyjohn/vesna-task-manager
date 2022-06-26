import React, {useState} from 'react';
import {taskTimeSpentContext} from './TaskTimeSpentContext';
import {
  TaskTimeSpentContextProviderProps,
  TaskTimeSpentRecord,
} from './TaskTimeSpentContext.types';

export function TaskTimeSpentContextProvider({
  children,
}: TaskTimeSpentContextProviderProps) {
  const [taskTimeSpent, setTaskTimeSpent] = useState<TaskTimeSpentRecord[]>([]);

  const addTaskTimeSpent = () => {
    setTaskTimeSpent(_ => {
      return [
        ..._,
        {
          taskID: undefined,
          notes: undefined,
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
      {children}
    </taskTimeSpentContext.Provider>
  );
}
