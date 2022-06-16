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

export const sessionWire: SessionWire = {
  id: 1,
  userID: exampleUser.id,
}
