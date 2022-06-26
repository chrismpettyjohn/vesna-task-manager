import React from 'react';
import {TeamsTableProps} from './TeamsTable.types';
import {TeamsTableItem} from './teams-table-item/TeamsTableItem';
import {
  Table,
  TableContainer,
  TableCell,
  TableRow,
  TableBody,
  TableHead,
} from '@mui/material';

export function TeamsTable({teams}: TeamsTableProps) {
  return (
    <TableContainer sx={{maxHeight: 440}}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell key="team">Team</TableCell>
            <TableCell key="users">Users</TableCell>
            <TableCell key="createdAt">Created At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teams.map(_ => (
            <TeamsTableItem key={`teams_table_item_${_.id}`} team={_} />
          ))}
        </TableBody>
      </Table>
      {TableBody.length === 0 && (
        <h4 style={{textAlign: 'center', marginTop: 10}}>
          You don't have any teams.
        </h4>
      )}
    </TableContainer>
  );
}
