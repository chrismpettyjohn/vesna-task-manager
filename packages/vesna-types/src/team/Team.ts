import {TeamUserWire} from './TeamUser';

export interface TeamWire {
  id: number;
  name: string;
  desc: string;
  icon: string;
  users: TeamUserWire[];
}

export const exampleTeamWire: TeamWire = {
  id: 1,
  name: 'Team',
  desc: 'Test Team',
  icon: 'fa fa-home',
  users: [],
};
