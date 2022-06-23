import {SiteLogo} from '../site-logo/SiteLogo';
import React, {useContext, useEffect} from 'react';
import {themeContext} from '@vesna-task-manager/web';
import {Box, Button, Drawer, useTheme} from '@mui/material';
import {SidebarUserInfo} from './sidebar-user-info/SidebarUserInfo';
import {SidebarNavigation} from './sidebar-navigation/SidebarNavigation';
import {SidebarTaskLabels} from './sidebar-task-labels/SidebarTaskLabels';

export function SiteSidebar() {
  const drawerWidthOpen = 240;
  const paddingIconButton = 10;
  const marginIconButton = 14;
  const iconFontSize = 20;
  const drawerWidthClose =
    (paddingIconButton + marginIconButton) * 2 + iconFontSize;

  const theme = useTheme();
  const {setSidebarWidth, toggleSidebar, isSidebarOpen} =
    useContext(themeContext);

  useEffect(() => {
    setSidebarWidth(isSidebarOpen ? drawerWidthClose : drawerWidthOpen);
  }, [isSidebarOpen]);

  const drawerContent = (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          height: '42px',
          width: 'auto',
          backgroundColor: 'transparent',
          margin: '14px 14px',
          padding: '12px 0px',
          borderBottom: '1px solid lightgray',
          alignItems: 'flex-end',
        }}
      >
        <Box
          sx={{
            flexShrink: 0,
            display: isSidebarOpen ? 'none' : {xs: 'none', sm: 'initial'},
            marginBottom: '-5px',
          }}
        >
          <SiteLogo />
        </Box>
        <Button
          onClick={toggleSidebar}
          // @ts-ignore
          sx={{
            minWidth: 'initial',
            padding: '10px',
            color: 'gray',
            borderRadius: '8px',
            backgroundColor: isSidebarOpen,
            '&:hover': {
              backgroundColor: '#26284687',
            },
          }}
        >
          <i className="fa fa-bars" style={{color: 'white'}} />
        </Button>
      </Box>
      <div>
        <SidebarNavigation />
        <SidebarTaskLabels />
      </div>
      <SidebarUserInfo />
    </>
  );

  return (
    <Drawer
      variant="permanent"
      open={isSidebarOpen}
      sx={{
        width: isSidebarOpen
          ? {xs: '0px', sm: drawerWidthClose}
          : {xs: drawerWidthClose, sm: drawerWidthOpen},
        '& .MuiDrawer-paper': {
          justifyContent: 'space-between',
          overflowX: 'hidden',
          width: isSidebarOpen
            ? {xs: '0px', sm: drawerWidthClose}
            : {xs: drawerWidthClose, sm: drawerWidthOpen},
          borderRight: '0px',
          boxShadow: theme.shadows[8],
          backgroundColor: isSidebarOpen ? '#11101D' : '#11101D',
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
}
