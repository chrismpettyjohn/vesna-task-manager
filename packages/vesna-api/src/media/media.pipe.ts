import {ErrorCode} from '@vesna-task-manager/types';
import {MediaEntity} from '../database/media/media.entity';
import {MediaRepository} from '../database/media/media.repository';
import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';

@Injectable()
export class MediaPipe implements PipeTransform {
  constructor(private readonly mediaRepo: MediaRepository) {}

  async transform(mediaID: number): Promise<MediaEntity> {
    const media = await this.mediaRepo.findOne({id: mediaID});

    if (!media) {
      throw new NotFoundException(ErrorCode.MediaDoesNotExist);
    }

    return media;
  }
}
