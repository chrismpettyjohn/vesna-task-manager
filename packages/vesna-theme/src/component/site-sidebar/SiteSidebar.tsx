import React, {useState} from 'react';
import {SidebarUserInfo} from './sidebar-user-info/SidebarUserInfo';
import {Box, Button, Drawer, Typography, useTheme} from '@mui/material';
import {SidebarTaskLabels} from './sidebar-task-labels/SidebarTaskLabels';
import {SiteLogo} from '../site-logo/SiteLogo';
import {SidebarNavigation} from './sidebar-navigation/SidebarNavigation';

export function SiteSidebar() {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const drawerWidthOpen = 240;
  const paddingIconButton = 10;
  const marginIconButton = 14;
  const iconFontSize = 20;
  const drawerWidthClose =
    (paddingIconButton + marginIconButton) * 2 + iconFontSize;

  const toggleSidebar = () => {
    setIsOpen(_ => !_);
  };

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
            display: isOpen ? 'none' : {xs: 'none', sm: 'initial'},
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
            backgroundColor: isOpen,
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
      open={isOpen}
      sx={{
        width: isOpen
          ? {xs: '0px', sm: drawerWidthClose}
          : {xs: drawerWidthClose, sm: drawerWidthOpen},
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: isOpen
            ? theme.transitions.duration.leavingScreen
            : theme.transitions.duration.enteringScreen,
        }),
        '& .MuiDrawer-paper': {
          justifyContent: 'space-between',
          overflowX: 'hidden',
          width: isOpen
            ? {xs: '0px', sm: drawerWidthClose}
            : {xs: drawerWidthClose, sm: drawerWidthOpen},
          borderRight: '0px',
          boxShadow: theme.shadows[8],
          backgroundColor: isOpen ? '#11101D' : '#11101D',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: isOpen
              ? theme.transitions.duration.leavingScreen
              : theme.transitions.duration.enteringScreen,
          }),
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
}
