import React from 'react';
import {UserLayoutProps} from './UserLayout.types';
import {SiteLayout} from '../site-layout/SiteLayout';
import {ListTaskLabels} from '../list-task-labels/ListTaskLabels';

export function UserLayout({children}: UserLayoutProps) {
  return <SiteLayout sidebar={<ListTaskLabels />}>{children}</SiteLayout>;
}
