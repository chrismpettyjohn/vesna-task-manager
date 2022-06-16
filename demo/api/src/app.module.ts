import {Module} from '@nestjs/common';
import {VesnaModule} from '@vesna-task-manager/api';

@Module({
  imports: [VesnaModule],
})
export class VesnaAPIModule {}
