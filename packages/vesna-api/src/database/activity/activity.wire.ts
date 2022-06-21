import {ActivityEntity} from './activity.entity';
import {ActivityResource, ActivityWire} from '@vesna-task-manager/types';

export function activityWire(activityEntity: ActivityEntity): ActivityWire {
  return {
    id: activityEntity.id!,
    userID: activityEntity.userID,
    action: activityEntity.action,
    resource: activityEntity.resourceType,
    resourceID: activityEntity.resourceID,
    createdAt: activityEntity.createdAt,
  };
}
