import React from 'react';
import {AppBar, Toolbar} from '@mui/material';
import {SiteLogo} from '../site-logo/SiteLogo';

export const headerHeight = 75;

export function SiteHeader() {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: 10000,
        height: headerHeight,
      }}
    >
      <Toolbar variant="dense">
        <SiteLogo style={{marginTop: 10}} />
      </Toolbar>
    </AppBar>
  );
}
