import React, {useState} from 'react';
import {CirclePicker} from 'react-color';
import {IconSelector} from '../../icon-selector/IconSelector';
import {TaskLabelDialogEditorProps} from './TaskLabelDialogEditor.types';
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  TextField,
} from '@mui/material';

export function TaskLabelDialogEditor({
  children,
  defaultTaskLabel,
  onSave,
}: TaskLabelDialogEditorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [taskLabelIcon, setTaskLabelIcon] = useState('');
  const [taskLabelName, setTaskLabelName] = useState('');
  const [taskLabelDesc, setTaskLabelDesc] = useState('');
  const [taskLabelColor, setTaskLabelColor] = useState('');

  const toggleIsOpen = () => {
    setIsOpen(_ => !_);
  };

  const resetState = () => {
    setIsLoading(false);
    setTaskLabelIcon(defaultTaskLabel?.icon ?? '');
    setTaskLabelName(defaultTaskLabel?.name ?? '');
    setTaskLabelDesc(defaultTaskLabel?.desc ?? '');
    setTaskLabelColor(defaultTaskLabel?.color ?? '');
  };

  const onSaveTaskLabel = async () => {
    setIsLoading(true);
    try {
      if (
        !taskLabelName ||
        !taskLabelDesc ||
        !taskLabelIcon ||
        !taskLabelColor
      ) {
        alert('Please provide a task label name, description, icon and color');
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
      alert('There was a problem creating your task label');
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button color="secondary" onClick={toggleIsOpen} size="large">
        {' '}
        {children}
      </Button>
      {isOpen && (
        <Dialog open onClose={toggleIsOpen}>
          <DialogTitle>Task Label</DialogTitle>
          <DialogContent style={{width: 500}}>
            <div style={{marginBottom: 20}}>
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
            </div>
            <div style={{marginBottom: 20}}>
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
            </div>
            <div style={{marginBottom: 20, width: '100%'}}>
              <b>Color</b>
              <CirclePicker
                color={taskLabelColor}
                onChange={e => setTaskLabelColor(e.hex)}
                width="100%"
              />
            </div>
            <div style={{marginBottom: 20}}>
              <b>Icon</b>
              <IconSelector icon={taskLabelIcon} onChange={setTaskLabelIcon} />
            </div>
          </DialogContent>
          <DialogActions>
            <Button color="error" onClick={toggleIsOpen} variant="text">
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
