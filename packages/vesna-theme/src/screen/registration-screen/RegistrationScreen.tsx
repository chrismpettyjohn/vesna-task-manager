import {useLocation} from 'wouter';
import {toast} from 'react-toastify';
import {Box, Button, Typography, TextField} from '@mui/material';
import {CreateUserDTOWire} from '@vesna-task-manager/types';
import React, {SyntheticEvent, useContext, useState} from 'react';
import {
  GuestGuard,
  sessionContext,
  sessionService,
  userService,
} from '@vesna-task-manager/web';
import {SiteLogo} from '../../component/site-logo/SiteLogo';

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

  const onLogin = async (event: SyntheticEvent) => {
    event.preventDefault();
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
              <Typography variant="h4">Sign In</Typography>
            </div>
            <div style={{marginBottom: 10}}>
              <TextField
                id="email"
                label="Email"
                fullWidth
                variant="filled"
                value={newUserDTO.email}
                onChange={e =>
                  updateNewUserDTO({email: e?.target?.value ?? ''})
                }
              />
            </div>
            <div style={{marginBottom: 10}}>
              <TextField
                id="username"
                label="Username"
                fullWidth
                variant="filled"
                value={newUserDTO.username}
                onChange={e =>
                  updateNewUserDTO({username: e?.target?.value ?? ''})
                }
              />
            </div>
            <div style={{marginBottom: 10}}>
              <TextField
                id="password"
                label="Password"
                fullWidth
                variant="filled"
                value={newUserDTO.password}
                onChange={e =>
                  updateNewUserDTO({password: e?.target?.value ?? ''})
                }
              />
            </div>
            <div style={{marginBottom: 10}}>
              <TextField
                id="firstName"
                label="First Name"
                fullWidth
                variant="filled"
                value={newUserDTO.firstName}
                onChange={e =>
                  updateNewUserDTO({firstName: e?.target?.value ?? ''})
                }
              />
            </div>
            <div style={{marginBottom: 10}}>
              <TextField
                id="lastName"
                label="Last Name"
                fullWidth
                variant="filled"
                value={newUserDTO.firstName}
                onChange={e =>
                  updateNewUserDTO({lastName: e?.target?.value ?? ''})
                }
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
