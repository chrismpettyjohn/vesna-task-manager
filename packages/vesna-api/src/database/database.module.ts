import {Global, Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {CommonModule} from '../common/common.module';
import {databaseEntities, databaseProviders} from './database.meta';
import {
  databaseHost,
  databaseName,
  databasePass,
  databaseUser,
} from '../common/config.const';

@Module({
  imports: [
    CommonModule,
    TypeOrmModule.forRoot({
      host: databaseHost,
      username: databaseUser,
      password: databasePass,
      database: databaseName,
      entities: [...databaseEntities],
      synchronize: false,
      cli: {
        migrationsDir: './migrations',
      },
    }),
  ],
  providers: [...databaseProviders],
  exports: [TypeOrmModule, ...databaseProviders],
})
@Global()
export class DatabaseModule {}
