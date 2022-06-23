import {makeStyles} from '@mui/styles';
import React, {SyntheticEvent} from 'react';
import {SiteLogo} from '../site-logo/SiteLogo';
import {GuestGuard} from '@vesna-task-manager/web';
import {GuestLayoutProps} from './GuestLayout.types';

const useStyles = makeStyles((theme: any) => ({
  root: {
    background: '#42a5f5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    height: '100vh',
    width: '100vw',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
  form: {
    [theme.breakpoints.up('lg')]: {
      width: 400,
    },
  },
}));

export function GuestLayout({children, onSubmit}: GuestLayoutProps) {
  const classes = useStyles();

  function onFormSubmit(event: SyntheticEvent) {
    event.preventDefault();
    onSubmit();
  }

  return (
    <GuestGuard>
      <div className={classes.root}>
        <form className={classes.form} onSubmit={onFormSubmit}>
          <div style={{marginBottom: 10}}>
            <SiteLogo />
          </div>
          {children}
        </form>
      </div>
    </GuestGuard>
  );
}
