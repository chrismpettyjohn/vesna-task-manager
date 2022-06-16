import React from 'react';
import {UserGuard} from '@vesna-task-manager/web';

export function DashboardScreen() {
  return <UserGuard>Dashboard</UserGuard>;
}
