import React, {useContext} from 'react';
import {taskContext} from '@vesna-task-manager/web';
import {Autocomplete, TextField} from '@mui/material';
import {TaskSelectorProps} from './TaskSelector.types';

export function TaskSelector({taskID, onChange}: TaskSelectorProps) {
  const {tasks} = useContext(taskContext);

  const taskOptions = tasks?.map(_ => ({
    label: _.name,
    value: _.id as any,
  }));

  return (
    <Autocomplete
      disablePortal
      id="task-label-selector"
      options={taskOptions as any}
      sx={{width: '100%'}}
      renderInput={(params: any) => <TextField {...params} label="Task" />}
      value={taskOptions?.find(_ => _.value === taskID)}
      onChange={(e: any) => onChange(e.value)}
    />
  );
}
