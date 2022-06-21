import React, {useState} from 'react';
import {taskService} from '@vesna-task-manager/web';
import {dialogMaxWidth} from '../../../utility/theme.const';
import {DeleteTaskDialogProps} from './DeleteTaskDialog.types';
import {
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';

export function DeleteTaskDialog({task, onDeletion}: DeleteTaskDialogProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeletionWarning, setShowDeletionWarning] = useState(false);

  const onDeleteTaskListItem = async () => {
    if (!showDeletionWarning) {
      setShowDeletionWarning(true);
      return;
    }

    if (isDeleting) {
      return;
    }

    setShowDeletionWarning(false);
    setIsDeleting(true);

    try {
      await taskService.deleteByID(task.id);
      onDeletion();
    } catch {
      alert('Failed to delete task');
    }

    setIsDeleting(false);
  };

  return (
    <>
      <IconButton
        edge="end"
        aria-label="comments"
        onClick={onDeleteTaskListItem}
        disabled={isDeleting}
        style={{color: 'red'}}
      >
        <i className={isDeleting ? 'fa fa-spinner fa-spin' : 'fa fa-trash'} />
      </IconButton>
      {showDeletionWarning && (
        <Dialog
          open
          onClose={() => setShowDeletionWarning(false)}
          maxWidth="lg"
        >
          <DialogTitle id="alert-dialog-title">
            Deleting Task "{task.name}"
          </DialogTitle>
          <DialogContent style={{width: dialogMaxWidth}}>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete this task? Once deleted, it will
              be lost forever.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              color="secondary"
              onClick={() => setShowDeletionWarning(false)}
            >
              Cancel
            </Button>
            <Button color="error" onClick={onDeleteTaskListItem} autoFocus>
              Delete Task
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}
