import {Reflector} from '@nestjs/core';
import {APISession} from './session.types';
import {RoleScopeWire} from '@vesna-task-manager/types';
import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class PermissionScopeGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const scope: keyof RoleScopeWire = this.reflector.get(
      'scope',
      context.getHandler()
    );
    const request: APISession = context.switchToHttp().getRequest();
    const hasScope = request?.user?.role?.scopes?.[scope] === true

    if (!hasScope) {
      throw new ForbiddenException("You don't have permission to do this");
    }

    return true;
  }
}
