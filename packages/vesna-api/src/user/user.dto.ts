import {IsString, IsEmail} from 'class-validator';
import {UserDTOWire} from '@vesna-task-manager/types';

export class UserDTO implements UserDTOWire {
  @IsEmail()
  email!: string;

  @IsString()
  username!: string;

  @IsString()
  password!: string;
}
