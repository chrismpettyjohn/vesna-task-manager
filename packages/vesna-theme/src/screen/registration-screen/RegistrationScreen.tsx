import {toast} from 'react-toastify';
import {Link, useLocation} from 'wouter';
import {Button, TextField} from '@mui/material';
import React, {useContext, useState} from 'react';
import {CreateUserDTOWire} from '@vesna-task-manager/types';
import {GuestLayout} from '../../component/guest-layout/GuestLayout';
import {
  sessionContext,
  sessionService,
  userService,
} from '@vesna-task-manager/web';

export function RegistrationScreen() {
  const [location, setLocation] = useLocation();
  const {setSession} = useContext(sessionContext);
  const [isLoading, setIsLoading] = useState(false);
  const [newUserDTO, setNewUserDTO] = useState<CreateUserDTOWire>({
    email: '',
    username: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const updateNewUserDTO = (changes: Partial<CreateUserDTOWire>) => {
    setNewUserDTO(_ => ({
      ..._,
      ...changes,
    }));
  };

  const onRegister = async () => {
    try {
      if (isLoading) {
        return;
      }

      const requiredKeys: Array<keyof CreateUserDTOWire> = [
        'email',
        'username',
        'password',
        'firstName',
        'lastName',
      ];

      for (const requiredKey of requiredKeys) {
        if (!newUserDTO[requiredKey]) {
          toast.error(`${requiredKey} is required to create an account`);
        }
      }

      setIsLoading(true);

      await userService.create(newUserDTO);
      const newUserSession = await sessionService.loginWithEmailAndPassword({
        email: newUserDTO.email,
        password: newUserDTO.password,
      });

      setSession(newUserSession);
      setLocation('/dashboard');
    } catch {
      toast.error(
        "Your account couldn't be created due to an unexpected error"
      );
    }

    setIsLoading(false);
  };

  return (
    <GuestLayout onSubmit={onRegister}>
      <TextField
        id="email"
        label="Email"
        fullWidth
        variant="filled"
        value={newUserDTO.email}
        onChange={e => updateNewUserDTO({email: e?.target?.value ?? ''})}
      />
      <TextField
        id="username"
        label="Username"
        fullWidth
        variant="filled"
        value={newUserDTO.username}
        onChange={e => updateNewUserDTO({username: e?.target?.value ?? ''})}
      />
      <TextField
        id="password"
        label="Password"
        fullWidth
        variant="filled"
        value={newUserDTO.password}
        type="password"
        onChange={e => updateNewUserDTO({password: e?.target?.value ?? ''})}
      />
      <TextField
        id="firstName"
        label="First Name"
        fullWidth
        variant="filled"
        value={newUserDTO.firstName}
        onChange={e => updateNewUserDTO({firstName: e?.target?.value ?? ''})}
      />
      <TextField
        id="lastName"
        label="Last Name"
        fullWidth
        variant="filled"
        value={newUserDTO.lastName}
        onChange={e => updateNewUserDTO({lastName: e?.target?.value ?? ''})}
      />
      <div style={{width: '100%'}}>
        <Button
          color="success"
          onClick={onRegister}
          variant="contained"
          style={{float: 'right'}}
          type="submit"
        >
          {isLoading ? (
            <>
              <i className="fa fa-spinner fa-spin" style={{marginRight: 4}} />{' '}
              Creating Account...
            </>
          ) : (
            'Create Account'
          )}
        </Button>
        <Link to="/login">
          <Button color="primary" variant="contained" style={{float: 'left'}}>
            Cancel
          </Button>
        </Link>
      </div>
    </GuestLayout>
  );
}
