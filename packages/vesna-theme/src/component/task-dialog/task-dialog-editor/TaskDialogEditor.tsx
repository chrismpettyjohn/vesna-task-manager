import {toast} from 'react-toastify';
import React, {useState} from 'react';
import {dialogMaxWidth} from '../../../utility/theme.const';
import {TaskDialogEditorProps} from './TaskDialogEditor.types';
import {TaskLabelSelector} from '../../task-label-selector/TaskLabelSelector';
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  TextField,
  IconButton,
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
      if (!taskName) {
        toast.error('Task name is required');
        return;
      }

      if (!taskContent) {
        toast.error('Task content is required');
        return;
      }

      if (!taskLabelID) {
        toast.error('Task label is required');
        return;
      }

      await onSave({
        name: taskName,
        content: taskContent,
        taskLabelID: taskLabelID!,
      });
      resetState();
    } catch {
      toast.error('Failed to save changes to task due to an unexpected error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <IconButton color="secondary" edge="end" onClick={onToggleDialog}>
        {children}
      </IconButton>
      {isOpen && (
        <Dialog open onClose={onToggleDialog} maxWidth="lg">
          <DialogTitle>Task</DialogTitle>
          <DialogContent style={{width: dialogMaxWidth}}>
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
