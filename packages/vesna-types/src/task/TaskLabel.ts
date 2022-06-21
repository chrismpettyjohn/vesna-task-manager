import {exampleTaskWire, TaskWire} from './Task';

export interface TaskLabelWire {
  id: number;
  icon: string;
  name: string;
  desc: string;
  color: string;
}

export const exampleTaskLabelWire: TaskLabelWire = {
  id: 1,
  icon: '',
  name: 'Chores',
  desc: 'Things I gotta do around the house',
  color: '',
};
