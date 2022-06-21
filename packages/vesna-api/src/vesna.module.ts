import {Module} from '@nestjs/common';
import {UserModule} from './user/user.module';
import {TaskModule} from './task/task.module';
import {CommonModule} from './common/common.module';
import {SessionModule} from './session/session.module';
import {ActivityModule} from './activity/activity.module';
import {DatabaseModule} from './database/database.module';
import {TaskLabelModule} from './task-label/task-label.module';

@Module({
  imports: [
    ActivityModule,
    CommonModule,
    DatabaseModule,
    SessionModule,
    UserModule,
    TaskModule,
    TaskLabelModule,
  ],
  exports: [
    ActivityModule,
    CommonModule,
    DatabaseModule,
    SessionModule,
    UserModule,
    TaskModule,
    TaskLabelModule,
  ],
})
export class VesnaModule {}
