import {TeamPermissions} from './TeamPermissions';
import {exampleUserWire, UserWire} from '../user/User';

export interface TeamUserWire {
  id: number;
  userID: number;
  teamID: number;
  user: UserWire;
  permissionLevel: TeamPermissions;
}

export const exampleTeamUserWire: TeamUserWire = {
  id: 1,
  userID: 1,
  teamID: 1,
  user: exampleUserWire,
  permissionLevel: TeamPermissions.Admin,
};
