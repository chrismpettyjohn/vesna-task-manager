import React from 'react';
import {IconSelectorProps} from './IconSelector.types';
import {FONT_AWESOME_ICONS} from './IconSelector.const';
import {Autocomplete, Grid, TextField} from '@mui/material';

export function IconSelector({icon, onChange}: IconSelectorProps) {
  const iconOptions = FONT_AWESOME_ICONS.map(_ => ({label: _, value: _}));
  return (
    <Grid container>
      <Grid item xs={2}>
        <i className={`${icon} fa-3x`} />
      </Grid>
      <Grid item xs={10}>
        <Autocomplete
          disablePortal
          id="task-label-selector"
          options={iconOptions as any}
          renderInput={params => <TextField {...params} label="Task Label" />}
          value={iconOptions?.find((_: any) => _.value === icon) ?? null}
          onChange={(e: any, target: any) => onChange(target?.value)}
          fullWidth
        />
      </Grid>
    </Grid>
  );
}
