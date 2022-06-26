import React from 'react';
import {TimeSpentTableProps} from './TimeSpentTable.types';
import {TaskListItem} from '../task-list/task-list-item/TaskListItem';
import {
  Table,
  TableContainer,
  TableCell,
  TableRow,
  TableBody,
  TableHead,
} from '@mui/material';
import {TimeSpentTableItem} from './time-spent-table-item/TimeSpentTableItem';

export function TimeSpentTable({task}: TimeSpentTableProps) {
  return (
    <TableContainer sx={{maxHeight: 440}}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell key="duration">Duration</TableCell>
            <TableCell key="notes">Notes</TableCell>
            <TableCell key="startedAt">Started At</TableCell>
            <TableCell key="endedAt">Ended At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {task.timeSpent.map(_ => (
            <TimeSpentTableItem key={`time_spent_item_${_.id}`} timeSpent={_} />
          ))}
        </TableBody>
      </Table>
      {task.timeSpent.length === 0 && (
        <h4 style={{textAlign: 'center', marginTop: 10}}>
          You don't have any time recorded yet.
        </h4>
      )}
    </TableContainer>
  );
}
