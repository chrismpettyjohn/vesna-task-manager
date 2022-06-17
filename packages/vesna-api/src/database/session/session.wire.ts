import {SessionEntity} from './session.entity';
import {SessionWire} from '@vesna-task-manager/types';
import {privateUserWire} from '../user/user.wire';

export function sessionWire(sessionEntity: SessionEntity): SessionWire {
  return {
    id: sessionEntity.id!,
    userID: sessionEntity.userID,
    privateUser: privateUserWire(sessionEntity.user!),
    createdAt: sessionEntity.createdAt,
    endedAt: sessionEntity.endedAt,
    ipAddress: sessionEntity.ipAddress,
    geoLocation: sessionEntity.geoLocation,
    operatingSystem: sessionEntity.operatingSystem,
  };
}
