import {TaskEntity} from './task.entity';
import {UserEntity} from '../user/user.entity';
import {Timestamp} from '@vesna-task-manager/types';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tasks_time_spent')
export class TaskTimeSpentEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'task_id', type: 'int'})
  taskID!: number;

  @ManyToOne(() => TaskEntity, task => task.timeSpent)
  @JoinColumn({name: 'task_id'})
  task?: TaskEntity;

  @Column({name: 'user_id', type: 'int'})
  userID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'user_id'})
  user?: UserEntity;

  @Column({name: 'started_at', type: 'timestamp'})
  startedAt!: Timestamp;

  @Column({name: 'ended_at', type: 'timestamp'})
  endedAt!: Timestamp;

  @Column({name: 'duration', type: 'int'})
  durationInSeconds!: number;
}
