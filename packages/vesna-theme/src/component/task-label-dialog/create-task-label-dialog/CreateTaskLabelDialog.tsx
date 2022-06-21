import React from 'react';
import {toast} from 'react-toastify';
import {taskLabelService} from '@vesna-task-manager/web';
import {CreateTaskLabelDTOWire} from '@vesna-task-manager/types';
import {CreateTaskLabelDialogProps} from './CreateTaskLabelDialog.types';
import {ListItemButton, ListItemText, ListItemIcon} from '@mui/material';
import {TaskLabelDialogEditor} from '../task-label-dialog-editor/TaskLabelDialogEditor';

export function CreateTaskLabelDialog({
  onCreation,
}: CreateTaskLabelDialogProps) {
  const onCreateTaskLabel = async (
    createTaskLabelDTO: CreateTaskLabelDTOWire
  ) => {
    const newTaskLabel = await taskLabelService.create(createTaskLabelDTO);
    onCreation(newTaskLabel);
    toast.success(
      `You successfully created a new task label #${newTaskLabel.name}!`
    );
  };

  return (
    <TaskLabelDialogEditor onSave={onCreateTaskLabel}>
      <ListItemButton
        sx={{
          margin: '6px 14px',
          padding: '10px',
          backgroundColor: '#26284687',
          borderRadius: '8px',
          '&:hover': {
            backgroundColor: '#26284687',
          },
        }}
      >
        <ListItemIcon sx={{minWidth: '46px'}}>
          <i
            className="fa fa-plus-circle"
            style={{fontSize: 20, color: 'lightgray'}}
          />
        </ListItemIcon>

        <ListItemText
          primary="New Label"
          primaryTypographyProps={{
            variant: 'body2',
          }}
          sx={{
            display: 'inline',
            margin: '0px',
            overflowX: 'hidden',
            color: 'lightgray',
            whiteSpace: 'nowrap',
            minWidth: '126px',
          }}
        />
      </ListItemButton>
    </TaskLabelDialogEditor>
  );
}
