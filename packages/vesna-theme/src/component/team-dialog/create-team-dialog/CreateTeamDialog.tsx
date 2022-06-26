import React from 'react';
import {toast} from 'react-toastify';
import {Button} from '@mui/material';
import {teamService} from '@vesna-task-manager/web';
import {CreateTeamDTOWire} from '@vesna-task-manager/types';
import {CreateTeamDialogProps} from './CreateTeamDialog.types';
import {TeamDialogEditor} from '../team-dialog-editor/TeamDialogEditor';

export function CreateTeamDialog({onCreated}: CreateTeamDialogProps) {
  const onCreateTeam = async (createTeamDTO: CreateTeamDTOWire) => {
    try {
      const newTeam = await teamService.create(createTeamDTO);
      toast.success(`Team ${createTeamDTO.name} has been created successfully`);
      onCreated(newTeam);
    } catch (e: any) {
      toast.error(
        `Team ${createTeamDTO.name} couldn't be created due to an unexpected error`
      );
      throw e;
    }
  };

  return (
    <TeamDialogEditor onSave={onCreateTeam}>
      <Button>
        <i className="fa fa-plus-circle" style={{marginRight: 4}} />
        New Team
      </Button>
    </TeamDialogEditor>
  );
}
