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
    sessionID: number,
    resourceID: number,
    resourceType: ActivityResource,
    action: string,
    changes?: object
  ): Promise<ActivityEntity> {
    return this.activityRepo.create({
      userID,
      sessionID,
      action,
      changes,
      resourceID,
      resourceType,
      createdAt: getTimestamp(),
    });
  }
}
