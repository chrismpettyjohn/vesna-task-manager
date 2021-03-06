import Moment from 'moment';
import {HashService} from '../common/hash.service';
import {ErrorCode} from '@vesna-task-manager/types';
import {BearerTokenService} from './bearer-token.service';
import {JWT_EXPIRATION_IN_HOURS} from '../common/config.const';
import {Injectable, BadRequestException} from '@nestjs/common';
import {UserRepository} from '../database/user/user.repository';
import {SessionEntity} from '../database/session/session.entity';
import {SessionRepository} from '../database/session/session.repository';
import {getTimestamp} from '../common/get-timestamp';

@Injectable()
export class SessionService {
  constructor(
    private readonly sessionRepo: SessionRepository,
    private readonly userRepo: UserRepository,
    private readonly hashService: HashService,
    private readonly bearerTokenService: BearerTokenService
  ) {}

  async loginWithEmailAndPassword(
    email: string,
    rawPassword: string,
    ipAddress: string,
    geoLocation: string,
    operatingSystem: string
  ): Promise<SessionEntity> {
    const userByEmail = await this.userRepo.findOne({email});

    if (!userByEmail) {
      throw new BadRequestException(ErrorCode.SessionLoginUserDoesNotExist);
    }

    const doesPasswordMatch = this.hashService.compare(
      rawPassword,
      userByEmail.hashedPassword
    );

    if (!doesPasswordMatch) {
      throw new BadRequestException(ErrorCode.SessionLoginAuthenticationError);
    }

    const sessionCreated = getTimestamp();

    const sessionExpiration = Moment(sessionCreated)
      .add(JWT_EXPIRATION_IN_HOURS, 'hours')
      .toISOString();

    return this.sessionRepo.create({
      userID: userByEmail.id!,
      createdAt: sessionCreated,
      endedAt: sessionExpiration,
      ipAddress,
      geoLocation,
      operatingSystem,
    });
  }

  convertSessionToJWT(session: SessionEntity): string {
    return this.bearerTokenService.signToken(session.id!);
  }
}
