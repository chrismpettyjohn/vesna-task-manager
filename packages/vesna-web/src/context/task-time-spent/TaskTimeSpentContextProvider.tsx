import React, {useState} from 'react';
import {taskTimeSpentContext} from './TaskTimeSpentContext';
import {TaskTimeSpentContextProviderProps} from './TaskTimeSpentContext.types';

export function TaskTimeSpentContextProvider({
  children,
}: TaskTimeSpentContextProviderProps) {
  const [taskTimeSpent, setTaskTimeSpent] = useState<number[]>([]);

  const addTaskTimeSpent = () => {
    setTaskTimeSpent(_ => {
      return [..._, _.length];
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
      value={{taskTimeSpent, addTaskTimeSpent, deleteTaskTimeSpent}}
    >
      {children}
    </taskTimeSpentContext.Provider>
  );
}
