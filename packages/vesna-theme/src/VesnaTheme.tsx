import React from 'react';
import {VesnaThemeProps} from './VesnaTheme.types';
import {CssBaseline, ThemeProvider, createTheme} from '@mui/material';

export function VesnaTheme({children}: VesnaThemeProps) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#0277bd',
      },
    },
    typography: {
      fontSize: 16,
    },
  });

  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CssBaseline>
  );
}
