import React from 'react';
import {UserLayoutProps} from './UserLayout.types';
import {SiteLayout} from '../site-layout/SiteLayout';
import {ListTaskLabels} from '../list-task-labels/ListTaskLabels';

export function UserLayout({children}: UserLayoutProps) {
  return (
    <SiteLayout sidebar={<ListTaskLabels />}>
      <div className="container-fluid p-4 h-100">
        <div className="row h-100">
          <div className="col-8">{children}</div>
          <div className="col-4">
            <div
              className="h-100 p-4"
              style={{borderLeft: '1px solid #e3e7f7'}}
            >
              <h1>Schedule</h1>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
