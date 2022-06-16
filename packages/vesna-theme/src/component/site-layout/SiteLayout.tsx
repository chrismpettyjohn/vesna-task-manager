import React from 'react';
import {SiteLayoutProps} from './SiteLayout.types';

export function SiteLayout({children, sidebar}: SiteLayoutProps) {
  return (
    <>
      <div className="task-manager">
        <div className="left-bar">
          <div className="left-content">
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
            {sidebar}
          </div>
        </div>
        <div className="page-content">{children}</div>
      </div>
      <div
        style={{
          color: 'white',
          textAlign: 'center',
          width: '100%',
          height: 'fit-content',
          marginTop: 10,
        }}
      >
        <span
          style={{fontWeight: 'bold', fontSize: '1.4rem', letterSpacing: 3}}
        >
          Impending Success LLC
        </span>
      </div>
    </>
  );
}
