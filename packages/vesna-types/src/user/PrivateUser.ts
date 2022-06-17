import {exampleUserWire, UserWire} from './User';

export interface PrivateUserWire extends UserWire {
  lastName: string;
  email: string;
}

export const examplePrivateUserWire: PrivateUserWire = {
  ...exampleUserWire,
  lastName: '',
  email: 'user@gmail.com',
};
