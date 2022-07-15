import {sumBy} from 'lodash';
import React from 'react';
import {dialogMaxWidth} from '../../../utility/theme.const';
import {TaskTimeSpentDialogProps} from './TaskTimeSpentDialog.types';
import {TimeSpentTable} from '../../time-spent-table/TimeSpentTable';
import {convertSecondsToHhMmSS} from '../../../utility/convert-seconds-to-hh-mm-ss';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
} from '@mui/material';
import {useModalHook} from '@vesna-task-manager/web';

export function TaskTimeSpentDialog({task}: TaskTimeSpentDialogProps) {
  const {isOpen, onToggle} = useModalHook();
  const totalTimeSpent = convertSecondsToHhMmSS(
    sumBy(task.timeSpent, 'durationInSeconds')
  );

  const formattedTimeSpent = (
    <>
      {totalTimeSpent.hours}:{totalTimeSpent.minutes}:{totalTimeSpent.seconds}
    </>
  );

  return (
    <>
      <Button onClick={onToggle}>
        <i className="fa fa-clock" style={{marginRight: 4}} />
        {formattedTimeSpent}
      </Button>
      {isOpen && (
        <Dialog open onClose={onToggle} maxWidth="lg">
          <DialogTitle>Viewing Time Spent on #{task.id}</DialogTitle>
          <DialogContent style={{width: dialogMaxWidth}}>
            <Typography variant="subtitle1">
              Total Time Spent:{' '}
              <span style={{fontSize: '2rem'}}>{formattedTimeSpent}</span>
            </Typography>
            <TimeSpentTable
              color="white"
              timeSpent={task.timeSpent.reverse()}
            />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
