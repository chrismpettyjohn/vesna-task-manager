import {RoleEntity} from './role.entity';
import {RoleWire} from '@vesna-task-manager/types';

export function roleWire(roleEntity: RoleEntity): RoleWire {
  return {
    id: roleEntity.id!,
    name: roleEntity.name,
    desc: roleEntity.desc,
    scopes: roleEntity.scopes,
  };
}
