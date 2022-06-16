import {Redirect} from 'wouter';
import React, {useContext} from 'react';
import {GuardProps} from './guard.types';
import {sessionContext} from '../context/session/SessionContext';

export function UserGuard({children}: GuardProps) {
  const {session} = useContext(sessionContext);
  return <>{session ? children : <Redirect to="/login" />}</>;
}
