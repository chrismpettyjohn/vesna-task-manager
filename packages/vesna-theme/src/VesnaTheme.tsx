import React from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {VesnaThemeProps} from './VesnaTheme.types';
import {CssBaseline, ThemeProvider, createTheme} from '@mui/material';

export function VesnaTheme({children}: VesnaThemeProps) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#11101D',
      },
    },
    typography: {
      fontSize: 16,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '& label': {
              color: 'white',
            },
            '& label.Mui-focused': {
              color: 'white',
            },
            '& .MuiInputBase-input': {
              background: '#2c387e',
            },
          },
        },
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            textTransform: 'initial',
            fontSize: '1rem',
          },
        },
      },
    },
  });

  return (
    <CssBaseline>
      <ToastContainer />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CssBaseline>
  );
}
