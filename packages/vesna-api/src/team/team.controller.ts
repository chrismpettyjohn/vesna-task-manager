import {TeamPipe} from './team.pipe';
import {ErrorCode, TeamPermissions, TeamWire} from '@vesna-task-manager/types';
import {teamWire} from '../database/team/team.wire';
import {TeamEntity} from '../database/team/team.entity';
import {HasSession} from '../session/has-session.decorator';
import {TeamRepository} from '../database/team/team.repository';
import {CreateTeamDTO, UpdateTeamDTO} from './team.dto';
import {GetSession} from '../session/get-session.decorator';
import {SessionEntity} from '../database/session/session.entity';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import {TeamUserRepository} from '../database/team/team-user.repository';

@Controller('teams')
@HasSession()
export class TeamController {
  constructor(
    private readonly teamRepo: TeamRepository,
    private readonly teamUserRepo: TeamUserRepository
  ) {}

  @Post()
  async createTeam(
    @Body() createTeamDTO: CreateTeamDTO,
    @GetSession() session: SessionEntity
  ): Promise<TeamWire> {
    const newTeam = await this.teamRepo.create({
      name: createTeamDTO.name,
      desc: createTeamDTO.desc,
      icon: createTeamDTO.icon,
    });

    const newTeamUser = await this.teamUserRepo.create({
      userID: session.userID,
      teamID: newTeam.id!,
      permissionLevel: TeamPermissions.Admin,
    });

    return teamWire({...newTeam, users: [newTeamUser]});
  }

  @Get(':teamID')
  getTeamByID(
    @Param('teamID', TeamPipe) team: TeamEntity,
    @GetSession() session: SessionEntity
  ): TeamWire {
    const isTeamMember = team.users!.find(_ => _.userID === session.userID);

    if (!isTeamMember) {
      throw new UnauthorizedException(ErrorCode.ResourceAccessDenied);
    }

    return teamWire(team);
  }

  @Patch(':teamID')
  async updateTeamByID(
    @Body() updateTeamDTO: UpdateTeamDTO,
    @Param('teamID', TeamPipe) team: TeamEntity,
    @GetSession() session: SessionEntity
  ) {
    const isTeamAdmin = team.users!.find(
      _ =>
        _.userID === session.userID &&
        _.permissionLevel === TeamPermissions.Admin
    );

    if (!isTeamAdmin) {
      throw new UnauthorizedException(ErrorCode.ResourceAccessDenied);
    }

    await this.teamRepo.update({id: team.id!}, updateTeamDTO);
  }

  @Delete(':teamID')
  async deleteTeamByID(
    @Param('teamID', TeamPipe) team: TeamEntity,
    @GetSession() session: SessionEntity
  ) {
    const isTeamAdmin = team.users!.find(
      _ =>
        _.userID === session.userID &&
        _.permissionLevel === TeamPermissions.Admin
    );

    if (!isTeamAdmin) {
      throw new UnauthorizedException(ErrorCode.ResourceAccessDenied);
    }

    await this.teamRepo.delete({id: team.id!});
  }
}
