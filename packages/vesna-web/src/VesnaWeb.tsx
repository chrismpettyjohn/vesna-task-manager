import React from 'react';
import {Router} from './component/router/Router';
import {TaskContextProvider} from './context/task/TaskContextProvider';
import {ThemeContextProvider} from './context/theme/ThemeContextProvider';
import {SessionContextProvider} from './context/session/SessionContextProvider';
import {TaskTimeSpentContextProvider} from './context/task-time-spent/TaskTimeSpentContextProvider';

export function VesnaWeb() {
  return (
    <SessionContextProvider>
      <TaskContextProvider>
        <TaskTimeSpentContextProvider>
          <ThemeContextProvider>
            <Router />
          </ThemeContextProvider>
        </TaskTimeSpentContextProvider>
      </TaskContextProvider>
    </SessionContextProvider>
  );
}
