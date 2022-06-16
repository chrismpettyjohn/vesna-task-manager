import {Module} from '@nestjs/common';
import {RankModule} from './rank/rank.module';
import {UserModule} from './user/user.module';
import {SessionModule} from './session/session.module';
import {DatabaseModule} from './database/database.module';
@Module({
  imports: [DatabaseModule, SessionModule, RankModule, UserModule],
  exports: [DatabaseModule, SessionModule, RankModule, UserModule],
})
export class InstinctRPModule {}
