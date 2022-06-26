import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {MediaEntity} from './media.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../base.repository';

@Injectable()
export class MediaRepository extends BaseRepository<MediaEntity> {
  constructor(
    @InjectRepository(MediaEntity) mediaRepo: Repository<MediaEntity>
  ) {
    super(mediaRepo, []);
  }
}
