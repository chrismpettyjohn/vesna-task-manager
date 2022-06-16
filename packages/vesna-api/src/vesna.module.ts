import {Module} from '@nestjs/common';
import {UserModule} from './user/user.module';
import {CommonModule} from './common/common.module';
import {SessionModule} from './session/session.module';
import {DatabaseModule} from './database/database.module';
@Module({
  imports: [CommonModule, DatabaseModule, SessionModule, UserModule],
  exports: [CommonModule, DatabaseModule, SessionModule, UserModule],
})
export class VesnaModule {}
