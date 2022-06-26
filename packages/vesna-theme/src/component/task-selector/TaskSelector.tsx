import {taskContext} from '@vesna-task-manager/web';
import {Autocomplete, TextField} from '@mui/material';
import {TaskSelectorProps} from './TaskSelector.types';
import React, {SyntheticEvent, useContext} from 'react';

export function TaskSelector({taskID, onChange}: TaskSelectorProps) {
  const {tasks} = useContext(taskContext);

  const taskOptions = tasks?.map(_ => ({
    label: _.name,
    value: _.id as any,
  }));

  return (
    <Autocomplete
      options={taskOptions as any}
      sx={{width: '100%'}}
      renderInput={(params: any) => (
        <TextField
          {...params}
          label="Task"
          fullWidth
          margin="dense"
          variant="outlined"
        />
      )}
      value={taskOptions?.find(_ => _.value === taskID) ?? undefined}
      onChange={(event: SyntheticEvent, newInputValue: any) => {
        onChange(newInputValue.value);
      }}
      disableClearable
    />
  );
}
