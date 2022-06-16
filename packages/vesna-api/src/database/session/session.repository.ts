import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {SessionEntity} from './session.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../base.repository';
import {HashService} from '../../common/hash.service';

@Injectable()
export class SessionRepository extends BaseRepository<SessionEntity> {
  constructor(
    private readonly hashService: HashService,
    @InjectRepository(SessionEntity) sessionRepo: Repository<SessionEntity>
  ) {
    super(sessionRepo, ['user', 'user.role']);
  }
}
