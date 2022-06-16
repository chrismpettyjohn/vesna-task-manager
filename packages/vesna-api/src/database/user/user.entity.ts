import {RoleEntity} from '../role/role.entity';
import {SessionEntity} from '../session/session.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({unique: true})
  username!: string;

  @Column({unique: true})
  email!: string;

  @Column({name: 'hashed_password'})
  hashedPassword!: string;

  @Column({name: 'role_id'})
  roleID!: number;

  @ManyToOne(() => RoleEntity, role => role.users)
  @JoinColumn({name: 'rank_id'})
  role?: RoleEntity;

  @OneToMany(() => SessionEntity, session => session.user)
  sessions?: SessionEntity[];
}
