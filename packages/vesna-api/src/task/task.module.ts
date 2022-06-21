import {Module} from '@nestjs/common';
import {TaskController} from './task.controller';
import {DatabaseModule} from '../database/database.module';
import {ActivityModule} from '../activity/activity.module';
import {TaskTimeSpentController} from './task-time-spent.controller';

@Module({
  imports: [DatabaseModule, ActivityModule],
  controllers: [TaskController, TaskTimeSpentController],
})
export class TaskModule {}
