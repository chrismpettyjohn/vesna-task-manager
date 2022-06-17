import {RoleWire, exampleRoleWire} from '../role/Role';

export interface UserWire {
  id: number;
  firstName: string;
  username: string;
  role: RoleWire;
}

export const exampleUserWire: UserWire = {
  id: 1,
  firstName: 'Chris',
  username: 'user',
  role: exampleRoleWire,
};
