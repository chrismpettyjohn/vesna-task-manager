import React, {useState} from 'react';
import {headerHeight} from '../../site-header/SiteHeader';
import {TaskTimeSpentWire} from '@vesna-task-manager/types';
import {TimeTrackerItem} from '../time-tracker-item/TimeTrackerItem';
import {TimeTrackerItemProps} from '../time-tracker-item/TimeTrackerItem.types';
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
  const [timeTrackers, setTimeTrackers] = useState<TimeTrackerItemProps[]>([]);

  const toggleDrawer = () => {
    setIsOpen(_ => !_);
  };

  const onFinished = (taskTimeSpent: TaskTimeSpentWire, timerIndex: number) => {
    console.log(taskTimeSpent);
    removeTimeTracker(timerIndex);
  };

  const addTimeTracker = () => {
    setTimeTrackers(_ => {
      const newTimeTrackers = [..._];
      newTimeTrackers.push({
        onFinish: (taskTimeSpent: TaskTimeSpentWire) =>
          onFinished(taskTimeSpent, newTimeTrackers.length),
      });
      return newTimeTrackers;
    });
  };

  const removeTimeTracker = (timeTrackerIndex: number) => {
    setTimeTrackers(_ => {
      const newTimeTrackers = [..._];
      delete newTimeTrackers[timeTrackerIndex];
      return newTimeTrackers;
    });
  };

  return (
    <>
      <Button color="secondary" onClick={toggleDrawer}>
        <Typography variant="subtitle1">Timers</Typography>
        <Badge badgeContent={timeTrackers.length} color="primary" sx={{ml: 2}}>
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
          {timeTrackers.map((timeTracker, timeTrackerIndex) => (
            <TimeTrackerItem
              key={`time_tracker_${timeTrackerIndex}`}
              onFinish={timeTracker.onFinish}
            />
          ))}
          <List dense sx={{color: 'white'}}>
            <ListItem onClick={addTimeTracker}>
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
