import {RequestWithSession} from '@instinct-api/session';
import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class SessionOfflineGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request: RequestWithSession = context.switchToHttp().getRequest();

    if (request.user.online) {
      throw new ForbiddenException("You cannot do this when you're online");
    }

    return true;
  }
}
