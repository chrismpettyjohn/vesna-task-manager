import {AxiosResponse} from 'axios';
import {backendAPI} from '../utility/api.axios';
import {CreateUserDTOWire, UserWire} from '@vesna-task-manager/types';

export class UserService {
  async create(createUserDTO: CreateUserDTOWire): Promise<UserWire> {
    const newUserResponse: AxiosResponse = await backendAPI.post(
      'users',
      createUserDTO
    );
    return newUserResponse.data;
  }
}

export const userService: UserService = new UserService();
