import {toast} from 'react-toastify';
import React, {useState} from 'react';
import {CirclePicker} from 'react-color';
import {useModalHook} from '@vesna-task-manager/web';
import {dialogMaxWidth} from '../../../utility/theme.const';
import {IconSelector} from '../../icon-selector/IconSelector';
import {TaskLabelDialogEditorProps} from './TaskLabelDialogEditor.types';
import {DeleteTaskLabelButton} from '../delete-task-label-button/DeleteTaskLabelButton';
import {
  Button,
  Grid,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';

export function TaskLabelDialogEditor({
  children,
  defaultTaskLabel,
  onSave,
  onDelete = () => {},
}: TaskLabelDialogEditorProps) {
  const {isOpen, onToggle} = useModalHook();
  const [isLoading, setIsLoading] = useState(false);
  const [taskLabelIcon, setTaskLabelIcon] = useState(
    defaultTaskLabel?.icon ?? 'fas fa-tasks'
  );
  const [taskLabelName, setTaskLabelName] = useState(
    defaultTaskLabel?.name ?? ''
  );
  const [taskLabelDesc, setTaskLabelDesc] = useState(
    defaultTaskLabel?.desc ?? ''
  );
  const [taskLabelColor, setTaskLabelColor] = useState(
    defaultTaskLabel?.color ?? ''
  );

  const resetState = () => {
    onToggle();
    setIsLoading(false);
    setTaskLabelIcon(defaultTaskLabel?.icon ?? 'fas fa-tasks');
    setTaskLabelName(defaultTaskLabel?.name ?? '');
    setTaskLabelDesc(defaultTaskLabel?.desc ?? '');
    setTaskLabelColor(defaultTaskLabel?.color ?? '');
  };

  const checkTaskLabelInput = (): boolean => {
    const dataErrors: string[] = [];

    if (!taskLabelName) {
      dataErrors.push("Name can't be empty");
    }

    if (!taskLabelDesc) {
      dataErrors.push("Description can't be empty");
    }

    if (!taskLabelIcon) {
      dataErrors.push('You have to select an icon');
    }

    if (!taskLabelColor) {
      dataErrors.push('You have to select a color');
    }

    for (const dataError of dataErrors) {
      toast.error(dataError);
    }

    return dataErrors.length === 0;
  };

  const onSaveTaskLabel = async () => {
    setIsLoading(true);
    try {
      const isInputValid = checkTaskLabelInput();

      if (!isInputValid) {
        return;
      }

      await onSave({
        name: taskLabelName,
        desc: taskLabelDesc,
        icon: taskLabelIcon,
        color: taskLabelColor,
      });
      resetState();
    } catch {
      toast.error(
        `Failed to create task label ${taskLabelName} due to an unexpected error`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <span onClick={onToggle}> {children}</span>
      {isOpen && (
        <Dialog open onClose={onToggle} maxWidth="lg">
          <DialogTitle>Task Label</DialogTitle>
          <DialogContent style={{width: dialogMaxWidth}}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  type="text"
                  fullWidth
                  margin="dense"
                  variant="standard"
                  value={taskLabelName}
                  onChange={e => setTaskLabelName(e?.target?.value ?? '')}
                  InputLabelProps={{shrink: true}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Desc"
                  fullWidth
                  margin="dense"
                  variant="standard"
                  multiline
                  rows={4}
                  value={taskLabelDesc}
                  onChange={e => setTaskLabelDesc(e?.target?.value ?? '')}
                  InputLabelProps={{shrink: true}}
                />
              </Grid>
              <Grid item xs={12}>
                <b>Color</b>
                <CirclePicker
                  color={taskLabelColor}
                  onChange={e => setTaskLabelColor(e.hex)}
                  width="100%"
                />
              </Grid>
              <Grid item xs={12}>
                <IconSelector
                  icon={taskLabelIcon}
                  onChange={setTaskLabelIcon}
                />
              </Grid>
            </Grid>
            <Grid container style={{marginTop: '5%'}}>
              <Grid item xs={12}>
                <hr />
              </Grid>
              <Grid item xs={6}>
                <div style={{float: 'left'}}>
                  {defaultTaskLabel?.id && (
                    <DeleteTaskLabelButton
                      taskLabel={defaultTaskLabel}
                      onDeletion={onDelete}
                    />
                  )}
                </div>
              </Grid>
              <Grid item xs={6}>
                <div style={{float: 'right'}}>
                  <Button
                    color="success"
                    onClick={onSaveTaskLabel}
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
