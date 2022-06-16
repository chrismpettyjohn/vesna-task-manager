import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {RoleEntity} from './role.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../base.repository';

@Injectable()
export class RoleRepository extends BaseRepository<RoleEntity> {
  constructor(@InjectRepository(RoleEntity) roleRepo: Repository<RoleEntity>) {
    super(roleRepo, []);
  }

  async create(rank: RoleEntity): Promise<RoleEntity> {
    const newRank = await super.create(rank);
    return this.findOneOrFail({id: newRank.id!});
  }
}
