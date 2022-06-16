import {exampleUserWire, UserWire} from './User';

export interface PrivateUserWire extends UserWire {
  email: string;
}

export const examplePrivateUserWire: PrivateUserWire = {
  ...exampleUserWire,
  email: 'user@gmail.com',
};
