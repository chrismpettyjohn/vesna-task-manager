import React from 'react';
import Select from 'react-select';
import {IconSelectorProps} from './IconSelector.types';
import {FONT_AWESOME_ICONS} from './IconSelector.const';

export function IconSelector({icon, onChange}: IconSelectorProps) {
  return (
    <div style={{padding: 4, overflow: 'visible'}}>
      <Select
        className="h-100 w-100"
        options={FONT_AWESOME_ICONS.map(_ => ({label: _, value: _})) as any}
        value={icon}
        onChange={(e: any) => onChange(e.value)}
      />
      />
    </div>
  );
}
