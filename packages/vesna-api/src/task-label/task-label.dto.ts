import {IsString, IsOptional} from 'class-validator';
import {
  CreateTaskLabelDTOWire,
  UpdateTaskLabelDTOWire,
} from '@vesna-task-manager/types';

export class CreateTaskLabelDTO implements CreateTaskLabelDTOWire {
  @IsString()
  name!: string;

  @IsString()
  desc!: string;
}

export class UpdateTaskLabelDTO implements UpdateTaskLabelDTOWire {
  @IsString()
  @IsOptional()
  name!: string;

  @IsString()
  @IsOptional()
  desc!: string;
}
