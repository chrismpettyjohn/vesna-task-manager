import {IsString, IsOptional} from 'class-validator';
import {
  CreateTaskLabelDTOWire,
  UpdateTaskLabelDTOWire,
} from '@vesna-task-manager/types';

export class CreateTaskLabelDTO implements CreateTaskLabelDTOWire {
  @IsString()
  icon!: string;

  @IsString()
  name!: string;

  @IsString()
  desc!: string;

  @IsString()
  color!: string;
}

export class UpdateTaskLabelDTO implements UpdateTaskLabelDTOWire {
  @IsString()
  icon!: string;

  @IsString()
  @IsOptional()
  name!: string;

  @IsString()
  @IsOptional()
  desc!: string;

  @IsString()
  @IsOptional()
  color!: string;
}
