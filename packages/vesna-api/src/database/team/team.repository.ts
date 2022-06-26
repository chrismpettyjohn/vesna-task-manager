import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {TeamEntity} from './team.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../base.repository';

@Injectable()
export class TeamRepository extends BaseRepository<TeamEntity> {
  constructor(@InjectRepository(TeamEntity) teamRepo: Repository<TeamEntity>) {
    super(teamRepo, ['users', 'users.user']);
  }
}
