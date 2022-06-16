import {Module} from '@nestjs/common';
import {DatabaseModule} from '../database/database.module';
import {TaskLabelController} from './task-label.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [TaskLabelController],
})
export class TaskLabelModule {}
