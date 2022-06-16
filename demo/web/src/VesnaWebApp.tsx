import React from 'react';
import {VesnaWeb} from '@vesna-task-manager/web';
import {loadScreens} from '@vesna-task-manager/theme';

loadScreens();

export function VesnaWebApp() {
  return <VesnaWeb />;
}
