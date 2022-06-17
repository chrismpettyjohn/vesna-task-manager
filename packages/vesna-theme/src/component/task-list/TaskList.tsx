import React from 'react';
import {
  List,
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from '@mui/material';
import {TaskListProps} from './TaskList.types';
import {TaskListItem} from './task-llist-item/TaskListItem';

export function TaskList({tasks}: TaskListProps) {
  return (
    <TableContainer sx={{maxHeight: 440}}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell key="endedAt">&nbsp;</TableCell>
            <TableCell key="task">Task</TableCell>
            <TableCell key="taskGroup">Group</TableCell>
            <TableCell key="taskActions">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks?.map(_ => (
            <TaskListItem key={`task_${_.id}`} task={_} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  // return (
  //   <List sx={{width: '100%', bgcolor: 'background.paper'}}>
  //     {tasks?.map(_ => (
  //       <TaskListItem key={`task_${_.id}`} task={_} />
  //     ))}
  //   </List>
  // );
}
