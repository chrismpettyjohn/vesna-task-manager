import {Provider} from '@nestjs/common';
import {RoleEntity} from './role/role.entity';
import {UserEntity} from './user/user.entity';
import {TaskEntity} from './task/task.entity';
import {RoleRepository} from './role/role.repository';
import {UserRepository} from './user/user.repository';
import {TaskRepository} from './task/task.repository';
import {SessionEntity} from './session/session.entity';
import {ActivityEntity} from './activity/activity.entity';
import {TaskLabelEntity} from './task-label/task-label.entity';
import {SessionRepository} from './session/session.repository';
import {TaskTimeSpentEntity} from './task/task-time-spent.entity';
import {ActivityRepository} from './activity/activity.repository';
import {TaskLabelRepository} from './task-label/task-label.repository';
import {TaskTimeSpentRepository} from './task/task-time-spent.repository';
import {TeamEntity} from './team/team.entity';
import {TeamRepository} from './team/team.repository';
import {TeamUserRepository} from './team/team-user.repository';
import {TeamUserEntity} from './team/team-user.entity';

export const databaseEntities: Function[] = [
  ActivityEntity,
  UserEntity,
  RoleEntity,
  SessionEntity,
  TaskEntity,
  TaskLabelEntity,
  TaskTimeSpentEntity,
  TeamEntity,
  TeamUserEntity,
];

export const databaseProviders: Provider[] = [
  ActivityRepository,
  UserRepository,
  RoleRepository,
  SessionRepository,
  TaskRepository,
  TaskLabelRepository,
  TaskTimeSpentRepository,
  TeamRepository,
  TeamUserRepository,
];
