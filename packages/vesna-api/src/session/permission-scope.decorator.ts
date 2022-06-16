import {HasSession} from './has-session.decorator';
import {RoleScopeWire} from '@vesna-task-manager/types';
import {PermissionScopeGuard} from './permission-scope.guard';
import {applyDecorators, SetMetadata, UseGuards} from '@nestjs/common';

export function HasScope(scope: keyof RoleScopeWire) {
  return applyDecorators(
    HasSession(),
    SetMetadata('scope', scope),
    UseGuards(PermissionScopeGuard)
  );
}
