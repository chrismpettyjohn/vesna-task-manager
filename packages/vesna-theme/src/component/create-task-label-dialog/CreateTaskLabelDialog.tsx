import React, {useState} from 'react';
import {taskLabelService} from '@vesna-task-manager/web';
import {CreateTaskLabelDialogProps} from './CreateTaskLabelDialog.types';
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  DialogTitle,
  TextField,
} from '@mui/material';

export function CreateTaskLabelDialog({
  isOpen,
  onCreation,
  onClose,
}: CreateTaskLabelDialogProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [taskLabelName, setTaskLabelName] = useState('');
  const [taskLabelDesc, setTaskLabelDesc] = useState('');

  const onSaveTaskLabel = async () => {
    setIsLoading(true);
    try {
      const newTaskLabel = await taskLabelService.create({
        name: taskLabelName,
        desc: taskLabelDesc,
      });
      onCreation(newTaskLabel);
    } catch {
      alert('There was a problem creating your task label');
    }
    setIsLoading(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>Task Label</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          variant="standard"
          value={taskLabelName}
          onChange={e => setTaskLabelName(e.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Desc"
          type="text"
          fullWidth
          variant="standard"
          value={taskLabelDesc}
          onChange={e => setTaskLabelDesc(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button color="error" onClick={onClose} variant="text">
          Cancel
        </Button>
        <Button color="success" onClick={onSaveTaskLabel} variant="contained">
          {isLoading ? (
            <>
              <i className="fa fa-spinner fa-spin" style={{marginRight: 4}} />{' '}
              Saving...
            </>
          ) : (
            'Save'
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
