import {Injectable} from '@nestjs/common';
import {jwtSecret} from '../common/config.const';
import {PassportStrategy} from '@nestjs/passport';
import {ExtractJwt, Strategy} from 'passport-jwt';
import {SessionEntity} from '../database/session/session.entity';
import {SessionRepository} from '../database/session/session.repository';

@Injectable()
export class BearerTokenStrategy extends PassportStrategy(
  Strategy,
  'bearer-token'
) {
  constructor(private readonly sessionRepo: SessionRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtSecret,
    });
  }

  async validate({
    sessionID,
  }: Record<'sessionID', number>): Promise<SessionEntity> {
    return this.sessionRepo.findOneOrFail({id: sessionID});
  }
}
