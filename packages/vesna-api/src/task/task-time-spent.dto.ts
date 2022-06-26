import {Timestamp} from '@vesna-task-manager/types';
import {IsDateString, IsString, IsNumber} from 'class-validator';
import {CreateTaskTimeSpentDTOWire} from '@vesna-task-manager/types';

export class CreateTaskTimeSpentDTO implements CreateTaskTimeSpentDTOWire {
  @IsNumber()
  durationInSeconds!: number;

  @IsDateString()
  startedAt!: Timestamp;

  @IsDateString()
  endedAt!: Timestamp;

  @IsString()
  notes!: string;
}
