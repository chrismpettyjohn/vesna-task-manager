import {toast} from 'react-toastify';
import {Link, useLocation} from 'wouter';
import {Box, Button, TextField} from '@mui/material';
import {SiteLogo} from '../../component/site-logo/SiteLogo';
import React, {SyntheticEvent, useContext, useState} from 'react';
import {
  GuestGuard,
  sessionContext,
  sessionService,
} from '@vesna-task-manager/web';

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

      toast.success(`Welcome back, ${newUserSession.privateUser.firstName}!`);

      setSession(newUserSession);
      setLocation('/dashboard');
    } catch {
      toast.error(
        "There was a problem and you couldn't be signed in at this time"
      );
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
                type="password"
                onChange={e => setPassword(e?.target?.value ?? '')}
              />
            </div>
            <div style={{marginBottom: 10}}>
              <Button
                color="success"
                onClick={onLogin}
                variant="contained"
                style={{float: 'right'}}
                type="submit"
              >
                {isLoading ? (
                  <>
                    <i
                      className="fa fa-spinner fa-spin"
                      style={{marginRight: 4}}
                    />{' '}
                    Signing in...
                  </>
                ) : (
                  'Sign In'
                )}
              </Button>
              <Link to="/register">
                <Button
                  color="primary"
                  variant="contained"
                  style={{float: 'right'}}
                >
                  Create an Account
                </Button>
              </Link>
            </div>
          </form>
        </Box>
      </Box>
    </GuestGuard>
  );
}
