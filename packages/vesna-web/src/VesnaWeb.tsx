import React from 'react';
import {Router} from './component/router/Router';
import {TaskContextProvider} from './context/task/TaskContextProvider';
import {SessionContextProvider} from './context/session/SessionContextProvider';
import {TaskTimeSpentContextProvider} from './context/task-time-spent/TaskTimeSpentContextProvider';

export function VesnaWeb() {
  return (
    <SessionContextProvider>
      <TaskContextProvider>
        <TaskTimeSpentContextProvider>
          <Router />
        </TaskTimeSpentContextProvider>
      </TaskContextProvider>
    </SessionContextProvider>
  );
}
