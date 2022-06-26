import React from 'react';
import {IconSelectorProps} from './IconSelector.types';
import {FONT_AWESOME_ICONS} from './IconSelector.const';
import {Autocomplete, Box, Grid, TextField} from '@mui/material';

export function IconSelector({icon, onChange}: IconSelectorProps) {
  const iconOptions = FONT_AWESOME_ICONS.map(_ => ({
    label: _.split('fa-')[1],
    value: _,
  }));
  return (
    <Grid container>
      <Grid item xs={2}>
        <i className={`${icon} fa-3x`} style={{marginTop: '10%'}} />
      </Grid>
      <Grid item xs={10}>
        <Autocomplete
          options={iconOptions as any}
          renderOption={(props: any) => {
            return (
              <Box component="li" style={{color: 'black'}} {...props}>
                <i
                  className={`fa fa-${props.key}`}
                  style={{color: 'black', marginRight: 4}}
                />
                {props.key}
              </Box>
            );
          }}
          renderInput={params => (
            <TextField
              {...params}
              label="Icon"
              fullWidth
              margin="dense"
              variant="standard"
              InputLabelProps={{shrink: true}}
            />
          )}
          value={iconOptions?.find((_: any) => _.value === icon) ?? undefined}
          onChange={(e: any, target: any) => onChange(target?.value)}
          sx={{width: '100%'}}
          disableClearable
        />
      </Grid>
    </Grid>
  );
}
