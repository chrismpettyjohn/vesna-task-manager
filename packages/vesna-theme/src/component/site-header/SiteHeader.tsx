import React, {useContext} from 'react';
import {themeContext} from '@vesna-task-manager/web';
import {AppBar, Toolbar, IconButton, Typography} from '@mui/material';

export function SiteHeader() {
  const {sidebarWidth} = useContext(themeContext);
  console.log(sidebarWidth);
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${sidebarWidth}px)`,
        ml: `${sidebarWidth}px`,
        height: 60,
      }}
    >
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{mr: 2}}>
          <i className="fa fa-clock" />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
          Photos
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
