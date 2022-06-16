import {exampleUserWire} from '../user/User';
import {Timestamp} from '../utility/Timestamp';

export interface SessionWire {
  id: number;
  userID: number;
  createdAt: Timestamp;
  endedAt: Timestamp;
  ipAddress: string;
  geoLocation: string;
  operatingSystem: string;
}

export const exampleSessionWire: SessionWire = {
  id: 1,
  userID: exampleUserWire.id,
  createdAt: '',
  endedAt: '',
  ipAddress: '',
  geoLocation: '',
  operatingSystem: '',
};
