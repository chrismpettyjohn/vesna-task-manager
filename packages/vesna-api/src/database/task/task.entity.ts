import {UserEntity} from '../user/user.entity';
import {Timestamp} from '@vesna-task-manager/types';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {TaskLabelEntity} from '../task-label/task-label.entity';

@Entity('tasks')
export class TaskEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'user_id', type: 'int'})
  userID!: number;

  @ManyToOne(() => UserEntity, user => user.sessions)
  @JoinColumn({name: 'user_id'})
  user?: UserEntity;

  @Column({name: 'task_label_id', type: 'int'})
  taskLabelID!: number;

  @ManyToOne(() => TaskLabelEntity, taskLabel => taskLabel.tasks)
  @JoinColumn({name: 'task_label_id'})
  taskLabel?: TaskLabelEntity;

  @Column()
  name!: string;

  @Column({type: 'text'})
  content!: string;

  @Column({name: 'created_at', type: 'timestamp'})
  createdAt!: Timestamp;

  @Column({name: 'closed_at', type: 'timestamp'})
  closedAt!: Timestamp;
}
