import {List} from '@mui/material';
import React, {useContext} from 'react';
import {taskContext} from '@vesna-task-manager/web';
import {TaskListItem} from './task-llist-item/TaskListItem';

export function TaskList() {
  const {tasks} = useContext(taskContext);

  return (
    <List sx={{width: '100%', bgcolor: 'background.paper'}}>
      {tasks?.map(_ => (
        <TaskListItem key={`task_${_.id}`} task={_} />
      ))}
    </List>
  );
}
