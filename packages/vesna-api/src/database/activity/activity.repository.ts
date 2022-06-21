import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../base.repository';
import {ActivityEntity} from './activity.entity';

@Injectable()
export class ActivityRepository extends BaseRepository<ActivityEntity> {
  constructor(
    @InjectRepository(ActivityEntity) activityRepo: Repository<ActivityEntity>
  ) {
    super(activityRepo, []);
  }
}
