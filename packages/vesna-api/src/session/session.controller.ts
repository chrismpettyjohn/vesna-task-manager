import {SessionService} from './session.service';
import {HasSession} from './has-session.decorator';
import {GetSession} from './get-session.decorator';
import {SessionWire} from '@vesna-task-manager/types';
import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateSessionDTO} from '@vesna-task-manager/types';
import {sessionWire} from '../database/session/session.wire';
import {SessionEntity} from '../database/session/session.entity';

@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post()
  async createSession(@Body() createSessionDTO: CreateSessionDTO) {
    // TODO: Implement support for IP_ADDRESS, GEO_LOCATION, OPERATING_SYSTEM
    const newSession = await this.sessionService.loginWithEmailAndPassword(
      createSessionDTO.email,
      createSessionDTO.password,
      '',
      '',
      ''
    );
    return this.sessionService.convertSessionToJWT(newSession);
  }

  @Get()
  @HasSession()
  getSession(@GetSession() session: SessionEntity): SessionWire {
    return sessionWire(session);
  }
}
