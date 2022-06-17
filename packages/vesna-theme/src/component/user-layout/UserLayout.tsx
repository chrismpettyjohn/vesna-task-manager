import React from 'react';
import {UserLayoutProps} from './UserLayout.types';
import {SiteLayout} from '../site-layout/SiteLayout';
import {ListTaskLabels} from '../list-task-labels/ListTaskLabels';

export function UserLayout({children}: UserLayoutProps) {
  return (
    <SiteLayout sidebar={<ListTaskLabels />}>
      <div className="container-fluid p-4 h-100">
        <div className="row h-100">
          <div className="col">{children}</div>
        </div>
      </div>
    </SiteLayout>
  );
}
