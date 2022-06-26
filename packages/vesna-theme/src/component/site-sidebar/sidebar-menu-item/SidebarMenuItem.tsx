import React from 'react';
import {Link} from 'wouter';
import {SidebarMenuItemProps} from './SidebarMenuItem.types';
import {Badge, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';

export function SidebarMenuItem({
  children,
  icon,
  iconColor,
  link,
}: SidebarMenuItemProps) {
  return (
    <Link to={link}>
      <ListItemButton
        sx={{
          margin: '6px 14px',
          padding: '10px',
          borderRadius: '8px',
          '&:hover': {
            backgroundColor: '#26284687',
          },
        }}
      >
        <ListItemIcon sx={{minWidth: '46px'}}>
          <Badge
            badgeContent=""
            color="secondary"
            variant="dot"
            sx={{
              '& .MuiBadge-badge': {
                backgroundColor: iconColor ?? 'transparent',
              },
            }}
          >
            <i className={icon} style={{fontSize: 20, color: 'lightgray'}} />
          </Badge>
        </ListItemIcon>
        <ListItemText
          primary={children}
          primaryTypographyProps={{
            variant: 'body2',
          }}
          sx={{
            display: 'inline',
            margin: '0px',
            overflowX: 'hidden',
            color: 'lightgray',
            whiteSpace: 'nowrap',
            minWidth: '126px',
          }}
        />
      </ListItemButton>
    </Link>
  );
}
