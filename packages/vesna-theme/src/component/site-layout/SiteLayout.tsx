import React, {useContext} from 'react';
import {SiteLayoutProps} from './SiteLayout.types';
import {UserLayout} from '../user-layout/UserLayout';
import {sessionContext} from '@vesna-task-manager/web';
import {GuestLayout} from '../guest-layout/GuestLayout';

export function SiteLayout({children}: SiteLayoutProps) {
  const {session} = useContext(sessionContext);
  const SiteLayoutComponent: any = session ? UserLayout : GuestLayout;
  return <SiteLayoutComponent>{children}</SiteLayoutComponent>;
}
