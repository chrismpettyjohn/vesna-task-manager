import {IsEnum, IsOptional} from 'class-validator';
import {
  CreateTeamUserDTOWire,
  TeamPermissions,
  UpdateTeamUserDTOWire,
} from '@vesna-task-manager/types';

export class CreateTeamUserDTO implements CreateTeamUserDTOWire {
  @IsEnum(TeamPermissions)
  permissionLevel!: TeamPermissions;
}

export class UpdateTeamUserDTO implements UpdateTeamUserDTOWire {
  @IsEnum(TeamPermissions)
  @IsOptional()
  permissionLevel?: TeamPermissions;
}
