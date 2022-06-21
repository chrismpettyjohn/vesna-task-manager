import {Link} from 'wouter';
import React, {useContext} from 'react';
import {taskContext} from '@vesna-task-manager/web';
import {TaskLabelWire} from '@vesna-task-manager/types';
import {
  Divider,
  MenuList,
  MenuItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import {CreateTaskLabelDialog} from '../task-label-dialog/create-task-label-dialog/CreateTaskLabelDialog';

export function ListTaskLabels() {
  const {taskLabels, addTaskLabel} = useContext(taskContext);
  const onCreateTaskLabel = (newTaskLabel: TaskLabelWire) => {
    addTaskLabel(newTaskLabel);
  };

  return (
    <MenuList>
      {taskLabels?.map(_ => (
        <Link to={`/tasks-list/${_.id}`}>
          <MenuItem key={`task_label_${_.id}`}>
            <ListItemIcon>
              <i className={_.icon} style={{color: 'white'}} />
            </ListItemIcon>
            <ListItemText style={{color: 'white', textAlign: 'left'}}>
              {_.name}
            </ListItemText>
          </MenuItem>
        </Link>
      ))}
      <Divider style={{background: 'white'}} />
      <CreateTaskLabelDialog onCreation={onCreateTaskLabel} />
    </MenuList>
  );
}
