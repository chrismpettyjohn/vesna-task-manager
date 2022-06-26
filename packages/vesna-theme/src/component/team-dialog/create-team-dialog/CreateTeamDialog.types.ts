import {TeamWire} from '@vesna-task-manager/types';

export interface CreateTeamDialogProps {
  onCreated(newTeam: TeamWire): void;
}
