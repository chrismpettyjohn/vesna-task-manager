import React from 'react';
import {Backdrop, Typography} from '@mui/material';
import {LoadingBackdropProps} from './LoadingBackdrop.types';

export function LoadingBackdrop({children}: LoadingBackdropProps) {
  return (
    <Backdrop
      sx={{color: '#fff', zIndex: theme => theme.zIndex.drawer + 1}}
      open
    >
      <i className="fa fa-spinner fa-spin fa-5x" />
      {children && <Typography variant="subtitle1">{children}</Typography>}
    </Backdrop>
  );
}
