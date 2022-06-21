import React from 'react';
import {UserGuard} from '@vesna-task-manager/web';
import {UserLayoutProps} from './UserLayout.types';
import {SiteLayout} from '../site-layout/SiteLayout';
import {ListTaskLabels} from '../list-task-labels/ListTaskLabels';

export function UserLayout({children}: UserLayoutProps) {
  return (
    <UserGuard>
      <SiteLayout sidebar={<ListTaskLabels />}>{children}</SiteLayout>
    </UserGuard>
  );
}
