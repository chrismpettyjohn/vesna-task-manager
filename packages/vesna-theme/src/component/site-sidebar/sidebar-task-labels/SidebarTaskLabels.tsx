import React, {useContext} from 'react';
import {taskContext} from '@vesna-task-manager/web';
import {TaskLabelWire} from '@vesna-task-manager/types';
import {SidebarTaskLabelsProps} from './SidebarTaskLabels.types';
import {
  List,
  Divider,
  ListItemButton,
  Tooltip,
  ListItemIcon,
  Badge,
} from '@mui/material';

export function SidebarTaskLabel({
  onToggleSidebar,
  isSidebarOpen,
}: SidebarTaskLabelsProps) {
  const {taskLabels, addTaskLabel} = useContext(taskContext);

  const onCreateTaskLabel = (newTaskLabel: TaskLabelWire) => {
    addTaskLabel(newTaskLabel);
  };

  return (
    <List dense={true}>
      {taskLabels?.map((label, index) => (
        <>
          <Tooltip
            title={isSidebarOpen ? label.name : ''}
            placement={'right'}
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
              onClick={onToggleSidebar}
              sx={{
                margin: '6px 14px',
                padding: '10px',
                borderRadius: '8px',
                backgroundColor: '#26284687',
              }}
            >
              <ListItemIcon sx={{minWidth: '46px'}}>
                <Badge
                  badgeContent={label.icon}
                  color="secondary"
                  variant="dot"
                >
                  <i className={label.icon} />
                </Badge>
              </ListItemIcon>
            </ListItemButton>
          </Tooltip>
          <Divider variant="middle" light={true} />
        </>
      ))}
    </List>
  );
}
