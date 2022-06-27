import React from 'react';
import {TableRow, TableCell} from '@mui/material';
import {TeamsTableItemProps} from './TeamsTableItem.types';
import {formatTimestamp} from '../../../utility/format-timestamp';
import {EditTeamDialog} from '../../team-dialog/edit-team-dialog/EditTeamDialog';

export function TeamsTableItem({team, onChanges}: TeamsTableItemProps) {
  return (
    <TableRow hover tabIndex={-1}>
      <TableCell key="team">
        <i className={team.icon} style={{marginRight: 4}} />
        {team.name}
      </TableCell>
      <TableCell key="users">{team.users.length} users</TableCell>
      <TableCell key="createdAt">{formatTimestamp(team.createdAt)}</TableCell>
      <TableCell key="actions">
        <EditTeamDialog
          team={team}
          onChanges={onChanges}
          onDelete={onChanges}
        />
      </TableCell>
    </TableRow>
  );
}
