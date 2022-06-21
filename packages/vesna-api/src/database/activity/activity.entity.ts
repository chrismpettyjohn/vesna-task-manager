import {UserEntity} from '../user/user.entity';
import {ActivityResource, Timestamp} from '@vesna-task-manager/types';
import {
  Entity,
  Column,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

@Entity('activity')
export class ActivityEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'user_id'})
  userID!: number;

  @ManyToOne(() => UserEntity, user => user.activity)
  @JoinColumn({name: 'user_id'})
  user?: UserEntity;

  @Column({type: 'text'})
  action!: string;

  @Column({type: 'json'})
  changes?: object;

  @Column({name: 'resource_type'})
  resourceType!: ActivityResource;

  @Column({name: 'resource_id'})
  resourceID!: number;

  @Column({name: 'created_at', type: 'timestamp'})
  createdAt!: Timestamp;
}
