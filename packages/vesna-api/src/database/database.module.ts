import {Global, Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {CommonModule} from '../common/common.module';
import {databaseEntities, databaseProviders} from './database.meta';

@Module({
  imports: [CommonModule, TypeOrmModule.forFeature(databaseEntities)],
  providers: [...databaseProviders],
  exports: [TypeOrmModule, ...databaseProviders],
})
@Global()
export class DatabaseModule {}
