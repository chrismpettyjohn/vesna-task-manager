import {TeamUserWire} from './TeamUser';
import {Timestamp} from '../utility/Timestamp';

export interface TeamWire {
  id: number;
  name: string;
  desc: string;
  icon: string;
  users: TeamUserWire[];
  createdAt: Timestamp;
}

export const exampleTeamWire: TeamWire = {
  id: 1,
  name: 'Team',
  desc: 'Test Team',
  icon: 'fa fa-home',
  users: [],
  createdAt: '',
};
