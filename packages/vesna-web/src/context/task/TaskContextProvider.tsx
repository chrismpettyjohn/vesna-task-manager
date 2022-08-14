import {taskContext} from './TaskContext';
import {taskService} from '../../service/task.service';
import {sessionContext} from '../session/SessionContext';
import React, {useContext, useEffect, useState} from 'react';
import {
  TaskWire,
  TaskLabelWire,
  TaskTimeSpentWire,
} from '@vesna-task-manager/types';
import {taskLabelService} from '../../service/task-label.service';
import {SessionContextProviderProps} from '../session/SessionContext.types';
import {localStorageService} from '@vesna-task-manager/web';

const TASKS_LOCAL_STORAGE_KEY = 'user-tasks';

const TASK_LABELS_LOCAL_STORAGE_KEY = 'user-task-labels';

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
          const userTasks = localStorageService.exists(TASKS_LOCAL_STORAGE_KEY)
            ? JSON.parse(localStorageService.get(TASKS_LOCAL_STORAGE_KEY))
            : await taskService.getTasks();

          const userTaskLabels = localStorageService.exists(
            TASK_LABELS_LOCAL_STORAGE_KEY
          )
            ? JSON.parse(localStorageService.get(TASK_LABELS_LOCAL_STORAGE_KEY))
            : await taskLabelService.getTaskLabels();

          setTasks(userTasks);
          setTaskLabels(userTaskLabels);
        }

        setIsLoading(false);
      } catch {
        alert('There was a problem fetching tasks');
      }
    };

    fetchTasksForAuthenticatedUSer();
  }, []);

  useEffect(() => {
    if (loading) {
      return;
    }
    localStorageService.set(TASKS_LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks, loading]);

  useEffect(() => {
    if (loading) {
      return;
    }
    localStorageService.set(
      TASK_LABELS_LOCAL_STORAGE_KEY,
      JSON.stringify(taskLabels)
    );
  }, [taskLabels, loading]);

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
      return _!.filter(task => task.id !== taskID);
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
      return _!.filter(taskLabel => taskLabel.id !== taskLabelID);
    });
  };

  const addTimeSpentByID = (
    taskID: number,
    taskTimeSpent: TaskTimeSpentWire
  ) => {
    setTasks(_ => {
      const newTasks = [..._!];
      const affectedTaskIndex = newTasks.findIndex(_ => _.id === taskID)!;
      newTasks[affectedTaskIndex] = {
        ...newTasks[affectedTaskIndex],
        timeSpent: [...newTasks[affectedTaskIndex].timeSpent, taskTimeSpent],
      };
      return newTasks;
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
        addTimeSpentByID,
      }}
    >
      {isValidLoadingState ? '' : children}
    </taskContext.Provider>
  );
}
