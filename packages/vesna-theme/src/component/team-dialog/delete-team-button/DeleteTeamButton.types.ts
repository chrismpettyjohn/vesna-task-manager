import {TeamWire} from '@vesna-task-manager/types';

export interface DeleteTeamButtonProps {
  team: TeamWire;
  onDeletion(teamID: number): void;
}
