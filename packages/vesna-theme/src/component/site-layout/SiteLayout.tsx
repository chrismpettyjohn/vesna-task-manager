import React from 'react';
import {SiteLayoutProps} from './SiteLayout.types';
import {SiteSidebar} from '../site-sidebar/SiteSidebar';

export function SiteLayout({children, sidebar}: SiteLayoutProps) {
  return (
    <div
      className="container-fluid h-100 w-100 p-0"
      style={{position: 'absolute', top: 0, left: 0}}
    >
      <div className="row h-100 w-100">
        <div className="col" style={{maxWidth: 250}}>
          <SiteSidebar children={sidebar} />
        </div>
        <div className="col p-4">{children}</div>
      </div>
    </div>
  );
}
