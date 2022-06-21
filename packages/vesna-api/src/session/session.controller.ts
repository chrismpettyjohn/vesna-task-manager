import {SessionService} from './session.service';
import {HasSession} from './has-session.decorator';
import {GetSession} from './get-session.decorator';
import {Body, Controller, Get, Post} from '@nestjs/common';
import {sessionWire} from '../database/session/session.wire';
import {ActivityService} from '../activity/activity.service';
import {SessionEntity} from '../database/session/session.entity';
import {
  ActivityResource,
  CreateSessionDTO,
  SessionWire,
} from '@vesna-task-manager/types';

@Controller('session')
export class SessionController {
  constructor(
    private readonly sessionService: SessionService,
    private readonly activityService: ActivityService
  ) {}

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

    await this.activityService.recordAction(
      newSession.userID,
      newSession.id!,
      ActivityResource.Session,
      'Session created'
    );

    return this.sessionService.convertSessionToJWT(newSession);
  }

  @Get()
  @HasSession()
  getSession(@GetSession() session: SessionEntity): SessionWire {
    return sessionWire(session);
  }
}
