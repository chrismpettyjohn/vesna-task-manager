import {UserEntity} from '../user/user.entity';
import {MediaType, Timestamp} from '@vesna-task-manager/types';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('media')
export class MediaEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'user_id', type: 'int'})
  userID!: number;

  @ManyToOne(() => UserEntity, user => user.sessions)
  @JoinColumn({name: 'user_id'})
  user?: UserEntity;

  @Column({name: 'file_label'})
  fileLabel!: string;

  @Column({name: 'file_name'})
  fileName!: string;

  @Column({name: 'file_type'})
  fileType!: MediaType;

  @Column({name: 'file_desc', type: 'text'})
  fileDesc!: string;

  @Column({name: 's3_key'})
  s3Key!: string;

  @Column({name: 'created_at', type: 'timestamp'})
  createdAt!: Timestamp;
}
