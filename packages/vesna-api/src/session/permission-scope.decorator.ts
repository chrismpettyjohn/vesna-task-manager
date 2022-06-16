import {HasSession} from './has-session.decorator';
import {PermissionScopeGuard} from './permission-scope.guard';
import {applyDecorators, SetMetadata, UseGuards} from '@nestjs/common';
import {RoleScopeWire} from '@vesna-task-manager/types/packages/vesna-types';

export function HasScope(scope: keyof RoleScopeWire) {
  return applyDecorators(
    HasSession(),
    SetMetadata('scope', scope),
    UseGuards(PermissionScopeGuard)
  );
}
