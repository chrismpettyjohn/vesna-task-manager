import {Injectable} from '@nestjs/common';
import {getTimestamp} from '../common/get-timestamp';
import {ActivityResource} from '@vesna-task-manager/types';
import {ActivityEntity} from '../database/activity/activity.entity';
import {ActivityRepository} from '../database/activity/activity.repository';

@Injectable()
export class ActivityService {
  constructor(private readonly activityRepo: ActivityRepository) {}

  recordAction(
    userID: number,
    resourceID: number,
    resourceType: ActivityResource,
    action: string
  ): Promise<ActivityEntity> {
    return this.activityRepo.create({
      userID,
      action,
      resourceID,
      resourceType,
      createdAt: getTimestamp(),
    });
  }
}
