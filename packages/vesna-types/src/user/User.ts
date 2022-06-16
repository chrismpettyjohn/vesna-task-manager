import {RoleWire, exampleRoleWire} from '../role/Role';

export interface UserWire {
  id: number;
  username: string;
  role: RoleWire;
}

export const exampleUserWire: UserWire = {
  id: 1,
  username: 'user',
  role: exampleRoleWire,
};
