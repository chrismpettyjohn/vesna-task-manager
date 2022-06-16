import {Request} from 'express';
import {UserEntity} from '../database/user/user.entity';
import {SessionEntity} from '../database/session/session.entity';

export interface APISession {
  session: SessionEntity;
  user: UserEntity;
}

export interface RequestWithSession extends Request {
  user: APISession;
}
