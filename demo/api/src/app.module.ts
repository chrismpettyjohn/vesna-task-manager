import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {VesnaModule} from '@vesna-task-manager/api';
import {
  databaseHost,
  databaseName,
  databasePass,
  databaseUser,
  databaseEntities,
} from '@vesna-task-manager/api';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: databaseHost,
      username: databaseUser,
      password: databasePass,
      database: databaseName,
      entities: [...databaseEntities],
      synchronize: false,
    }),
    VesnaModule,
  ],
})
export class VesnaAPIModule {}
