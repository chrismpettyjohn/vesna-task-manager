import {UserEntity} from './user.entity';
import {UserWire} from '@vesna-task-manager/types';

export function userWire(entity: UserEntity): UserWire {
  return {
    id: entity.id!,
    username: entity.username,
  };
}
