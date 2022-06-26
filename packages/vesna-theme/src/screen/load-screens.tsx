import React from 'react';
import {setURL} from '@vesna-task-manager/web';
import {LoginScreen} from './login-screen/LoginScreen';
import {IndexScreen} from './index-screen/IndexScreen';
import {SignOutScreen} from './sign-out-screen/SignOutScreen';
import {DashboardScreen} from './dashboard-screen/DashboardScreen';
import {RegistrationScreen} from './registration-screen/RegistrationScreen';
import {TimeOverviewScreen} from './time-overview-screen/TimeOverviewScreen';
import {TasksByLabelScreen} from './tasks-by-label-screen/TasksByLabelScreen';
import {ActivityOverviewScreen} from './activity-overview-screen/ActivityOverviewScreen';

export function loadScreens() {
  setURL('', <IndexScreen />);
  setURL('login', <LoginScreen />);
  setURL('sign-out', <SignOutScreen />);
  setURL('register', <RegistrationScreen />);
  setURL('dashboard', <DashboardScreen />);
  setURL('tasks-list/:taskListID', <TasksByLabelScreen />);
  setURL('activity-overview', <ActivityOverviewScreen />);
  setURL('time-overview', <TimeOverviewScreen />);
}
