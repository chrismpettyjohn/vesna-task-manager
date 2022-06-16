import {Module} from '@nestjs/common';
import {SessionController} from './session.controller';
import {DatabaseModule} from '../database/database.module';
import {BearerTokenStrategy} from './bearer-token.strategy';
import {PermissionScopeGuard} from './permission-scope.guard';

@Module({
  imports: [DatabaseModule],
  providers: [BearerTokenStrategy, PermissionScopeGuard],
  exports: [BearerTokenStrategy, PermissionScopeGuard],
  controllers: [SessionController],
})
export class SessionModule {}
