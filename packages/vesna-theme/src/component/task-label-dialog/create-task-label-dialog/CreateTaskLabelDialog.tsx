import React from 'react';
import {taskLabelService} from '@vesna-task-manager/web';
import {CreateTaskLabelDTOWire} from '@vesna-task-manager/types';
import {CreateTaskLabelDialogProps} from './CreateTaskLabelDialog.types';
import {TaskLabelDialogEditor} from '../task-label-dialog-editor/TaskLabelDialogEditor';
import {MenuList, MenuItem, ListItemText, ListItemIcon} from '@mui/material';

export function CreateTaskLabelDialog({
  onCreation,
}: CreateTaskLabelDialogProps) {
  const onCreateTaskLabel = async (
    createTaskLabelDTO: CreateTaskLabelDTOWire
  ) => {
    const newTaskLabel = await taskLabelService.create(createTaskLabelDTO);
    onCreation(newTaskLabel);
  };
  return (
    <MenuItem>
      <ListItemIcon>
        <i className="fa fa-plus-circle" style={{color: 'white'}} />
      </ListItemIcon>
      <ListItemText style={{color: 'white', textAlign: 'left'}}>
        Add Group
      </ListItemText>
    </MenuItem>
  );
}
