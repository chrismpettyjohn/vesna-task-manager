import {Link} from 'wouter';
import React, {useContext} from 'react';
import {taskContext} from '@vesna-task-manager/web';
import {TaskLabelWire} from '@vesna-task-manager/types';
import {MenuList, MenuItem, ListItemText} from '@mui/material';
import {CreateTaskLabelDialog} from '../task-label-dialog/create-task-label-dialog/CreateTaskLabelDialog';

export function ListTaskLabels() {
  const {taskLabels, addTaskLabel} = useContext(taskContext);
  const onCreateTaskLabel = (newTaskLabel: TaskLabelWire) => {
    addTaskLabel(newTaskLabel);
  };

  return (
    <div style={{width: '100%'}}>
      <MenuList>
        {taskLabels?.map(_ => (
          <Link to={`/tasks-list/${_.id}`}>
            <MenuItem key={`task_label_${_.id}`}>
              <i className={_.icon} style={{color: _.color, marginRight: 10}} />
              <ListItemText style={{textAlign: 'left'}}>{_.name}</ListItemText>
            </MenuItem>
          </Link>
        ))}
        <div style={{marginLeft: -10}}>
          <CreateTaskLabelDialog onCreation={onCreateTaskLabel} />
        </div>
      </MenuList>
    </div>
  );
}
