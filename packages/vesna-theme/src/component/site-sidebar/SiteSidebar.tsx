import React from 'react';
import {SiteSidebarProps} from './SiteSidebar.types';

export function SiteSidebar({children}: SiteSidebarProps) {
  return (
    <div
      className="bg-primary h-100 w-100 p-4"
      style={{borderRight: '1px solid #e3e7f7'}}
    >
      <div className="container-fluid p-4">
        <div className="row">
          <div className="col">
            <h2
              style={{
                letterSpacing: 10,
                textTransform: 'uppercase',
                textAlign: 'center',
                marginTop: 0,
              }}
            >
              Vesna
            </h2>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">{children}</div>
        </div>
      </div>
    </div>
  );
}
