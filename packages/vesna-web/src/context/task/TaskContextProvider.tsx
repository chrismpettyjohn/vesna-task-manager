import {taskContext} from './TaskContext';
import {sessionContext} from '../session/SessionContext';
import React, {useContext, useEffect, useState} from 'react';
import {TaskWire, TaskLabelWire} from '@vesna-task-manager/types';
import {SessionContextProviderProps} from '../session/SessionContext.types';

export function TaskContextProvider({children}: SessionContextProviderProps) {
  const {session} = useContext(sessionContext);
  const [loading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState<TaskWire[]>();
  const [taskLabels, setTaskLabels] = useState<TaskLabelWire[]>();

  useEffect(() => {
    const fetchTasksForAuthenticatedUSer = async () => {
      try {
        setIsLoading(true);
        setTaskLabels(undefined);
        setTasks(undefined);

        if (session) {
          // Fetch tasks
          // Fetch task labels
          setTasks([]);
          setTaskLabels([]);
        }

        setIsLoading(false);
      } catch {
        alert('There was a problem fetching tasks');
      }
    };

    fetchTasksForAuthenticatedUSer();
  }, []);

  const addTask = (task: TaskWire) => {
    setTasks(_ => [..._!, task]);
  };

  const updateTaskByID = (taskID: number, task: Partial<TaskWire>) => {
    setTasks(_ => {
      const newTasks = [..._!];
      const updatedTaskIndex = newTasks.findIndex(_ => _.id === taskID)!;

      newTasks[updatedTaskIndex] = {
        ...newTasks[updatedTaskIndex],
        ...task,
      };

      return newTasks;
    });
  };

  const deleteTaskByID = (taskID: number) => {
    setTasks(_ => {
      const newTasks = [..._!];
      const updatedTaskIndex = newTasks.findIndex(_ => _.id === taskID)!;
      delete newTasks[updatedTaskIndex];
      return newTasks;
    });
  };

  const addTaskLabel = (taskLabel: TaskLabelWire) => {
    setTaskLabels(_ => [..._!, taskLabel]);
  };

  const updateTaskLabelByID = (
    taskLabelID: number,
    taskLabel: Partial<TaskLabelWire>
  ) => {
    setTaskLabels(_ => {
      const newTaskLabels = [..._!];
      const updatedTaskLabelIndex = newTaskLabels.findIndex(
        _ => _.id === taskLabelID
      )!;

      newTaskLabels[updatedTaskLabelIndex] = {
        ...newTaskLabels[updatedTaskLabelIndex],
        ...taskLabel,
      };

      return newTaskLabels;
    });
  };

  const deleteTaskLabelByID = (taskLabelID: number) => {
    setTaskLabels(_ => {
      const newTaskLabels = [..._!];
      const updatedTaskLabelIndex = newTaskLabels.findIndex(
        _ => _.id === taskLabelID
      )!;
      delete newTaskLabels[updatedTaskLabelIndex];
      return newTaskLabels;
    });
  };

  const isValidLoadingState = session && loading;

  return (
    <taskContext.Provider
      value={{
        tasks,
        addTask,
        updateTaskByID,
        deleteTaskByID,
        taskLabels,
        addTaskLabel,
        updateTaskLabelByID,
        deleteTaskLabelByID,
      }}
    >
      {isValidLoadingState ? '' : children}
    </taskContext.Provider>
  );
}
