import {UserEntity} from '../user/user.entity';
import {RoleScopeWire} from '@vesna-task-manager/types';
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';

@Entity('roles')
export class RoleEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name!: string;

  @Column()
  desc!: string;

  @Column({type: 'json'})
  scopes!: RoleScopeWire;

  @OneToMany(() => UserEntity, user => user.role)
  // @ts-ignore
  users?: UserEntity[];
}
