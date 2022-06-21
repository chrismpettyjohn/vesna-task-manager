import {Timestamp} from '../utility/Timestamp';

export interface ActivityWire {
  id: number;
  userID: number;
  action: string;
  changes?: object;
  resource: ActivityResource;
  resourceID: number;
  createdAt: Timestamp;
}

export enum ActivityResource {
  User = 'user',
  Role = 'role',
  Session = 'session',
  Task = 'task',
  TaskLabel = 'task_label',
}

export const exampleActivityWire: ActivityWire = {
  id: 1,
  userID: 1,
  action: 'Closed task #11',
  changes: undefined,
  resource: ActivityResource.Task,
  resourceID: 1,
  createdAt: '',
};
