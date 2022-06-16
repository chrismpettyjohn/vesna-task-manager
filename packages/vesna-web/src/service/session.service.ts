import {AxiosResponse} from 'axios';
import {backendAPI, setAPIToken} from '../utility/api.axios';
import {CreateSessionDTO, SessionWire} from '@vesna-task-manager/types';

export class SessionService {
  async loginWithEmailAndPassword(
    createSessionDTO: CreateSessionDTO
  ): Promise<SessionWire> {
    const jwtTokenResponse: AxiosResponse<string> = await backendAPI.post(
      'sessions',
      createSessionDTO
    );
    setAPIToken(jwtTokenResponse.data);
    return this.getSession();
  }

  async getSession(): Promise<SessionWire> {
    return backendAPI.get('session');
  }
}

export const sessionService: SessionService = new SessionService();
