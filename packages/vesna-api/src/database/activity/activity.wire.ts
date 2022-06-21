import {ActivityEntity} from './activity.entity';
import {ActivityWire} from '@vesna-task-manager/types';

export function activityWire(activityEntity: ActivityEntity): ActivityWire {
  return {
    id: activityEntity.id!,
    userID: activityEntity.userID,
    sessionID: activityEntity.sessionID,
    action: activityEntity.action,
    changes: activityEntity.changes,
    resource: activityEntity.resourceType,
    resourceID: activityEntity.resourceID,
    createdAt: activityEntity.createdAt,
  };
}
