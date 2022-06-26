import {toast} from 'react-toastify';
import React, {useState} from 'react';
import {dialogMaxWidth} from '../../../utility/theme.const';
import {TaskDialogEditorProps} from './TaskDialogEditor.types';
import {DeleteTaskButton} from '../delete-task-button/DeleteTaskButton';
import {TaskLabelSelector} from '../../task-label-selector/TaskLabelSelector';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
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
    setTaskLabelID(defaultTask?.labelID);
    setTaskName(defaultTask?.name ?? '');
    setTaskContent(defaultTask?.content ?? '');
    setIsOpen(false);
    setIsLoading(false);
  };

  const onToggleDialog = () => {
    setIsOpen(_ => !_);
  };

  const onSaveTask = async () => {
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
            <TextField
              label="Name"
              type="text"
              fullWidth
              value={taskName}
              margin="dense"
              variant="filled"
              onChange={e => setTaskName(e?.target?.value ?? '')}
            />
            <TextField
              label="Content"
              type="text"
              fullWidth
              multiline
              minRows={2}
              maxRows={4}
              value={taskContent}
              margin="dense"
              variant="filled"
              onChange={e => setTaskContent(e?.target?.value ?? '')}
            />
            {!hideTaskLabel && (
              <TaskLabelSelector
                taskLabelID={taskLabelID}
                onChange={setTaskLabelID}
              />
            )}
            <Grid container style={{marginTop: '5%'}}>
              <Grid item xs={12}>
                <hr />
              </Grid>
              <Grid item xs={6}>
                <div style={{float: 'left'}}>
                  {defaultTask?.id && <DeleteTaskButton task={defaultTask} />}
                </div>
              </Grid>
              <Grid item xs={6}>
                <div style={{float: 'right'}}>
                  <Button
                    color="success"
                    onClick={onSaveTask}
                    variant="contained"
                    type="submit"
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
                </div>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
