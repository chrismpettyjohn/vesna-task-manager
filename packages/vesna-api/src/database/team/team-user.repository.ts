import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../base.repository';
import {TeamUserEntity} from './team-user.entity';

@Injectable()
export class TeamUserRepository extends BaseRepository<TeamUserEntity> {
  constructor(
    @InjectRepository(TeamUserEntity) teamUserRepo: Repository<TeamUserEntity>
  ) {
    super(teamUserRepo, ['user', 'user.role']);
  }
}
