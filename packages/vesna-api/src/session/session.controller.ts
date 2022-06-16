import {SessionService} from './session.service';
import {UserWire} from '@vesna-task-manager/types';
import {HasSession} from './has-session.decorator';
import {GetSession} from './get-session.decorator';
import {userWire} from '../database/user/user.wire';
import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateSessionDTO} from '@vesna-task-manager/types';
import {SessionEntity} from '../database/session/session.entity';

@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post()
  async createSession(@Body() createSessionDTO: CreateSessionDTO) {
    // TODO: Implement support for IP_ADDRESS, GEO_LOCATION, OPERATING_SYSTEM
    return this.sessionService.loginWithEmailAndPassword(
      createSessionDTO.email,
      createSessionDTO.password,
      '',
      '',
      ''
    );
  }

  @Get()
  @HasSession()
  getSession(@GetSession() session: SessionEntity): UserWire {
    return userWire(session.user!);
  }
}
