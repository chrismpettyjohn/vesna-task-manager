import {TeamPipe} from './team.pipe';
import {Module} from '@nestjs/common';
import {TeamService} from './team.service';
import {UserModule} from '../user/user.module';
import {TeamController} from './team.controller';
import {SessionModule} from '../session/session.module';
import {TeamUserController} from './team-user.controller';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [DatabaseModule, SessionModule, UserModule],
  controllers: [TeamController, TeamUserController],
  providers: [TeamPipe, TeamService],
  exports: [TeamPipe, TeamService],
})
export class TeamModule {}
