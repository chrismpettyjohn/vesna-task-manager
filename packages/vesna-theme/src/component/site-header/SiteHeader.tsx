import React from 'react';
import {SiteLogo} from '../site-logo/SiteLogo';
import {AppBar, Toolbar, Grid} from '@mui/material';
import {TimeTrackerDrawer} from '../time-tracker/time-tracker-drawer/TimeTrackerDrawer';

export const headerHeight = 75;

export function SiteHeader() {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: 1300,
        height: headerHeight,
      }}
    >
      <Toolbar variant="dense" style={{marginTop: 10}}>
        <Grid container>
          <Grid item xs={6}>
            <SiteLogo />
          </Grid>
          <Grid item xs={6} style={{textAlign: 'right'}}>
            <TimeTrackerDrawer />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
