import {IsDateString} from 'class-validator';
import {Timestamp} from '@vesna-task-manager/types';
import {CreateTaskTimeSpentDTOWire} from '@vesna-task-manager/types';

export class CreateTaskTimeSpentDTO implements CreateTaskTimeSpentDTOWire {
  @IsDateString()
  startedAt!: Timestamp;

  @IsDateString()
  endedAt!: Timestamp;
}
