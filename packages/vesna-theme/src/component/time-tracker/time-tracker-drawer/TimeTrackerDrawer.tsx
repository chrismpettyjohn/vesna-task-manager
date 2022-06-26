import React, {useContext, useState} from 'react';
import {headerHeight} from '../../site-header/SiteHeader';
import {taskTimeSpentContext} from '@vesna-task-manager/web';
import {TimeTrackerItem} from '../time-tracker-item/TimeTrackerItem';
import {
  Typography,
  Badge,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

export function TimeTrackerDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const {taskTimeSpent, addTaskTimeSpent, deleteTaskTimeSpent} =
    useContext(taskTimeSpentContext);

  const toggleDrawer = () => {
    setIsOpen(_ => !_);
  };

  return (
    <>
      <Button color="secondary" onClick={toggleDrawer}>
        <Typography variant="subtitle1">Timers</Typography>
        <Badge badgeContent={taskTimeSpent.length} color="primary" sx={{ml: 2}}>
          <i className="fa fa-clock" />
        </Badge>
      </Button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        sx={{
          width: 500,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 500,
            backgroundColor: 'primary.main',
            color: 'white',
            boxSizing: 'border-box',
          },
        }}
        variant="temporary"
        anchor="right"
        ModalProps={{
          keepMounted: true,
        }}
      >
        <div style={{marginTop: headerHeight}}>
          {taskTimeSpent.map((timeTracker, timeTrackerIndex: number) => (
            <TimeTrackerItem
              key={`time_tracker_${timeTracker}`}
              timeSpentIndex={timeTrackerIndex}
            />
          ))}
          <List dense sx={{color: 'white'}}>
            <ListItem onClick={addTaskTimeSpent}>
              <ListItemButton>
                <ListItemIcon sx={{color: 'white'}}>
                  <i className="fa fa-plus-circle" />
                </ListItemIcon>
                <ListItemText primary="Add Timer" />
              </ListItemButton>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
}
