import {useLocation} from 'wouter';
import React, {SyntheticEvent, useContext, useState} from 'react';
import {
  GuestGuard,
  localStorageService,
  sessionContext,
  sessionService,
} from '@vesna-task-manager/web';

export function LoginScreen() {
  const [location, setLocation] = useLocation();
  const {setSession} = useContext(sessionContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = async (event: SyntheticEvent) => {
    event.preventDefault();
    try {
      if (!email) {
        alert('Email is required');
        return;
      }

      if (!password) {
        alert('Password is required');
        return;
      }

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
  };

  return (
    <GuestGuard>
      <div style={{background: 'white', borderRadius: 4, padding: 4}}>
        <form onSubmit={onLogin}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e?.target?.value)}
          />
          <br />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e?.target?.value)}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </GuestGuard>
  );
}
