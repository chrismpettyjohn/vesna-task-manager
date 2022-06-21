import React, {useState} from 'react';
import {dialogMaxWidth} from '../../../utility/theme.const';
import {RecordTimeSpent} from './record-time-spent/RecordTimeSpent';
import {TaskTimeSpentDialogProps} from './TaskTimeSpentDialog.types';
import {IconButton, Dialog, DialogTitle, DialogContent} from '@mui/material';

export function TaskTimeSpentDialog({task}: TaskTimeSpentDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(_ => !_);
  };

  return (
    <>
      <IconButton edge="end" onClick={toggleIsOpen}>
        <i className="fa fa-clock" />
      </IconButton>
      {isOpen && (
        <Dialog open onClose={toggleIsOpen} maxWidth="lg">
          <DialogTitle>Viewing Time Spent on #{task.id}</DialogTitle>
          <DialogContent style={{width: dialogMaxWidth}}>
            <RecordTimeSpent task={task} onFinished={() => {}} />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
