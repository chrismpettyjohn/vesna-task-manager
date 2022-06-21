import {Controller, Get} from '@nestjs/common';
import {ActivityWire} from '@vesna-task-manager/types';
import {HasSession} from '../session/has-session.decorator';
import {GetSession} from '../session/get-session.decorator';
import {activityWire} from '../database/activity/activity.wire';
import {SessionEntity} from '../database/session/session.entity';
import {ActivityRepository} from '../database/activity/activity.repository';

@Controller('activity')
@HasSession()
export class ActivityController {
  constructor(private readonly activityRepo: ActivityRepository) {}

  @Get()
  async getActivity(
    @GetSession() session: SessionEntity
  ): Promise<ActivityWire[]> {
    const activity = await this.activityRepo.find({
      userID: session.userID,
    });
    return activity.map(_ => activityWire(_));
  }
}
