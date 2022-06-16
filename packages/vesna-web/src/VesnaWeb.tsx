import React from 'react';
import {VesnaWebProps} from './VesnaWeb.types';
import {Router} from './component/router/Router';
import {TaskContextProvider} from './context/task/TaskContextProvider';
import {SessionContextProvider} from './context/session/SessionContextProvider';

export function VesnaWeb({children}: VesnaWebProps) {
  return (
    <SessionContextProvider>
      <TaskContextProvider>
        <Router />
        {children}
      </TaskContextProvider>
    </SessionContextProvider>
  );
}
