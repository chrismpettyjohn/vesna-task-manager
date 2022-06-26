import {TeamPipe} from './team.pipe';
import {TeamService} from './team.service';
import {UserPipe} from '../user/user.pipe';
import {TeamEntity} from '../database/team/team.entity';
import {UserEntity} from '../database/user/user.entity';
import {GetSession} from '../session/get-session.decorator';
import {teamUserWire} from '../database/team/team-user.wire';
import {SessionEntity} from '../database/session/session.entity';
import {CreateTeamUserDTO, UpdateTeamUserDTO} from './team-user.dto';
import {TeamPermissions, TeamUserWire} from '@vesna-task-manager/types';
import {TeamUserRepository} from '../database/team/team-user.repository';
import {Body, Controller, Delete, Param, Patch, Post} from '@nestjs/common';

@Controller('teams/:teamID/users')
export class TeamUserController {
  constructor(
    private readonly teamService: TeamService,
    private readonly teamUserRepo: TeamUserRepository
  ) {}

  @Post(':userID')
  async addUserToTeam(
    @Param('teamID', TeamPipe) team: TeamEntity,
    @GetSession() session: SessionEntity,
    @Param('userID', UserPipe) user: UserEntity,
    @Body() createTeamUserDTO: CreateTeamUserDTO
  ): Promise<TeamUserWire> {
    this.teamService.hasTeamPermission(
      team,
      session.userID,
      TeamPermissions.Admin
    );
    const newTeamUser = await this.teamUserRepo.create({
      teamID: team.id!,
      userID: user.id!,
      permissionLevel: createTeamUserDTO.permissionLevel,
    });
    return teamUserWire(newTeamUser);
  }

  @Patch(':userID')
  async updateUserOnTeam(
    @Param('teamID', TeamPipe) team: TeamEntity,
    @GetSession() session: SessionEntity,
    @Param('userID', UserPipe) user: UserEntity,
    @Body() updateTeamUserDTO: UpdateTeamUserDTO
  ) {
    this.teamService.hasTeamPermission(
      team,
      session.userID,
      TeamPermissions.Admin
    );
    await this.teamUserRepo.update(
      {userID: user.id!, teamID: team.id!},
      updateTeamUserDTO
    );
  }

  @Delete(':userID')
  async removeUserFromTeam(
    @Param('teamID', TeamPipe) team: TeamEntity,
    @Param('userID', UserPipe) user: UserEntity,
    @GetSession() session: SessionEntity
  ) {
    this.teamService.hasTeamPermission(
      team,
      session.userID,
      TeamPermissions.Admin
    );
    await this.teamUserRepo.delete({userID: user.id!, teamID: team.id!});
  }
}
