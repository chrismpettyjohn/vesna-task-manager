import React from 'react';
import {Container} from '@mui/material';
import {UserGuard} from '@vesna-task-manager/web';
import {UserLayoutProps} from './UserLayout.types';
import {SiteFooter} from '../site-footer/SiteFooter';
import {SiteHeader} from '../site-header/SiteHeader';
import {drawerWidthOpen, SiteSidebar} from '../site-sidebar/SiteSidebar';

export function UserLayout({children}: UserLayoutProps) {
  return (
    <UserGuard>
      <SiteHeader />
      <SiteSidebar />
      <Container
        maxWidth={false}
        sx={{width: `calc(100% - ${drawerWidthOpen}px)`, mt: 10, ml: 30}}
      >
        {children}
      </Container>
      <SiteFooter />
    </UserGuard>
  );
}
