import React from 'react';
import {Autocomplete, TextField} from '@mui/material';
import {IconSelectorProps} from './IconSelector.types';
import {FONT_AWESOME_ICONS} from './IconSelector.const';

export function IconSelector({icon, onChange}: IconSelectorProps) {
  const iconOptions = FONT_AWESOME_ICONS.map(_ => ({label: _, value: _}));
  console.log(icon);
  return (
    <div className="row">
      <div className="col p-2" style={{maxWidth: 'fit-content'}}>
        <i className={`${icon} fa-3x`} />
      </div>
      <div className="col">
        <Autocomplete
          disablePortal
          id="task-label-selector"
          options={iconOptions as any}
          sx={{width: '100%'}}
          renderInput={params => <TextField {...params} label="Task Label" />}
          value={iconOptions?.find((_: any) => _.value === icon)}
          onChange={(e, target) => onChange(target.value)}
        />
      </div>
    </div>
  );
}
