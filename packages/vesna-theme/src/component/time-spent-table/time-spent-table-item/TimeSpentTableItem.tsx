import React from 'react';
import {TableRow, TableCell} from '@mui/material';
import {TimeSpentTableItemProps} from './TimeSpentTableItem.types';
import {formatTimestamp} from '../../../utility/format-timestamp';

export function TimeSpentTableItem({timeSpent}: TimeSpentTableItemProps) {
  return (
    <TableRow hover tabIndex={-1}>
      <TableCell key="duration" sx={{color: 'white'}}>
        {timeSpent.durationInSeconds}
      </TableCell>
      <TableCell key="notes" sx={{color: 'white'}}>
        {timeSpent.notes}
      </TableCell>
      <TableCell key="startedAt" sx={{color: 'white'}}>
        {formatTimestamp(timeSpent.startedAt)}
      </TableCell>
      <TableCell key="endedAt" sx={{color: 'white'}}>
        {formatTimestamp(timeSpent.endedAt)}
      </TableCell>
    </TableRow>
  );
}
