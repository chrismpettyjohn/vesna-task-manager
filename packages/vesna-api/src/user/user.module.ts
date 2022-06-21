import {Module} from '@nestjs/common';
import {UserController} from './user.controller';
import {SessionModule} from '../session/session.module';
import {DatabaseModule} from '../database/database.module';
import {ActivityModule} from '../activity/activity.module';

@Module({
  imports: [DatabaseModule, SessionModule, ActivityModule],
  controllers: [UserController],
})
export class UserModule {}
