import {Redirect} from 'wouter';
import React, {useContext} from 'react';
import {sessionContext} from '@vesna-task-manager/web';

export function IndexScreen() {
  const {session} = useContext(sessionContext);
  return <Redirect to={session ? '/dashboard' : '/login'} />;
}
