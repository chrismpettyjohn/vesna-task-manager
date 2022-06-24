import React from 'react';
import {Container, Grid} from '@mui/material';
import {UserGuard} from '@vesna-task-manager/web';
import {UserLayoutProps} from './UserLayout.types';
import {SiteHeader} from '../site-header/SiteHeader';
import {SiteSidebar} from '../site-sidebar/SiteSidebar';

export function UserLayout({children}: UserLayoutProps) {
  return (
    <UserGuard>
      <SiteHeader />
      <Container maxWidth={false} disableGutters>
        <Grid container spacing={0}>
          <Grid item>
            <SiteSidebar />
          </Grid>
          <Grid item xs={12} md={10}>
            <Container maxWidth={false}>{children}</Container>
          </Grid>
        </Grid>
      </Container>
    </UserGuard>
  );
}
