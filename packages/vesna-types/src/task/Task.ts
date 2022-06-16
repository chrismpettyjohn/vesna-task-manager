import {exampleUserWire} from '../user/User';
import {Timestamp} from '../utility/Timestamp';

export interface TaskWire {
  id: number;
  userID: number;
  labelID: number;
  name: string;
  content: string;
  createdAt: Timestamp;
  closedAt: Timestamp | null;
}

export const exampleTaskWire: TaskWire = {
  id: 1,
  userID: exampleUserWire.id,
  labelID: 1,
  name: 'Wash dishes',
  content: 'I gotta wash these dishes',
  createdAt: '-',
  closedAt: null,
};
