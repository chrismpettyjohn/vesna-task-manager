import React from 'react';
import {List} from '@mui/material';
import {UserGuard} from '@vesna-task-manager/web';
import {SidebarMenuItem} from '../sidebar-menu-item/SidebarMenuItem';

export function SidebarNavigation() {
  return (
    <UserGuard redirect={false}>
      <List dense={true} sx={{color: 'white'}}>
        <SidebarMenuItem link="/dashboard" icon="fa fa-home">
          Home
        </SidebarMenuItem>
        {/*<SidebarMenuItem link="/teams" icon="fa fa-users">*/}
        {/*  My Teams*/}
        {/*</SidebarMenuItem>*/}
        <SidebarMenuItem link="/activity-overview" icon="fa fa-chart-line">
          My Activity
        </SidebarMenuItem>
        <SidebarMenuItem link="/time-overview" icon="fa fa-clock">
          Time Spent
        </SidebarMenuItem>
      </List>
    </UserGuard>
  );
}
