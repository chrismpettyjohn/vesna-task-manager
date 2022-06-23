import {toast} from 'react-toastify';
import {Link, useLocation} from 'wouter';
import {Button, TextField} from '@mui/material';
import React, {useContext, useState} from 'react';
import {GuestLayout} from '../../component/guest-layout/GuestLayout';
import {sessionContext, sessionService} from '@vesna-task-manager/web';

export function LoginScreen() {
  const [location, setLocation] = useLocation();
  const {setSession} = useContext(sessionContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onLogin = async () => {
    try {
      if (isLoading) {
        return;
      }

      if (!email) {
        toast.error('Email is required');
        return;
      }

      if (!password) {
        toast.error('Password is required');
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
    <GuestLayout onSubmit={onLogin}>
      <TextField
        id="email"
        label="Email"
        fullWidth
        variant="filled"
        value={email}
        onChange={e => setEmail(e?.target?.value ?? '')}
      />
      <TextField
        id="password"
        label="Password"
        fullWidth
        variant="filled"
        value={password}
        type="password"
        onChange={e => setPassword(e?.target?.value ?? '')}
      />
      <div style={{width: '100%'}}>
        <Link to="/register">
          <Button color="primary" variant="contained" style={{float: 'left'}}>
            Register
          </Button>
        </Link>
        <Button
          color="success"
          onClick={onLogin}
          variant="contained"
          style={{float: 'right'}}
          type="submit"
        >
          {isLoading ? (
            <>
              <i className="fa fa-spinner fa-spin" style={{marginRight: 4}} />{' '}
              Signing in...
            </>
          ) : (
            'Sign In'
          )}
        </Button>
      </div>
    </GuestLayout>
  );
}
