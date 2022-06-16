import {Provider} from '@nestjs/common';
import {RoleEntity} from './role/role.entity';
import {UserEntity} from './user/user.entity';
import {TaskEntity} from './task/task.entity';
import {RoleRepository} from './role/role.repository';
import {UserRepository} from './user/user.repository';
import {SessionEntity} from './session/session.entity';
import {SessionRepository} from './session/session.repository';
import {TaskLabelEntity} from './task-label/task-label.entity';
import {TaskRepository} from './task/task.repository';
import {TaskLabelRepository} from './task-label/task-label.repository';

export const databaseEntities: Function[] = [
  UserEntity,
  RoleEntity,
  SessionEntity,
  TaskEntity,
  TaskLabelEntity,
];

export const databaseProviders: Provider[] = [
  UserRepository,
  RoleRepository,
  SessionRepository,
  TaskRepository,
  TaskLabelRepository,
];
