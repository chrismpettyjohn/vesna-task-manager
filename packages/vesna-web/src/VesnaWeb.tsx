import React from 'react';
import {Router} from './component/router/Router';
import {TaskContextProvider} from './context/task/TaskContextProvider';
import {SessionContextProvider} from './context/session/SessionContextProvider';

export function VesnaWeb() {
  return (
    <SessionContextProvider>
      <TaskContextProvider>
        <Router />
      </TaskContextProvider>
    </SessionContextProvider>
  );
}
