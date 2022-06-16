import {Redirect} from 'wouter';
import React, {useContext} from 'react';
import {GuardProps} from './guard.types';
import {sessionContext} from '../context/session/SessionContext';

export function GuestGuard({children}: GuardProps) {
  const {session} = useContext(sessionContext);
  return <>{session ? <Redirect to="/dashboard" /> : children}</>;
}
