import React from 'react';
import {VesnaThemeProps} from './VesnaTheme.types';
import {SiteLayout} from './component/site-layout/SiteLayout';
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';

export function VesnaTheme({children}: VesnaThemeProps) {
  let theme = createTheme({
    palette: {
      primary: {
        main: '#f5f8ff',
      },
    },
  });
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <SiteLayout>{children}</SiteLayout>
    </ThemeProvider>
  );
}
