import {Module} from '@nestjs/common';
import {AWSModule} from './aws/aws.module';
import {UserModule} from './user/user.module';
import {TaskModule} from './task/task.module';
import {TeamModule} from './team/team.module';
import {MediaModule} from './media/media.module';
import {CommonModule} from './common/common.module';
import {SessionModule} from './session/session.module';
import {ActivityModule} from './activity/activity.module';
import {DatabaseModule} from './database/database.module';
import {TaskLabelModule} from './task-label/task-label.module';

@Module({
  imports: [
    AWSModule,
    ActivityModule,
    CommonModule,
    DatabaseModule,
    SessionModule,
    UserModule,
    TaskModule,
    TaskLabelModule,
    TeamModule,
    MediaModule,
  ],
  exports: [
    ActivityModule,
    AWSModule,
    CommonModule,
    DatabaseModule,
    SessionModule,
    UserModule,
    TaskModule,
    TaskLabelModule,
    TeamModule,
    MediaModule,
  ],
})
export class VesnaModule {}
