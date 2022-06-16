import React, {useState} from 'react';
import {sessionContext} from './SessionContext';
import {SessionWire} from '@vesna-task-manager/types';
import {SessionContextProviderProps} from './SessionContext.types';

export function SessionContextProvider({
  children,
}: SessionContextProviderProps) {
  // TODO: Implement initializing from localStorage
  const [session, setSessionState] = useState<SessionWire>();

  const setSession = (newSession?: SessionWire) => {
    setSessionState(newSession);
  };

  return (
    <sessionContext.Provider value={{session, setSession}}>
      {children}
    </sessionContext.Provider>
  );
}
