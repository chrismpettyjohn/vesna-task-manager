import {TeamEntity} from './team.entity';
import {teamUserWire} from './team-user.wire';
import {TeamWire} from '@vesna-task-manager/types';

export function teamWire(teamEntity: TeamEntity): TeamWire {
  return {
    id: teamEntity.id!,
    name: teamEntity.name,
    desc: teamEntity.desc,
    icon: teamEntity.icon,
    users: teamEntity.users!.map(_ => teamUserWire(_)),
    createdAt: teamEntity.createdAt,
  };
}
