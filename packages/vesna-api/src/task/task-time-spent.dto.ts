import {Timestamp} from '@vesna-task-manager/types';
import {IsDateString, IsString} from 'class-validator';
import {CreateTaskTimeSpentDTOWire} from '@vesna-task-manager/types';

export class CreateTaskTimeSpentDTO implements CreateTaskTimeSpentDTOWire {
  @IsDateString()
  startedAt!: Timestamp;

  @IsDateString()
  endedAt!: Timestamp;

  @IsString()
  notes!: string;
}
