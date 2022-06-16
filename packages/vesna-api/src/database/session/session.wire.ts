import {SessionEntity} from './session.entity';
import {SessionWire} from '@vesna-task-manager/types/packages/vesna-types';
import {exampleUserWire} from '@vesna-task-manager/types/packages/vesna-types/src';

export function sessionWire(sessionEntity: SessionEntity): SessionWire {
  return {
    id: sessionEntity.id!,
    userID: sessionEntity.userID,
    createdAt: sessionEntity.createdAt,
    endedAt: sessionEntity.endedAt,
    ipAddress: sessionEntity.ipAddress,
    geoLocation: sessionEntity.geoLocation,
    operatingSystem: sessionEntity.operatingSystem,
  }
}
