import {LawVoteDTO, LawVoteStatus} from '@bobba-rp/types';
import {IsEnum} from 'class-validator';

export class LawVoteDTOImplementation implements LawVoteDTO {
  @IsEnum(LawVoteStatus)
  status!: LawVoteStatus;
}
