import {Module} from '@nestjs/common';
import {DatabaseModule} from '../database/database.module';
import {ActivityModule} from '../activity/activity.module';
import {TaskLabelController} from './task-label.controller';

@Module({
  imports: [DatabaseModule, ActivityModule],
  controllers: [TaskLabelController],
})
export class TaskLabelModule {}
