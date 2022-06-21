import {UserDTO} from './user.dto';
import {userWire} from '../database/user/user.wire';
import {ActivityService} from '../activity/activity.service';
import {UserRepository} from '../database/user/user.repository';
import {BadRequestException, Body, Controller, Post} from '@nestjs/common';
import {ActivityResource, ErrorCode, UserWire} from '@vesna-task-manager/types';

@Controller('users')
export class UserController {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly activityService: ActivityService
  ) {}

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
      firstName: userDTO.firstName,
      lastName: userDTO.lastName,
      hashedPassword: userDTO.password,
      roleID: 1,
    });

    await this.activityService.recordAction(
      newUser.id!,
      newUser.id!,
      ActivityResource.User,
      'Account created'
    );

    return userWire(newUser);
  }
}
