import {TaskEntity} from '../task/task.entity';
import {UserEntity} from '../user/user.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('task_labels')
export class TaskLabelEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  icon!: string;

  @Column()
  name!: string;

  @Column()
  desc!: string;

  @Column()
  color!: string;

  @Column({name: 'user_id', type: 'int'})
  userID!: number;

  @ManyToOne(() => UserEntity, user => user.taskLabels)
  @JoinColumn({name: 'user_id'})
  user?: UserEntity;

  @OneToMany(() => TaskEntity, task => task.taskLabel)
  tasks?: TaskEntity[];
}
