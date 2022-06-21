import React from 'react';
import {ActivityTableProps} from './ActivityTable.types';
import {ActivityTableItem} from './activity-table-item/ActivityTableItem';
import {
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from '@mui/material';

export function ActivityTable({activity}: ActivityTableProps) {
  return (
    <TableContainer>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell key="action">Action</TableCell>
            <TableCell key="createdAt">Timestamp</TableCell>
            <TableCell key="resource">Resource</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {activity.map(_ => (
            <ActivityTableItem activity={_} key={`activity_${_.id}`} />
          ))}
        </TableBody>
      </Table>
      {activity.length === 0 && (
        <h4 style={{textAlign: 'center', marginTop: 10}}>
          You don't have any activity yet.
        </h4>
      )}
    </TableContainer>
  );
}
