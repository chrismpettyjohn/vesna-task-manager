import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../base.repository';
import {TaskTimeSpentEntity} from './task-time-spent.entity';

@Injectable()
export class TaskTimeSpentRepository extends BaseRepository<TaskTimeSpentEntity> {
  constructor(
    @InjectRepository(TaskTimeSpentEntity)
    taskTimeSpentRepo: Repository<TaskTimeSpentEntity>
  ) {
    super(taskTimeSpentRepo, []);
  }
}
