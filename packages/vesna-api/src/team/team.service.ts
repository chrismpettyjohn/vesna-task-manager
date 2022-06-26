import {TeamEntity} from '../database/team/team.entity';
import {Injectable, UnauthorizedException} from '@nestjs/common';
import {ErrorCode, TeamPermissions} from '@vesna-task-manager/types';

@Injectable()
export class TeamService {
  isTeamUser(team: TeamEntity, userID: number) {
    const isTeamUser = !!team.users!.find(_ => _.userID === userID);
    if (!isTeamUser) {
      throw new UnauthorizedException(ErrorCode.ResourceAccessDenied);
    }
  }

  hasTeamPermission(
    team: TeamEntity,
    userID: number,
    permissionLevel: TeamPermissions
  ) {
    const hasTeamPermission = !!team.users!.find(
      _ => _.userID === userID && _.permissionLevel === permissionLevel
    );
    if (!hasTeamPermission) {
      throw new UnauthorizedException(ErrorCode.ResourceAccessDenied);
    }
  }
}
