import {UserPipe} from './user.pipe';
import {Module} from '@nestjs/common';
import {UserController} from './user.controller';
import {SessionModule} from '../session/session.module';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [DatabaseModule, SessionModule],
  controllers: [UserController],
  providers: [UserPipe],
  exports: [UserPipe],
})
export class UserModule {}
