import {RoleEntity} from '../role/role.entity';
import {TaskEntity} from '../task/task.entity';
import {SessionEntity} from '../session/session.entity';
import {TaskLabelEntity} from '../task-label/task-label.entity';
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

  @Column({name: 'first_name'})
  firstName!: string;

  @Column({name: 'last_name'})
  lastName!: string;

  @Column({name: 'role_id'})
  roleID!: number;

  @ManyToOne(() => RoleEntity, role => role.users)
  @JoinColumn({name: 'role_id'})
  role?: RoleEntity;

  @OneToMany(() => SessionEntity, session => session.user)
  sessions?: SessionEntity[];

  @OneToMany(() => TaskLabelEntity, task => task.user)
  tasks?: TaskEntity[];

  @OneToMany(() => TaskLabelEntity, taskLabel => taskLabel.user)
  taskLabels?: TaskLabelEntity[];
}
