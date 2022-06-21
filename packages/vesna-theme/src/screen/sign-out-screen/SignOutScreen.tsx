import {Redirect} from 'wouter';
import React, {useContext, useEffect} from 'react';
import {sessionContext} from '@vesna-task-manager/web';

export function SignOutScreen() {
  const {setSession} = useContext(sessionContext);

  useEffect(() => {
    setSession(undefined);
  }, []);

  return <Redirect to="/login" />;
}
