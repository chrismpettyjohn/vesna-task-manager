import React, {useState} from 'react';
import {taskService} from '@vesna-task-manager/web';
import {CreateTaskDialogProps} from './CreateTaskDialog.types';
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  TextField,
} from '@mui/material';
import {TaskLabelSelector} from '../task-label-selector/TaskLabelSelector';

export function CreateTaskDialog({onCreation}: CreateTaskDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [taskLabelID, setTaskLabelID] = useState<number>();
  const [taskName, setTaskName] = useState('');
  const [taskContent, setTaskContent] = useState('');

  const onToggleDialog = () => {
    setIsOpen(_ => !_);
  };

  const onSaveTaskLabel = async () => {
    setIsLoading(true);
    try {
      if (!taskLabelID || !taskName || !taskContent) {
        alert('You must provide a task label, name and content');
        return;
      }

      const newTaskLabel = await taskService.create({
        taskLabelID: taskLabelID,
        name: taskName,
        content: taskContent,
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
    <>
      <Button color="success" onClick={onToggleDialog} variant="contained">
        <i className="fa fa-plus-circle" style={{paddingRight: 4}} />
        Create
      </Button>
      {isOpen && (
        <Dialog open onClose={onToggleDialog}>
          <DialogTitle>Task</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
              value={taskName}
              onChange={e => setTaskName(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="content"
              label="Content"
              type="textarea"
              fullWidth
              variant="standard"
              value={taskContent}
              onChange={e => setTaskContent(e.target.value)}
            />
            <TaskLabelSelector
              taskLabelID={taskLabelID}
              onChange={setTaskLabelID}
            />
          </DialogContent>
          <DialogActions>
            <Button color="error" onClick={onToggleDialog} variant="text">
              Cancel
            </Button>
            <Button
              color="success"
              onClick={onSaveTaskLabel}
              variant="contained"
            >
              {isLoading ? (
                <>
                  <i
                    className="fa fa-spinner fa-spin"
                    style={{marginRight: 4}}
                  />{' '}
                  Saving...
                </>
              ) : (
                'Save'
              )}
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}
