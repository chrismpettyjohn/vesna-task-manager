import {Provider} from '@nestjs/common';
import {RoleEntity} from './role/role.entity';
import {UserEntity} from './user/user.entity';
import {RoleRepository} from './role/role.repository';
import {UserRepository} from './user/user.repository';
import {SessionEntity} from './session/session.entity';
import {SessionRepository} from './session/session.repository';

export const databaseEntities: Function[] = [
  UserEntity,
  RoleEntity,
  SessionEntity,
];

export const databaseProviders: Provider[] = [
  UserRepository,
  RoleRepository,
  SessionRepository,
];
