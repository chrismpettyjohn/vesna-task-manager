import React from 'react';
import {toast} from 'react-toastify';
import {Button} from '@mui/material';
import {teamService} from '@vesna-task-manager/web';
import {UpdateTeamDTOWire} from '@vesna-task-manager/types';
import {EditTeamDialogProps} from './EditTeamDialog.types';
import {TeamDialogEditor} from '../team-dialog-editor/TeamDialogEditor';

export function EditTeamDialog({
  team,
  onChanges,
  onDelete,
}: EditTeamDialogProps) {
  const onUpdateTeam = async (updateTeamDTO: UpdateTeamDTOWire) => {
    try {
      await teamService.updateByID(team.id, updateTeamDTO);
      toast.success(
        `Your changes to team ${team.name} have been saved successfully`
      );
      onChanges(team.id, updateTeamDTO);
    } catch (e: any) {
      toast.error(
        `Your changes to team ${team.name} couldn't be save due to an unexpected error`
      );
      throw e;
    }
  };

  return (
    <TeamDialogEditor
      defaultTeam={team}
      onSave={onUpdateTeam}
      onDelete={() => onDelete(team.id)}
    >
      <Button>
        <i className="fa fa-pencil" style={{marginRight: 4}} />
        Edit
      </Button>
    </TeamDialogEditor>
  );
}
