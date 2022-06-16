import JWT from 'jsonwebtoken';
import {Injectable} from '@nestjs/common';
import {hoursToMS} from '../common/hours-to-ms';
import {JWT_EXPIRATION_IN_HOURS, JWT_SECRET} from '@vesna-task-manager/api';

@Injectable()
export class BearerTokenService {
  signToken(sessionID: number): string {
    return JWT.sign({sessionID}, JWT_SECRET, {
      expiresIn: hoursToMS(JWT_EXPIRATION_IN_HOURS),
    });
  }
}
