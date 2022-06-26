import {MediaEntity} from './media.entity';
import {MediaWire} from '@vesna-task-manager/types';

export function mediaWire(
  mediaEntity: MediaEntity,
  fileURL: string
): MediaWire {
  return {
    fileURL,
    id: mediaEntity.id!,
    userID: mediaEntity.userID,
    fileName: mediaEntity.fileName,
    fileDesc: mediaEntity.fileDesc,
    fileType: mediaEntity.fileType,
    fileLabel: mediaEntity.fileLabel,
    createdAt: mediaEntity.createdAt,
  };
}
