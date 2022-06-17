import React from 'react';
import {SiteSidebarProps} from './SiteSidebar.types';

export function SiteSidebar({children}: SiteSidebarProps) {
  return (
    <div
      className="bg-primary h-100 w-100"
      style={{
        borderRight: '1px solid #e3e7f7',
        position: 'relative',
        textAlign: 'center',
      }}
    >
      <div className="p-4">
        <h2
          style={{
            marginTop: 5,
            letterSpacing: 10,
            textTransform: 'uppercase',
          }}
        >
          Vesna
        </h2>
        <div style={{marginTop: 65, borderTop: '1px solid #e3e7f7'}}>
          {children}
        </div>
        <div style={{position: 'absolute', bottom: 0}}>
          <b>Impending Success LLC</b>
        </div>
      </div>
    </div>
  );
}
