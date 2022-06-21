import React, {useContext} from 'react';
import {taskContext} from '@vesna-task-manager/web';
import {TaskLabelWire} from '@vesna-task-manager/types';
import {SidebarTaskLabelsProps} from './SidebarTaskLabels.types';
import {
  Chip,
  List,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Tooltip,
  Badge,
} from '@mui/material';

export function SidebarTaskLabels({
  onToggleSidebar,
  isSidebarOpen,
}: SidebarTaskLabelsProps) {
  const {taskLabels, addTaskLabel} = useContext(taskContext);

  const onCreateTaskLabel = (newTaskLabel: TaskLabelWire) => {
    addTaskLabel(newTaskLabel);
  };

  if (!taskLabels?.length) {
    return null;
  }

  return (
    <List dense={true}>
      {taskLabels?.map((label, index) => (
        <Tooltip
          title={isSidebarOpen ? label.name : ''}
          placement="right"
          componentsProps={{
            tooltip: {
              sx: {
                backgroundColor: 'gray',
                color: 'white',
                marginLeft: '22px !important',
                boxShadow: '0px 0px 22px -2px rgba(0,0,0,0.20)',
              },
            },
          }}
        >
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
                    backgroundColor: label.color,
                  },
                }}
              >
                <i
                  className={label.icon}
                  style={{fontSize: 20, color: 'lightgray'}}
                />
              </Badge>
            </ListItemIcon>

            <ListItemText
              primary={label.name}
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
        </Tooltip>
      ))}
    </List>
  );
}
