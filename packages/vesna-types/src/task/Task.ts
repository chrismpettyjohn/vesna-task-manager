import {exampleUserWire} from '../user/User';
import {Timestamp} from '../utility/Timestamp';
import {TaskTimeSpentWire} from './TaskTimeSpent';

export interface TaskWire {
  id: number;
  userID: number;
  labelID: number;
  name: string;
  content: string;
  timeSpent: TaskTimeSpentWire[];
  createdAt: Timestamp;
  closedAt: Timestamp | null;
}

export const exampleTaskWire: TaskWire = {
  id: 1,
  userID: exampleUserWire.id,
  labelID: 1,
  name: 'Wash dishes',
  content: 'I gotta wash these dishes',
  timeSpent: [],
  createdAt: '-',
  closedAt: null,
};
