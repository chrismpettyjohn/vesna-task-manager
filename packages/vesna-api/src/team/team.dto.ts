import {IsString, IsOptional} from 'class-validator';
import {CreateTeamDTOWire, UpdateTeamDTOWire} from '@vesna-task-manager/types';

export class CreateTeamDTO implements CreateTeamDTOWire {
  @IsString()
  name!: string;

  @IsString()
  desc!: string;

  @IsString()
  icon!: string;
}

export class UpdateTeamDTO implements UpdateTeamDTOWire {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  desc?: string;

  @IsString()
  @IsOptional()
  icon?: string;
}
