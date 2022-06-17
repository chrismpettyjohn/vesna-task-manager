import React from 'react';
import {List} from '@mui/material';
import {TaskListProps} from './TaskList.types';
import {TaskListItem} from './task-llist-item/TaskListItem';

export function TaskList({tasks}: TaskListProps) {
  return (
    <List sx={{width: '100%', bgcolor: 'background.paper'}}>
      {tasks?.map(_ => (
        <TaskListItem key={`task_${_.id}`} task={_} />
      ))}
    </List>
  );
}
