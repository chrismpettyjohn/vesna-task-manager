import {UserEntity} from '../user/user.entity';
import {Timestamp} from '@vesna-task-manager/types';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('sessions')
export class SessionEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'user_id', type: 'int' })
  userID!: number;

  @ManyToOne(() => UserEntity, user => user.sessions)
  @JoinColumn({ name: 'user_id' })
  user?: UserEntity;

  @Column({ name: 'created_at', type: 'timestamp' })
  createdAt!: Timestamp;

  @Column({ name: 'ended_at', type: 'timestamp' })
  endedAt!: Timestamp;

  @Column({ name: 'ip_address' })
  ipAddress!: string;

  @Column({ name: 'geo_location' })
  geoLocation!: string;

  @Column({ name: 'operating_system' })
  operatingSystem!: string;
}
