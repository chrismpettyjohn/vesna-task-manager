import {TeamEntity} from './team.entity';
import {UserEntity} from '../user/user.entity';
import {TeamPermissions} from '@vesna-task-manager/types';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('team_users')
export class TeamUserEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'user_id'})
  userID!: number;

  @ManyToOne(() => UserEntity, user => user.teams)
  @JoinColumn({name: 'user_id'})
  user?: UserEntity;

  @Column({name: 'team_id'})
  teamID!: number;

  @ManyToOne(() => TeamEntity, tean => tean.users)
  @JoinColumn({name: 'team_id'})
  team?: UserEntity[];

  @Column({name: 'permission_level'})
  permissionLevel!: TeamPermissions;
}
