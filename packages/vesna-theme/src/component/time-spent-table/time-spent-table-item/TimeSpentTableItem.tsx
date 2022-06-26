import React from 'react';
import {TableRow, TableCell} from '@mui/material';
import {formatTimestamp} from '../../../utility/format-timestamp';
import {TimeSpentTableItemProps} from './TimeSpentTableItem.types';

export function TimeSpentTableItem({
  color,
  timeSpent,
}: TimeSpentTableItemProps) {
  return (
    <TableRow hover tabIndex={-1}>
      <TableCell key="duration" sx={{color}}>
        #{timeSpent.taskID}
      </TableCell>
      <TableCell key="duration" sx={{color}}>
        {timeSpent.durationInSeconds}
      </TableCell>
      <TableCell key="notes" sx={{color}}>
        {timeSpent.notes}
      </TableCell>
      <TableCell key="startedAt" sx={{color}}>
        {formatTimestamp(timeSpent.startedAt)}
      </TableCell>
      <TableCell key="endedAt" sx={{color}}>
        {formatTimestamp(timeSpent.endedAt)}
      </TableCell>
    </TableRow>
  );
}
