import {Link} from 'wouter';
import React, {useContext} from 'react';
import {TaskLabelWire} from '@vesna-task-manager/types';
import {taskContext, UserGuard} from '@vesna-task-manager/web';
import {
  List,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Tooltip,
  Badge,
} from '@mui/material';
import {CreateTaskLabelDialog} from '../../task-label-dialog/create-task-label-dialog/CreateTaskLabelDialog';

export function SidebarTaskLabels() {
  const {taskLabels, addTaskLabel} = useContext(taskContext);

  const onCreateTaskLabel = (newTaskLabel: TaskLabelWire) => {
    addTaskLabel(newTaskLabel);
  };

  return (
    <UserGuard redirect={false}>
      <List dense={true}>
        {taskLabels?.map(label => (
          <Tooltip
            title={label.name}
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
            <Link to={`/tasks-list/${label.id}`}>
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
            </Link>
          </Tooltip>
        ))}
        <CreateTaskLabelDialog onCreation={onCreateTaskLabel} />
      </List>
    </UserGuard>
  );
}
