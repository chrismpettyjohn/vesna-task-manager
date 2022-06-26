import React from 'react';
import {TableRow, TableCell} from '@mui/material';
import {TeamsTableItemProps} from './TeamsTableItem.types';
import {formatTimestamp} from '../../../utility/format-timestamp';

export function TeamsTableItem({team}: TeamsTableItemProps) {
  return (
    <TableRow hover tabIndex={-1}>
      <TableCell key="team">
        <i className={team.icon} style={{marginRight: 4}} />
        {team.name}
      </TableCell>
      <TableCell key="users">{team.users.length} users</TableCell>
      <TableCell key="createdAt">{formatTimestamp(team.createdAt)}</TableCell>
    </TableRow>
  );
}
