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
      MuiDialog: {
        styleOverrides: {
          root: {
            '.MuiDialog-paper': {
              background: '#11101D',
              color: 'white',
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            '&.Mui-focused': {
              color: 'white',
            },
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: 'standard',
        },
        styleOverrides: {
          root: {
            color: 'white',
            input: {
              color: 'white',
            },
            '& label': {
              color: 'white',
            },
            '& .Mui-focused': {
              color: 'white',
            },
            '& label.Mui-focused': {
              color: 'white',
            },
            '& .MuiInputBase-input': {
              background: '#2c387e',
              color: 'white',
            },
            '& .MuiFormControl-input': {
              background: '#2c387e',
              color: 'white',
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
