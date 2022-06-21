import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {TaskEntity} from './task.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../base.repository';
import {HashService} from '../../common/hash.service';

@Injectable()
export class TaskRepository extends BaseRepository<TaskEntity> {
  constructor(
    private readonly hashService: HashService,
    @InjectRepository(TaskEntity) taskRepo: Repository<TaskEntity>
  ) {
    super(taskRepo, ['timeSpent']);
  }
}
