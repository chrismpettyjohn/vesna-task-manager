import {Module, CacheModule} from '@nestjs/common';
import {RankService} from './rank.service';
import {RPUserModule} from '../user/user.module';
import {RankController} from './rank.controller';
import {SessionModule} from '@instinct-api/session';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [
    DatabaseModule,
    SessionModule,
    RPUserModule,
    CacheModule.register(),
  ],
  controllers: [RankController],
  providers: [RankService],
  exports: [RankService],
})
export class RankModule {}
