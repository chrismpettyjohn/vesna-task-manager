import {exampleTaskWire, TaskWire} from './Task';

export interface TaskLabelWire {
  id: number;
  name: string;
  desc: string;
  tasks: TaskWire[];
}

export const exampleTaskLabelWire: TaskLabelWire = {
  id: 1,
  name: 'Chores',
  desc: 'Things I gotta do around the house',
  tasks: [exampleTaskWire],
};
