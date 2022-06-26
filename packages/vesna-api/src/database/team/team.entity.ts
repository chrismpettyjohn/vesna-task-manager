import {TeamUserEntity} from './team-user.entity';
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

  @OneToMany(() => TeamUserEntity, teamUser => teamUser.team)
  users?: TeamUserEntity[];
}
