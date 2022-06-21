import React from 'react';
import {TableRow, TableCell} from '@mui/material';
import {ActivityTableItemProps} from './ActivityTableItem.types';
import {formatTimestamp} from '../../../utility/format-timestamp';
import {ActivityTableResourceView} from '../activity-table-resource-view/ActivityTableResourceView';

export function ActivityTableItem({activity}: ActivityTableItemProps) {
  return (
    <TableRow hover tabIndex={-1}>
      <TableCell key="action">{activity.action}</TableCell>
      <TableCell key="createdAt">
        {formatTimestamp(activity.createdAt)}
      </TableCell>
      <TableCell key="resource">
        <ActivityTableResourceView activity={activity} />
      </TableCell>
    </TableRow>
  );
}
