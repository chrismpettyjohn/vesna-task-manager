import {ErrorCode} from '@vesna-task-manager/types';
import {MediaEntity} from '../database/media/media.entity';
import {Injectable, UnauthorizedException} from '@nestjs/common';

@Injectable()
export class MediaService {
  isMediaOwner(media: MediaEntity, userID: number) {
    if (media.userID !== userID) {
      throw new UnauthorizedException(ErrorCode.ResourceAccessDenied);
    }
  }
}
