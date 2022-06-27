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
import {useModalHook} from '@vesna-task-manager/web';

export function TaskDialogEditor({
  children,
  defaultTask,
  onSave,
  hideTaskLabel = false,
}: TaskDialogEditorProps) {
  const {isOpen, onToggle} = useModalHook();
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
    onToggle();
    setIsLoading(false);
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
      <IconButton color="secondary" edge="end" onClick={onToggle}>
        {children}
      </IconButton>
      {isOpen && (
        <Dialog open onClose={onToggle} maxWidth="lg">
          <DialogTitle>Task</DialogTitle>
          <DialogContent style={{width: dialogMaxWidth}}>
            <Grid container>
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  type="text"
                  value={taskName}
                  fullWidth
                  margin="dense"
                  variant="standard"
                  onChange={e => setTaskName(e?.target?.value ?? '')}
                  InputLabelProps={{shrink: true}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Content"
                  type="text"
                  multiline
                  minRows={2}
                  maxRows={4}
                  value={taskContent}
                  fullWidth
                  margin="dense"
                  variant="standard"
                  onChange={e => setTaskContent(e?.target?.value ?? '')}
                  InputLabelProps={{shrink: true}}
                />
              </Grid>
              {!hideTaskLabel && (
                <Grid item xs={12}>
                  <TaskLabelSelector
                    taskLabelID={taskLabelID}
                    onChange={setTaskLabelID}
                  />
                </Grid>
              )}
            </Grid>
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
