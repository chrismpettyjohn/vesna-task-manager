import React, {useContext, useEffect} from 'react';
import {
  localStorageService,
  sessionContext,
  UserGuard,
} from '@vesna-task-manager/web';

export function SignOutScreen() {
  const {setSession} = useContext(sessionContext);

  useEffect(() => {
    setSession(undefined);
    localStorageService.purge();
  }, []);

  return <UserGuard>&nbsp;</UserGuard>;
}
