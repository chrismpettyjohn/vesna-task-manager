import {taskContext} from '@vesna-task-manager/web';
import React, {SyntheticEvent, useContext} from 'react';
import {Autocomplete, Box, TextField} from '@mui/material';
import {TaskLabelSelectorProps} from './TaskLabelSelector.types';

export function TaskLabelSelector({
  taskLabelID,
  onChange,
}: TaskLabelSelectorProps) {
  const {taskLabels} = useContext(taskContext);
  const taskLabelOptions = taskLabels?.map(_ => ({
    label: _.name,
    icon: _.icon,
    value: _.id as any,
  }));
  return (
    <Autocomplete
      options={taskLabelOptions as any}
      renderOption={(props: any, taskLabel: any) => {
        return (
          <Box component="li" style={{color: 'black'}} {...props}>
            <i
              className={`fa fa-${taskLabel.icon}`}
              style={{color: 'black', marginRight: 4}}
            />
            {taskLabel.label}
          </Box>
        );
      }}
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
