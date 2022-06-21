import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../base.repository';
import {TaskLabelEntity} from './task-label.entity';
import {HashService} from '../../common/hash.service';

@Injectable()
export class TaskLabelRepository extends BaseRepository<TaskLabelEntity> {
  constructor(
    private readonly hashService: HashService,
    @InjectRepository(TaskLabelEntity)
    taskLabelRepo: Repository<TaskLabelEntity>
  ) {
    super(taskLabelRepo, []);
  }
}
