import {In} from 'typeorm';
import {TeamPipe} from './team.pipe';
import {TeamService} from './team.service';
import {teamWire} from '../database/team/team.wire';
import {TeamEntity} from '../database/team/team.entity';
import {CreateTeamDTO, UpdateTeamDTO} from './team.dto';
import {HasSession} from '../session/has-session.decorator';
import {GetSession} from '../session/get-session.decorator';
import {TeamRepository} from '../database/team/team.repository';
import {SessionEntity} from '../database/session/session.entity';
import {TeamPermissions, TeamWire} from '@vesna-task-manager/types';
import {TeamUserRepository} from '../database/team/team-user.repository';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('teams')
@HasSession()
export class TeamController {
  constructor(
    private readonly teamRepo: TeamRepository,
    private readonly teamService: TeamService,
    private readonly teamUserRepo: TeamUserRepository
  ) {}

  @Get()
  async getAllTeams(@GetSession() session: SessionEntity): Promise<TeamWire[]> {
    const teamsUserIsApartOf = await this.teamUserRepo.find({
      userID: session.userID,
    });

    if (teamsUserIsApartOf.length === 0) {
      return [];
    }

    const teams = await this.teamRepo.find({
      id: In(teamsUserIsApartOf.map(_ => _.id)),
    });

    return teams.map(_ => teamWire(_));
  }

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
    this.teamService.isTeamUser(team, session.userID);

    return teamWire(team);
  }

  @Patch(':teamID')
  async updateTeamByID(
    @Body() updateTeamDTO: UpdateTeamDTO,
    @Param('teamID', TeamPipe) team: TeamEntity,
    @GetSession() session: SessionEntity
  ) {
    this.teamService.hasTeamPermission(
      team,
      session.userID,
      TeamPermissions.Admin
    );
    await this.teamRepo.update({id: team.id!}, updateTeamDTO);
  }

  @Delete(':teamID')
  async deleteTeamByID(
    @Param('teamID', TeamPipe) team: TeamEntity,
    @GetSession() session: SessionEntity
  ) {
    this.teamService.hasTeamPermission(
      team,
      session.userID,
      TeamPermissions.Admin
    );
    await this.teamRepo.delete({id: team.id!});
  }
}
