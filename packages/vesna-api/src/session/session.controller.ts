import {Controller, Get} from '@nestjs/common';
import {userWire} from '../database/user/user.wire';
import {UserEntity} from '../database/user/user.entity';
import {UserRepository} from '../database/user/user.repository';
import {UserWire} from '@vesna-task-manager/types/packages/vesna-types';

@Controller('session')
export class SessionController {
  constructor(private readonly userRepo: UserRepository) {}

  @Get('rp')
  @HasSession()
  async getSession(@GetSession() session: UserEntity): Promise<UserWire> {
    const rpUser = await this.userRepo.findOneOrFail({id: session.id});
    return userWire(session.user!);
  }
}
