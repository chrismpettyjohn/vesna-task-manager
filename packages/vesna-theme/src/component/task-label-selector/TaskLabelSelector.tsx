import React, {SyntheticEvent, useContext} from 'react';
import {taskContext} from '@vesna-task-manager/web';
import {Autocomplete, TextField} from '@mui/material';
import {TaskLabelSelectorProps} from './TaskLabelSelector.types';

export function TaskLabelSelector({
  taskLabelID,
  onChange,
}: TaskLabelSelectorProps) {
  const {taskLabels} = useContext(taskContext);
  const taskLabelOptions = taskLabels?.map(_ => ({
    label: _.name,
    value: _.id as any,
  }));
  return (
    <Autocomplete
      options={taskLabelOptions as any}
      renderInput={params => (
        <TextField
          {...params}
          label="Task Label"
          fullWidth
          margin="dense"
          variant="standard"
          InputLabelProps={{shrink: true}}
        />
      )}
      value={taskLabelOptions?.find(_ => _.value === taskLabelID)}
      onChange={(e: SyntheticEvent, result: {label: string; value: number}) =>
        onChange(result.value)
      }
      sx={{width: '100%'}}
      disableClearable
    />
  );
}
