import {TeamUserEntity} from './team-user.entity';
import {Timestamp} from '@vesna-task-manager/types';
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';

@Entity('teams')
export class TeamEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name!: string;

  @Column()
  desc!: string;

  @Column()
  icon!: string;

  @Column({name: 'created_at', type: 'timestamp'})
  createdAt!: Timestamp;

  @OneToMany(() => TeamUserEntity, teamUser => teamUser.team)
  users?: TeamUserEntity[];
}
