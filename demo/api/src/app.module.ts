import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {VesnaModule} from '@vesna-task-manager/api';
import {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PASS,
  DATABASE_USER,
  databaseEntities,
} from '@vesna-task-manager/api';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: DATABASE_HOST,
      username: DATABASE_USER,
      password: DATABASE_PASS,
      database: DATABASE_NAME,
      entities: [...databaseEntities],
      synchronize: false,
    }),
    VesnaModule,
  ],
})
export class VesnaAPIModule {}
