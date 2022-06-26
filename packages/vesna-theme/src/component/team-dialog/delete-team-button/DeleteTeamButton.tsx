import React from 'react';
import {toast} from 'react-toastify';
import {teamService} from '@vesna-task-manager/web';
import {DeleteButton} from '../../delete-button/DeleteButton';
import {DeleteTeamButtonProps} from './DeleteTeamButton.types';

export function DeleteTeamButton({team, onDeletion}: DeleteTeamButtonProps) {
  const onDeleteTeam = async (teamID: number) => {
    try {
      await teamService.deleteByID(teamID);
      toast.warn(`Team ${team.name} has been deleted successfully`);
      onDeletion(teamID);
    } catch {
      toast.error(
        `Failed to delete Team ${team.name} due to an unexpected error`
      );
    }
  };

  return <DeleteButton onDeletion={() => onDeleteTeam(team.id)} />;
}
