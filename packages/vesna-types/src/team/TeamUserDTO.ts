import {TeamPermissions} from './TeamPermissions';

export interface CreateTeamUserDTOWire {
  permissionLevel: TeamPermissions;
}

export type UpdateTeamUserDTOWire = Partial<CreateTeamUserDTOWire>;
