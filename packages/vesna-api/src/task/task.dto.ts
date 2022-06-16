import {IsString, IsNumber, IsOptional} from 'class-validator';
import {CreateTaskDTOWire, UpdateTaskDTOWire} from '@vesna-task-manager/types';

export class CreateTaskDTO implements CreateTaskDTOWire {
  @IsNumber()
  taskLabelID!: number;

  @IsString()
  name!: string;

  @IsString()
  content!: string;
}

export class UpdateTaskDTO implements UpdateTaskDTOWire {
  @IsNumber()
  @IsOptional()
  taskLabelID!: number;

  @IsString()
  @IsOptional()
  name!: string;

  @IsString()
  @IsOptional()
  content!: string;
}
