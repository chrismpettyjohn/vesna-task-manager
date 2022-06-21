import React from 'react';
import {UserGuard} from '@vesna-task-manager/web';
import {UserLayoutProps} from './UserLayout.types';
import {SiteLayout} from '../site-layout/SiteLayout';

export function UserLayout({children}: UserLayoutProps) {
  return (
    <UserGuard>
      <SiteLayout>{children}</SiteLayout>
    </UserGuard>
  );
}
