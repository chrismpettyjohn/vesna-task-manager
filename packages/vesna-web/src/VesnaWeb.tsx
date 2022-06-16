import React from 'react';
import {VesnaWebProps} from './VesnaWeb.types';
import {Router} from './component/router/Router';
import {SessionContextProvider} from './context/session/SessionContextProvider';

export function VesnaWeb({children}: VesnaWebProps) {
  return (
    <SessionContextProvider>
      <Router />
      {children}
    </SessionContextProvider>
  );
}
