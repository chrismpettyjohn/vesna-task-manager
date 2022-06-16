import {UserEntity} from '../user/user.entity';
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

  @Column({ name: 'ip_address' })
  ipAddress!: string;

  @Column({ name: 'geo_location' })
  geoLocation!: string;

  @Column({ name: 'operating_system' })
  operatingSystem!: string;
}
