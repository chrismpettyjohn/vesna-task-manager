import {Provider} from '@nestjs/common';
import {RPRankEntity} from './rank/rank.entity';
import {RPUserEntity} from './user/user.entity';
import {RPRankRepository} from './rank/rank.repository';
import {RPUserRepository} from './user/user.repository';

export const rpDatabaseEntities: Function[] = [
  RPRankEntity,
  RPUserEntity,
];

export const rpDatabaseProviders: Provider[] = [
  RPUserRepository,
  RPRankRepository,
];
