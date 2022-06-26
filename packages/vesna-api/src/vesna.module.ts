import {Module} from '@nestjs/common';
import {UserModule} from './user/user.module';
import {TaskModule} from './task/task.module';
import {CommonModule} from './common/common.module';
import {SessionModule} from './session/session.module';
import {ActivityModule} from './activity/activity.module';
import {DatabaseModule} from './database/database.module';
import {TaskLabelModule} from './task-label/task-label.module';
import {TeamModule} from './team/team.module';

@Module({
  imports: [
    ActivityModule,
    CommonModule,
    DatabaseModule,
    SessionModule,
    UserModule,
    TaskModule,
    TaskLabelModule,
    TeamModule,
  ],
  exports: [
    ActivityModule,
    CommonModule,
    DatabaseModule,
    SessionModule,
    UserModule,
    TaskModule,
    TaskLabelModule,
    TeamModule,
  ],
})
export class VesnaModule {}
