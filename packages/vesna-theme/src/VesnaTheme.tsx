import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';
import {VesnaThemeProps} from './VesnaTheme.types';
import {} from './component/site-layout/SiteLayout';
import {CssBaseline, ThemeProvider, createTheme} from '@mui/material';

export function VesnaTheme({children}: VesnaThemeProps) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#11101D',
      },
    },
    typography: {
      allVariants: {
        // color: 'white',
      },
      fontSize: 16,
    },
  });

  return (
    <CssBaseline>
      <ToastContainer />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CssBaseline>
  );
}
