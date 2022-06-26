import {S3} from 'aws-sdk';
import {Injectable} from '@nestjs/common';
import {S3_BUCKET} from '../common/config.const';

@Injectable()
export class AWSS3Service {
  private readonly s3 = new S3();

  async getObjectURL(key: string): Promise<string> {
    return this.s3.getSignedUrlPromise('getObject', {
      Bucket: S3_BUCKET,
      Key: key,
    });
  }

  async deleteObject(key: string): Promise<void> {
    await this.s3.deleteObject({
      Bucket: S3_BUCKET,
      Key: key,
    });
  }
}
