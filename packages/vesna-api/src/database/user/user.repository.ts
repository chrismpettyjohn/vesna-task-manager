import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {UserEntity} from './user.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../base.repository';
import {HashService} from '../../common/hash.service';

@Injectable()
export class UserRepository extends BaseRepository<UserEntity> {
  constructor(
    private readonly hashService: HashService,
    @InjectRepository(UserEntity) userRepo: Repository<UserEntity>
  ) {
    super(userRepo, ['role']);
  }

  async create(user: UserEntity): Promise<UserEntity> {
    const newUser = await super.create({
      ...user,
      hashedPassword: this.hashService.generate(user.hashedPassword),
    });
    return this.findOneOrFail({id: newUser.id!});
  }
}
