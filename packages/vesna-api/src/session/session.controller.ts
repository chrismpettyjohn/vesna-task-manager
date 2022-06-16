import {Controller, Get} from '@nestjs/common';
import {UserWire} from '@vesna-task-manager/types';
import {HasSession} from './has-session.decorator';
import {GetSession} from './get-session.decorator';
import {userWire} from '../database/user/user.wire';
import {SessionEntity} from '../database/session/session.entity';

@Controller('session')
export class SessionController {

  @Get()
  @HasSession()
  getSession(@GetSession() session: SessionEntity): UserWire {
    return userWire(session.user!);
  }
}
