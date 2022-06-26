import {TeamPermissions} from './TeamPermissions';

export interface CreateTeamUserDTOWire {
  userID: number;
  permissionLevel: TeamPermissions;
}

export type UpdateTeamUserDTOWire = Partial<CreateTeamUserDTOWire>;
