import {Module} from '@nestjs/common';
import {MediaPipe} from './media.pipe';
import {AWSModule} from '../aws/aws.module';
import {MediaService} from './media.service';
import {MediaController} from './media.controller';
import {MulterModule} from '@nestjs/platform-express';
import {SessionModule} from '../session/session.module';
import {MediaMulterService} from './media-multer.service';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [
    AWSModule,
    DatabaseModule,
    SessionModule,
    MulterModule.registerAsync({
      imports: [DatabaseModule],
      useClass: MediaMulterService,
    }),
  ],
  controllers: [MediaController],
  providers: [MediaPipe, MediaService, MediaMulterService],
  exports: [MediaPipe, MediaService, MediaMulterService],
})
export class MediaModule {}
