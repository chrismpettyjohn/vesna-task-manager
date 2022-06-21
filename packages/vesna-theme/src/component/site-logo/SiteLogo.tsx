import React from 'react';
import {Typography} from '@mui/material';
import {SiteLogoProps} from './SiteLogo.types';

export function SiteLogo({style}: SiteLogoProps) {
  return (
    <Typography
      variant="h4"
      style={{color: 'white', textTransform: 'lowercase', ...style}}
    >
      Vesna
    </Typography>
  );
}
