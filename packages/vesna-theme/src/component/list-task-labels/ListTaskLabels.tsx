import React, {useContext, useState} from 'react';
import {taskContext} from '@vesna-task-manager/web';
import {TaskLabelWire} from '@vesna-task-manager/types';
import {MenuList, MenuItem, ListItemText} from '@mui/material';
import {CreateTaskLabelDialog} from '../create-task-label-dialog/CreateTaskLabelDialog';

export function ListTaskLabels() {
  const [isCreateTaskLabelDialogOpen, setIsCreateTaskLabelDialogOpen] =
    useState(false);
  const {taskLabels, addTaskLabel} = useContext(taskContext);

  const toggleCreateTaskLabelDialog = () => {
    setIsCreateTaskLabelDialogOpen(_ => !_);
  };

  const onCreateTaskLabel = (newTaskLabel: TaskLabelWire) => {
    addTaskLabel(newTaskLabel);
    setIsCreateTaskLabelDialogOpen(false);
  };

  return (
    <div style={{width: '100%'}}>
      <MenuList>
        {taskLabels?.map(_ => (
          <MenuItem key={`task_label_${_.id}`}>
            <i className={_.icon} style={{marginRight: 10}} />
            <ListItemText style={{textAlign: 'left'}}>{_.name}</ListItemText>
          </MenuItem>
        ))}
        <MenuItem onClick={toggleCreateTaskLabelDialog}>
          <i className="fa fa-plus-circle" style={{marginRight: 10}} />
          <ListItemText style={{textAlign: 'left'}}>Add Label</ListItemText>
        </MenuItem>
        <CreateTaskLabelDialog
          isOpen={isCreateTaskLabelDialogOpen}
          onCreation={onCreateTaskLabel}
          onClose={toggleCreateTaskLabelDialog}
        />
      </MenuList>
    </div>
  );
}
