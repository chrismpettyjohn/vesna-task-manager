import {MediaPipe} from './media.pipe';
import {MediaService} from './media.service';
import {ErrorCode, MediaType, MediaWire} from '@vesna-task-manager/types';
import {FileInterceptor} from '@nestjs/platform-express';
import {CreateMediaDTO, UpdateMediaDTO} from './media.dto';
import {MediaEntity} from '../database/media/media.entity';
import {HasSession} from '../session/has-session.decorator';
import {GetSession} from '../session/get-session.decorator';
import {SessionEntity} from '../database/session/session.entity';
import {MediaRepository} from '../database/media/media.repository';
import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import {getTimestamp} from '../common/get-timestamp';
import {AWSS3Service} from '../aws/aws-s3.service';
import {mediaWire} from '../database/media/media.wire';

@Controller('media')
@HasSession()
export class MediaController {
  constructor(
    private readonly mediaRepo: MediaRepository,
    private readonly mediaService: MediaService,
    private readonly awsS3Service: AWSS3Service
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadNewMedia(
    @Body() createMediaDTO: CreateMediaDTO,
    @GetSession() session: SessionEntity,
    @UploadedFile() file: {key: string; mimetype: string}
  ): Promise<MediaWire> {
    const isImage = file.mimetype.includes('image');
    const isVideo = file.mimetype.includes('video');

    if (!isImage && !isVideo) {
      throw new BadRequestException(ErrorCode.MediaInvalidFileType);
    }

    const newMedia = await this.mediaRepo.create({
      userID: session.userID,
      fileLabel: createMediaDTO.fileLabel,
      fileName: createMediaDTO.fileName,
      fileDesc: createMediaDTO.fileDesc,
      fileType: isImage ? MediaType.Photo : MediaType.Video,
      s3Key: file.key,
      createdAt: getTimestamp(),
    });

    const mediaURL = await this.awsS3Service.getObjectURL(newMedia.s3Key);

    return mediaWire(newMedia, mediaURL);
  }

  @Get(':mediaID')
  async getMediaByID(
    @Param('mediaID', MediaPipe) media: MediaEntity,
    @GetSession() session: SessionEntity
  ): Promise<MediaWire> {
    this.mediaService.isMediaOwner(media, session.userID);
    const mediaURL = await this.awsS3Service.getObjectURL(media.s3Key);
    return mediaWire(media, mediaURL);
  }

  @Patch(':mediaID')
  async updateMediaByID(
    @Param('mediaID', MediaPipe) media: MediaEntity,
    @GetSession() session: SessionEntity,
    @Body() updateMediaDTO: UpdateMediaDTO
  ) {
    this.mediaService.isMediaOwner(media, session.userID);
    await this.mediaRepo.update({id: media.id!}, updateMediaDTO);
  }

  @Delete(':mediaID')
  async deleteMediaByID(
    @Param('mediaID', MediaPipe) media: MediaEntity,
    @GetSession() session: SessionEntity
  ) {
    this.mediaService.isMediaOwner(media, session.userID);
  }
}
