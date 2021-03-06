import {Module} from '@nestjs/common';
import {SessionService} from './session.service';
import {CommonModule} from '../common/common.module';
import {SessionController} from './session.controller';
import {BearerTokenService} from './bearer-token.service';
import {DatabaseModule} from '../database/database.module';
import {BearerTokenStrategy} from './bearer-token.strategy';
import {PermissionScopeGuard} from './permission-scope.guard';
import {ActivityModule} from '../activity/activity.module';

@Module({
  imports: [CommonModule, DatabaseModule, ActivityModule],
  providers: [
    BearerTokenStrategy,
    PermissionScopeGuard,
    SessionService,
    BearerTokenService,
  ],
  exports: [
    BearerTokenStrategy,
    PermissionScopeGuard,
    SessionService,
    BearerTokenService,
  ],
  controllers: [SessionController],
})
export class SessionModule {}
