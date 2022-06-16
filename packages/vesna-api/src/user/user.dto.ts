import {IsString, IsEmail} from 'class-validator';
import {CreateUserDTOWire} from '@vesna-task-manager/types';

export class UserDTO implements CreateUserDTOWire {
  @IsEmail()
  email!: string;

  @IsString()
  username!: string;

  @IsString()
  password!: string;
}
