import {UserDTO} from './user.dto';
import {userWire} from '../database/user/user.wire';
import {ErrorCode, UserWire} from '@vesna-task-manager/types';
import {UserRepository} from '../database/user/user.repository';
import {Body, Controller, Post, BadRequestException} from '@nestjs/common';

@Controller('users')
export class UserController {
  constructor(private readonly userRepo: UserRepository) {}

  @Post()
  async createUser(@Body() userDTO: UserDTO): Promise<UserWire> {
    const [existingUserByUsername, existingUserByEmail] = await Promise.all([
      this.userRepo.findOne({username: userDTO.username}),
      this.userRepo.findOne({email: userDTO.email}),
    ]);

    if (existingUserByUsername) {
      throw new BadRequestException(ErrorCode.UserCreationUsernameIsTaken);
    }

    if (existingUserByEmail) {
      throw new BadRequestException(ErrorCode.UserCreationEmailIsTaken);
    }

    const newUser = await this.userRepo.create({
      email: userDTO.email,
      username: userDTO.username,
      hashedPassword: userDTO.password,
      roleID: 1,
    });

    return userWire(newUser);
  }
}
