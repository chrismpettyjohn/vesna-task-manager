import {TeamWire, UpdateTeamDTOWire} from '@vesna-task-manager/types';

export interface EditTeamDialogProps {
  team: TeamWire;
  onChanges(teamID: number, teamChanges: UpdateTeamDTOWire): void;
  onDelete(teamID: number): void;
}
