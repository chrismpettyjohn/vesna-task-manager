import React from 'react';
import {Container, Grid} from '@mui/material';
import {SiteLayoutProps} from './SiteLayout.types';
import {SiteSidebar} from '../site-sidebar/SiteSidebar';

export function SiteLayout({children, sidebar}: SiteLayoutProps) {
  return (
    <Container maxWidth={false} disableGutters>
      <Grid container spacing={0}>
        <Grid item>
          <SiteSidebar children={sidebar} />
        </Grid>
        <Grid item xs={12} md={10}>
          <div style={{paddingLeft: '2%', paddingRight: '2%'}}>{children}</div>
        </Grid>
      </Grid>
    </Container>
  );
}
