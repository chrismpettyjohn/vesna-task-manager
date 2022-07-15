import React from 'react';
import {Tabs, Tab} from '@mui/material';
import {TaskWire} from '@vesna-task-manager/types';
import {TaskFilter, TaskFilterProps} from './TaskFilters.types';

export function TaskFilters({filter, onChange}: TaskFilterProps) {
  const taskFilters: TaskFilter[] = [
    {
      label: 'Pending',
      value: (task: TaskWire) => task.closedAt === null,
    },
    {
      label: 'Completed',
      value: (task: TaskWire) => task.closedAt !== null,
    },
  ];

  const onChangeFilter = (newFilter: string) => {
    onChange(
      newFilter === filter?.label
        ? undefined
        : taskFilters.find(_ => _.label === newFilter)!
    );
  };

  return (
    <Tabs
      value={filter?.label}
      onChange={(e, value) => onChangeFilter(value)}
      centered
      variant="fullWidth"
      selectionFollowsFocus
    >
      {taskFilters.map(taskFilter => (
        <Tab
          key={`task_filter_${taskFilter.label}`}
          label={taskFilter.label}
          value={taskFilter.label}
        />
      ))}
    </Tabs>
  );
}
