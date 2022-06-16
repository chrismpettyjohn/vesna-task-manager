import {Module} from '@nestjs/common';
import {RPUserModule} from '../user/user.module';
import {SessionController} from './session.controller';
import {DatabaseModule} from '../database/database.module';
import {
  BearerTokenStrategy,
  SessionModule as BaseSessionModule,
} from '@instinct-api/session';
import {RPBearerTokenStrategy} from './bearer-token.strategy';
import {SessionOfflineGuard} from './session-offline.guard';

@Module({
  imports: [DatabaseModule, BaseSessionModule, RPUserModule],
  providers: [
    {
      provide: BearerTokenStrategy,
      useClass: RPBearerTokenStrategy,
    },
    SessionOfflineGuard,
  ],
  exports: [BearerTokenStrategy, SessionOfflineGuard],
  controllers: [SessionController],
})
export class SessionModule {}
