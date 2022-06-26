import {TeamPermissions} from './TeamPermissions';

export interface TeamUserWire {
  id: number;
  userID: number;
  teamID: number;
  permissionLevel: TeamPermissions;
}

export const exampleTeamUserWire: TeamUserWire = {
  id: 1,
  userID: 1,
  teamID: 1,
  permissionLevel: TeamPermissions.Admin,
};
