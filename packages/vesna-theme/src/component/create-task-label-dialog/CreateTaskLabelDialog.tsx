import React, {useState} from 'react';
import {SketchPicker} from 'react-color';
import {taskLabelService} from '@vesna-task-manager/web';
import {CreateTaskLabelDialogProps} from './CreateTaskLabelDialog.types';
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  TextField,
} from '@mui/material';
import {IconSelector} from '../icon-selector/IconSelector';

export function CreateTaskLabelDialog({
  isOpen,
  onCreation,
  onClose,
}: CreateTaskLabelDialogProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [taskLabelIcon, setTaskLabelIcon] = useState('');
  const [taskLabelName, setTaskLabelName] = useState('');
  const [taskLabelDesc, setTaskLabelDesc] = useState('');
  const [taskLabelColor, setTaskLabelColor] = useState('');

  const resetState = () => {
    setIsLoading(false);
    setTaskLabelIcon('');
    setTaskLabelName('');
    setTaskLabelDesc('');
    setTaskLabelColor('');
  };

  const onSaveTaskLabel = async () => {
    setIsLoading(true);
    try {
      const newTaskLabel = await taskLabelService.create({
        icon: taskLabelIcon,
        name: taskLabelName,
        desc: taskLabelDesc,
        color: taskLabelColor,
      });
      onCreation(newTaskLabel);
      resetState();
    } catch {
      alert('There was a problem creating your task label');
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>Task Label</DialogTitle>
      <DialogContent style={{width: 500}}>
        <div style={{marginBottom: 10}}>
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
        <div style={{marginBottom: 10}}>
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
        <div style={{marginBottom: 10}}>
          <SketchPicker
            color={taskLabelColor}
            onChange={e => setTaskLabelColor(e.hex)}
          />
        </div>
        <div style={{marginBottom: 10}}>
          <IconSelector icon={taskLabelIcon} onChange={setTaskLabelIcon} />
        </div>
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
