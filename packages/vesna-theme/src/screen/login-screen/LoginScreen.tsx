import React from 'react';
import {GuestGuard} from '@vesna-task-manager/web';

export function LoginScreen() {
  return <GuestGuard>Login</GuestGuard>;
}
