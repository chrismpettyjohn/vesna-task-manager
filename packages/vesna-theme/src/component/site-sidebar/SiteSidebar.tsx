import React from 'react';
import {Drawer, useTheme} from '@mui/material';
import {headerHeight} from '../site-header/SiteHeader';
import {SidebarUserInfo} from './sidebar-user-info/SidebarUserInfo';
import {SidebarNavigation} from './sidebar-navigation/SidebarNavigation';
import {SidebarTaskLabels} from './sidebar-task-labels/SidebarTaskLabels';

export const drawerWidthOpen = 240;

export function SiteSidebar() {
  const paddingIconButton = 10;
  const marginIconButton = 14;
  const iconFontSize = 20;
  const drawerWidthClose =
    (paddingIconButton + marginIconButton) * 2 + iconFontSize;
  const theme = useTheme();

  const isOpen = true;

  const drawerContent = (
    <>
      <div style={{marginTop: headerHeight}}>
        <SidebarNavigation />
        <SidebarTaskLabels />
      </div>
      <SidebarUserInfo />
    </>
  );

  return (
    <Drawer
      variant="permanent"
      open={isOpen}
      sx={{
        width: !isOpen
          ? {xs: '0px', sm: drawerWidthClose}
          : {xs: drawerWidthClose, sm: drawerWidthOpen},
        '& .MuiDrawer-paper': {
          justifyContent: 'space-between',
          overflowX: 'hidden',
          width: !isOpen
            ? {xs: '0px', sm: drawerWidthClose}
            : {xs: drawerWidthClose, sm: drawerWidthOpen},
          borderRight: '0px',
          boxShadow: theme.shadows[8],
          backgroundColor: isOpen ? '#11101D' : '#11101D',
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
}
