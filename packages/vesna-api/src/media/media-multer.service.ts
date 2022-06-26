import AWS from 'aws-sdk';
import MulterS3 from 'multer-s3';
import {v4 as uuidv4} from 'uuid';
import {Injectable} from '@nestjs/common';
import {S3_BUCKET} from '../common/config.const';
import {
  MulterModuleOptions,
  MulterOptionsFactory,
} from '@nestjs/platform-express';

@Injectable()
export class MediaMulterService implements MulterOptionsFactory {
  createMulterOptions(): MulterModuleOptions {
    return {
      storage: MulterS3({
        s3: new AWS.S3(),
        bucket: S3_BUCKET,
        key: (
          req: any,
          file: any,
          cb: (error: Error | null, s3Path: string) => void
        ) => {
          const fileName = `${uuidv4()}-${
            file.originalname
          }-${Date.toString()}`;
          const s3Path = `users/${req.user.userID}/${fileName}`;
          cb(null, s3Path);
        },
      }),
    };
  }
}
