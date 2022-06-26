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
          renderOption={(props: any, icon: any) => {
            return (
              <Box component="li" style={{color: 'black'}} {...props}>
                <i
                  className={icon.value}
                  style={{color: 'black', marginRight: 4}}
                />
                {icon.label}
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
