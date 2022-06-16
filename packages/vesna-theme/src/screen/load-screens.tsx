import React from 'react';
import {setURL} from '@vesna-task-manager/web';
import {LoginScreen} from './login-screen/LoginScreen';
import {IndexScreen} from './index-screen/IndexScreen';
import {DashboardScreen} from './dashboard-screen/DashboardScreen';
import {RegistrationScreen} from './registration-screen/RegistrationScreen';

export function loadScreens() {
  setURL('', <IndexScreen />);
  setURL('login', <LoginScreen />);
  setURL('registration', <RegistrationScreen />);
  setURL('dashboard', <DashboardScreen />);
}
