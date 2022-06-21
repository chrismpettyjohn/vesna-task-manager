import React from 'react';
import {
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from '@mui/material';
import {TaskListProps} from './TaskList.types';
import {TaskListItem} from './task-list-item/TaskListItem';

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
      {tasks?.length === 0 && (
        <h4 style={{textAlign: 'center', marginTop: 10}}>
          You don't have any tasks created yet.
        </h4>
      )}
    </TableContainer>
  );
}
