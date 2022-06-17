import React from 'react';
import {VesnaThemeProps} from './VesnaTheme.types';
import {SiteLayout} from './component/site-layout/SiteLayout';
import {ThemeProvider, createTheme} from '@mui/material/styles';

export function VesnaTheme({children}: VesnaThemeProps) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#f5f8ff',
      },
    },
    typography: {
      fontSize: 20,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <SiteLayout>{children}</SiteLayout>
    </ThemeProvider>
  );
}
