import {sumBy} from 'lodash';
import React, {useState} from 'react';
import {dialogMaxWidth} from '../../../utility/theme.const';
import {TaskTimeSpentDialogProps} from './TaskTimeSpentDialog.types';
import {TimeSpentTable} from '../../time-spent-table/TimeSpentTable';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
} from '@mui/material';

export function TaskTimeSpentDialog({task}: TaskTimeSpentDialogProps) {
  const totalTimeSpent = sumBy(task.timeSpent, 'durationInSeconds');
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(_ => !_);
  };

  return (
    <>
      <Button onClick={toggleIsOpen}>
        <i className="fa fa-clock" style={{marginRight: 4}} />
        {totalTimeSpent}s
      </Button>
      {isOpen && (
        <Dialog open onClose={toggleIsOpen} maxWidth="lg">
          <DialogTitle>Viewing Time Spent on #{task.id}</DialogTitle>
          <DialogContent style={{width: dialogMaxWidth}}>
            <Typography variant="subtitle1">
              Total Time Spent:{' '}
              <span style={{fontSize: '2rem'}}>{totalTimeSpent}s</span>
            </Typography>
            <TimeSpentTable color="white" timeSpent={task.timeSpent.reverse()} />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
