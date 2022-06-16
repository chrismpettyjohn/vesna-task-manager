import {sessionContext} from './SessionContext';
import React, {useEffect, useState} from 'react';
import {setAPIToken} from '../../utility/api.axios';
import {SessionWire} from '@vesna-task-manager/types';
import {SessionContextProviderProps} from './SessionContext.types';
import {localStorageService, sessionService} from '@vesna-task-manager/web';

export function SessionContextProvider({
  children,
}: SessionContextProviderProps) {
  const [loading, setIsLoading] = useState(true);
  // TODO: Implement initializing from localStorage
  const [session, setSessionState] = useState<SessionWire>();

  useEffect(() => {
    const checkForPreviousSession = async () => {
      const userAlreadyLoggedIn = localStorageService.exists('SESSION');

      if (userAlreadyLoggedIn) {
        const jwt = localStorageService.get('SESSION');
        try {
          setAPIToken(jwt);
          const sessionData = await sessionService.getSession();
          setSessionState(sessionData);
          setIsLoading(false);
        } catch {
          // Do nothing
        }
      }
      setIsLoading(false);
    };

    checkForPreviousSession();
  }, []);

  const setSession = (newSession?: SessionWire) => {
    setSessionState(newSession);
  };

  return (
    <sessionContext.Provider value={{session, setSession}}>
      {loading ? '' : children}
    </sessionContext.Provider>
  );
}
