import {AxiosResponse} from 'axios';
import {backendAPI, setAPIToken} from '../utility/api.axios';
import {CreateSessionDTO, SessionWire} from '@vesna-task-manager/types';

export class SessionService {
  async loginWithEmailAndPassword(
    createSessionDTO: CreateSessionDTO
  ): Promise<SessionWire> {
    const jwtTokenResponse: AxiosResponse<string> = await backendAPI.post(
      'session',
      createSessionDTO
    );
    setAPIToken(jwtTokenResponse.data);
    return this.getSession();
  }

  async getSession(): Promise<SessionWire> {
    const sessionResponse: AxiosResponse<SessionWire> = await backendAPI.get(
      'session'
    );
    return sessionResponse.data;
  }
}

export const sessionService: SessionService = new SessionService();
