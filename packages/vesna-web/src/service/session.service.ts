import {SessionWire} from '@vesna-task-manager/types';

export class SessionService {
  async loginWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<SessionWire> {}
}
