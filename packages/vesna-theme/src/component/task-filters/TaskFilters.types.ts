import {TaskWire} from '@vesna-task-manager/types';

export interface TaskFilter {
  label: string;
  value: (task: TaskWire) => boolean;
}

export interface TaskFilterProps {
  filter?: TaskFilter;
  onChange(newFilter?: TaskFilter): void;
}
