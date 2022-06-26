import React from 'react';
import {Typography} from '@mui/material';

export function SiteFooter() {
  return (
    <div
      style={{
        width: '100%',
        position: 'absolute',
        bottom: 0,
        textAlign: 'center',
      }}
    >
      <Typography>&copy; Impending Success LLC</Typography>
    </div>
  );
}
