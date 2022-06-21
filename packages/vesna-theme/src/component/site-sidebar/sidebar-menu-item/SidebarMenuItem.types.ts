import {ReactNode} from 'react';

export interface SidebarMenuItemProps {
  link: string;
  icon: string;
  iconColor?: string;
  children: ReactNode;
}
