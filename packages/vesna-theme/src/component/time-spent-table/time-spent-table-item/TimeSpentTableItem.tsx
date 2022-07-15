import React from 'react';
import {TableRow, TableCell} from '@mui/material';
import {formatTimestamp} from '../../../utility/format-timestamp';
import {TimeSpentTableItemProps} from './TimeSpentTableItem.types';
import {convertSecondsToHhMmSS} from '../../../utility/convert-seconds-to-hh-mm-ss';

export function TimeSpentTableItem({
  color,
  timeSpent,
}: TimeSpentTableItemProps) {
  const currentTime = convertSecondsToHhMmSS(timeSpent.durationInSeconds);
  return (
    <TableRow hover tabIndex={-1}>
      <TableCell key="duration" sx={{color}}>
        #{timeSpent.taskID}
      </TableCell>
      <TableCell key="duration" sx={{color}}>
        {currentTime.hours}:{currentTime.minutes}:{currentTime.seconds}
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
