import {UserEntity} from './user.entity';
import {roleWire} from '../role/role.wire';
import {InternalServerErrorException} from '@nestjs/common';
import {ErrorCode, UserWire} from '@vesna-task-manager/types';

export function userWire(entity: UserEntity): UserWire {
  if (!entity.role) {
    throw new InternalServerErrorException(
      ErrorCode.UserWireMissingRoleRelation
    );
  }

  return {
    id: entity.id!,
    username: entity.username,
    role: roleWire(entity.role),
  };
}
