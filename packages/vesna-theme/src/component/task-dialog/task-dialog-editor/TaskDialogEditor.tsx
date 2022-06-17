import React, {useState} from 'react';
import {TaskDialogEditorProps} from './TaskDialogEditor.types';
import {TaskLabelSelector} from '../../task-label-selector/TaskLabelSelector';
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  TextField,
} from '@mui/material';

export function TaskDialogEditor({
  children,
  defaultTask,
  onSave,
  hideTaskLabel = false,
}: TaskDialogEditorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [taskLabelID, setTaskLabelID] = useState<number | undefined>(
    defaultTask?.labelID
  );
  const [taskName, setTaskName] = useState(defaultTask?.name ?? '');
  const [taskContent, setTaskContent] = useState(defaultTask?.content ?? '');

  const resetState = () => {
    setTaskLabelID(undefined);
    setTaskName('');
    setTaskContent('');
    setIsOpen(false);
    setIsLoading(false);
  };

  const onToggleDialog = () => {
    setIsOpen(_ => !_);
  };

  const onSaveTaskLabel = async () => {
    setIsLoading(true);
    try {
      if (!taskName || !taskContent || !taskLabelID) {
        alert('Please provide a task name, description and label');
      }

      await onSave({
        name: taskName,
        content: taskContent,
        taskLabelID: taskLabelID!,
      });
      resetState();
    } catch {
      alert('There was a problem creating your task label');
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        color="success"
        onClick={onToggleDialog}
        variant="contained"
        size="large"
      >
        {children}
      </Button>
      {isOpen && (
        <Dialog open onClose={onToggleDialog}>
          <DialogTitle>Task</DialogTitle>
          <DialogContent style={{width: 500}}>
            <div style={{marginBottom: 10}}>
              <TextField
                margin="dense"
                id="name"
                label="Name"
                type="text"
                fullWidth
                variant="filled"
                value={taskName}
                onChange={e => setTaskName(e?.target?.value ?? '')}
              />
            </div>
            <div style={{marginBottom: 10}}>
              <TextField
                id="content"
                label="Content"
                multiline
                rows={4}
                fullWidth
                variant="filled"
                value={taskContent}
                onChange={e => setTaskContent(e?.target?.value ?? '')}
              />
            </div>
            {!hideTaskLabel && (
              <div style={{marginBottom: 10}}>
                <TaskLabelSelector
                  taskLabelID={taskLabelID}
                  onChange={setTaskLabelID}
                />
              </div>
            )}
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
