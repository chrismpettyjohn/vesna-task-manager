import {userWire} from '../user/user.wire';
import {TeamUserEntity} from './team-user.entity';
import {TeamPermissions, TeamUserWire} from '@vesna-task-manager/types';

export function teamUserWire(teamUserEntity: TeamUserEntity): TeamUserWire {
  return {
    id: teamUserEntity.id!,
    userID: teamUserEntity.userID,
    teamID: teamUserEntity.teamID,
    user: userWire(teamUserEntity.user!),
    permissionLevel: TeamPermissions.Admin,
  };
}
