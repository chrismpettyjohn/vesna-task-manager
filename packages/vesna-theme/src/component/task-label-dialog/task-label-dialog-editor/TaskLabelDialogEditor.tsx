import {toast} from 'react-toastify';
import React, {useState} from 'react';
import {CirclePicker} from 'react-color';
import {IconSelector} from '../../icon-selector/IconSelector';
import {TaskLabelDialogEditorProps} from './TaskLabelDialogEditor.types';
import {
  Button,
  Grid,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import {DeleteTaskLabelButton} from '../delete-task-label-button/DeleteTaskLabelButton';

export function TaskLabelDialogEditor({
  children,
  defaultTaskLabel,
  onSave,
  onDelete = () => {},
}: TaskLabelDialogEditorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [taskLabelIcon, setTaskLabelIcon] = useState(
    defaultTaskLabel?.icon ?? ''
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

  const toggleIsOpen = () => {
    setIsOpen(_ => !_);
  };

  const resetState = () => {
    setIsOpen(false);
    setIsLoading(false);
    setTaskLabelIcon(defaultTaskLabel?.icon ?? '');
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
      <span onClick={toggleIsOpen}> {children}</span>
      {isOpen && (
        <Dialog open onClose={toggleIsOpen} maxWidth="lg">
          <DialogTitle>Task Label</DialogTitle>
          <DialogContent style={{width: 500}}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  id="name"
                  label="Name"
                  type="text"
                  fullWidth
                  variant="filled"
                  value={taskLabelName}
                  onChange={e => setTaskLabelName(e?.target?.value ?? '')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  id="name"
                  label="Desc"
                  fullWidth
                  multiline
                  rows={4}
                  variant="filled"
                  value={taskLabelDesc}
                  onChange={e => setTaskLabelDesc(e?.target?.value ?? '')}
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
                <b>Icon</b>
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
