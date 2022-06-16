import {Module} from '@nestjs/common';
import {UserModule} from './user/user.module';
import {SessionModule} from './session/session.module';
import {DatabaseModule} from './database/database.module';
@Module({
  imports: [DatabaseModule, SessionModule, UserModule],
  exports: [DatabaseModule, SessionModule, UserModule],
})
export class InstinctRPModule {}
