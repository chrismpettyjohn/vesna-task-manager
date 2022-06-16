import {TaskEntity} from '../task/task.entity';
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';

@Entity('task_labels')
export class TaskLabelEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name!: string;

  @Column()
  desc!: string;

  @OneToMany(() => TaskEntity, task => task.taskLabel)
  tasks?: TaskEntity[];
}
