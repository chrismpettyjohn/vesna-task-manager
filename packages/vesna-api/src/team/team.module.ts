import {TeamPipe} from './team.pipe';
import {Module} from '@nestjs/common';
import {TeamController} from './team.controller';
import {TeamUserController} from './team-user.controller';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TeamController, TeamUserController],
  providers: [TeamPipe],
  exports: [TeamPipe],
})
export class TeamModule {}
