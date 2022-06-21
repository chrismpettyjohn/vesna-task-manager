import React from 'react';
import {setURL} from '@vesna-task-manager/web';
import {LoginScreen} from './login-screen/LoginScreen';
import {IndexScreen} from './index-screen/IndexScreen';
import {SignOutScreen} from './sign-out-screen/SignOutScreen';
import {DashboardScreen} from './dashboard-screen/DashboardScreen';
import {RegistrationScreen} from './registration-screen/RegistrationScreen';
import {TasksByLabelScreen} from './tasks-by-label-screen/TasksByLabelScreen';

export function loadScreens() {
  setURL('', <IndexScreen />);
  setURL('login', <LoginScreen />);
  setURL('sign-out', <SignOutScreen />);
  setURL('registration', <RegistrationScreen />);
  setURL('dashboard', <DashboardScreen />);
  setURL('tasks-list/:taskListID', <TasksByLabelScreen />);
}
