import {RPUserEntityStruct} from './user.types';
import {RPRankEntity} from '../rank/rank.entity';
import {UserEntity} from '@instinct-api/database';
import {UserRPStatEntity} from './rp-stats.entity';
import {RPRankEntityStruct} from '../rank/rank.types';
import {Entity, JoinColumn, ManyToOne, OneToOne} from 'typeorm';

@Entity('users')
export class RPUserEntity extends UserEntity implements RPUserEntityStruct {
  @ManyToOne(() => RPRankEntity, rank => rank.users)
  @JoinColumn({name: 'rank'})
  rank?: RPRankEntityStruct;

  @OneToOne(() => UserRPStatEntity, rpStats => rpStats.user)
  @JoinColumn({name: 'id'})
  rpStats?: UserRPStatEntity;
}
