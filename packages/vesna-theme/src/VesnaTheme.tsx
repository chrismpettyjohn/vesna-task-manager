import React from 'react';
import './public/css/VesnaTheme.scss';
import {VesnaThemeProps} from './VesnaTheme.types';
import {SiteLayout} from './component/site-layout/SiteLayout';

export function VesnaTheme({children}: VesnaThemeProps) {
  return <SiteLayout>{children}</SiteLayout>;
}
