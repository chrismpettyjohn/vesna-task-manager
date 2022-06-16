import {RPUserEntityStruct} from '../user/user.types';
import {GovernmentBranch, RPPermissions} from '@bobba-rp/types';
import {PermissionStatus, RankEntityStruct} from '@instinct-api/database';

export type RPPermissionsStruct = Record<keyof RPPermissions, PermissionStatus>;

export interface RPRankEntityStruct
  extends RPPermissionsStruct,
    Omit<RankEntityStruct, 'users'> {
  description: string;
  users: RPUserEntityStruct[];
  websiteCreateBusiness: PermissionStatus;
  websiteManageBusiness: PermissionStatus;
  websiteGovernmentBranch: GovernmentBranch;
  websiteProposeLaws: PermissionStatus;
  websiteVoteOnLaws: PermissionStatus;
}
