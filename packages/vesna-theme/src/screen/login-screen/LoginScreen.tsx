import {useLocation} from 'wouter';
import {Box, Button, Grid, TextField} from '@mui/material';
import React, {SyntheticEvent, useContext, useState} from 'react';
import {
  GuestGuard,
  sessionContext,
  sessionService,
} from '@vesna-task-manager/web';
import {SiteLogo} from '../../component/site-logo/SiteLogo';

export function LoginScreen() {
  const [location, setLocation] = useLocation();
  const {setSession} = useContext(sessionContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onLogin = async (event: SyntheticEvent) => {
    event.preventDefault();
    try {
      if (isLoading) {
        return;
      }

      if (!email) {
        alert('Email is required');
        return;
      }

      if (!password) {
        alert('Password is required');
        return;
      }

      setIsLoading(true);

      const newUserSession = await sessionService.loginWithEmailAndPassword({
        email,
        password,
      });

      setSession(newUserSession);
      setLocation('/dashboard');
    } catch {
      alert('There was a problem creating your account');
      return;
    }

    setIsLoading(false);
  };

  return (
    <GuestGuard>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        minWidth="100vw"
      >
        <Box
          sx={{backgroundColor: 'primary.main', padding: '2%', width: '40%'}}
        >
          <form onSubmit={onLogin}>
            <div style={{marginBottom: 10}}>
              <SiteLogo />
            </div>
            <div style={{marginBottom: 10}}>
              <TextField
                id="email"
                label="Email"
                fullWidth
                variant="filled"
                value={email}
                onChange={e => setEmail(e?.target?.value ?? '')}
              />
            </div>
            <div style={{marginBottom: 10}}>
              <TextField
                id="password"
                label="Password"
                fullWidth
                variant="filled"
                value={password}
                onChange={e => setPassword(e?.target?.value ?? '')}
              />
            </div>
            <div style={{marginBottom: 10}}>
              <Button
                color="success"
                onClick={onLogin}
                variant="contained"
                style={{float: 'right'}}
              >
                {isLoading ? (
                  <>
                    <i
                      className="fa fa-spinner fa-spin"
                      style={{marginRight: 4}}
                    />{' '}
                    Saving...
                  </>
                ) : (
                  'Save'
                )}
              </Button>
            </div>
          </form>
        </Box>
      </Box>
    </GuestGuard>
  );
}
