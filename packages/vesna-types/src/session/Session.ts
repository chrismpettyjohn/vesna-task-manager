import {exampleUserWire} from '../user/User';
import {Timestamp} from '../utility/Timestamp';
import {examplePrivateUserWire, PrivateUserWire} from '../user/PrivateUser';

export interface SessionWire {
  id: number;
  userID: number;
  privateUser: PrivateUserWire;
  createdAt: Timestamp;
  endedAt: Timestamp;
  ipAddress: string;
  geoLocation: string;
  operatingSystem: string;
}

export const exampleSessionWire: SessionWire = {
  id: 1,
  userID: exampleUserWire.id,
  privateUser: examplePrivateUserWire,
  createdAt: '',
  endedAt: '',
  ipAddress: '',
  geoLocation: '',
  operatingSystem: '',
};
