import React from 'react';
import {SiteSidebarProps} from './SiteSidebar.types';

export function SiteSidebar({children}: SiteSidebarProps) {
  return (
    <div
      className="bg-primary h-100 w-100"
      style={{borderRight: '1px solid #e3e7f7'}}
    >
      <div className="p-4">
        <h2
          style={{
            letterSpacing: 10,
            textTransform: 'uppercase',
            textAlign: 'center',
          }}
        >
          Vesna
        </h2>
        <div style={{marginTop: 10}}>{children}</div>
      </div>
    </div>
  );
}
