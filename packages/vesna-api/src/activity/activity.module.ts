import {Module} from '@nestjs/common';
import {ActivityService} from './activity.service';
import {CommonModule} from '../common/common.module';
import {ActivityController} from './activity.controller';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [CommonModule, DatabaseModule],
  controllers: [ActivityController],
  providers: [ActivityService],
  exports: [ActivityService],
})
export class ActivityModule {}
