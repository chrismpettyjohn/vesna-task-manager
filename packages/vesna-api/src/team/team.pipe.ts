import {ErrorCode} from '@vesna-task-manager/types';
import {TeamEntity} from '../database/team/team.entity';
import {TeamRepository} from '../database/team/team.repository';
import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';

@Injectable()
export class TeamPipe implements PipeTransform {
  constructor(private readonly teamRepo: TeamRepository) {}

  async transform(teamID: number): Promise<TeamEntity> {
    const team = await this.teamRepo.findOne({id: teamID});

    if (!team) {
      throw new NotFoundException(ErrorCode.TeamDoesNotExist);
    }

    return team;
  }
}
