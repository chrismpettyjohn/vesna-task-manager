import {Module} from '@nestjs/common';
import {HashService} from './hash.service';

@Module({
  imports: [HashService],
  exports: [HashService],
})
export class CommonModule {}
