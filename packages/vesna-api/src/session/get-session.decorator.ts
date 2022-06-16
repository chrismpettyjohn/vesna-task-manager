import {APISession, RequestWithSession} from './session.types';
import {createParamDecorator, ExecutionContext} from '@nestjs/common';

// tslint:disable-next-line:variable-name - In Typescript decorators start with a capital letter
export const GetSession = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): APISession => {
    const request: RequestWithSession = ctx.switchToHttp().getRequest();
    return request.user;
  }
);
