import {exampleRoleScopeWire, RoleScopeWire} from './RoleScope';

export interface RoleWire {
  id: number;
  name: string;
  desc: string;
  scopes: RoleScopeWire;
}

export const roleWire: RoleWire = {
  id: 1,
  name: 'Administrator',
  desc: 'Administrators have unlimited access to the website and all its functionality without restriction',
  scopes: exampleRoleScopeWire,
}
