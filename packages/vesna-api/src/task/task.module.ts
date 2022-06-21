import {Module} from '@nestjs/common';
import {TaskController} from './task.controller';
import {DatabaseModule} from '../database/database.module';
import {ActivityModule} from '../activity/activity.module';

@Module({
  imports: [DatabaseModule, ActivityModule],
  controllers: [TaskController],
})
export class TaskModule {}
