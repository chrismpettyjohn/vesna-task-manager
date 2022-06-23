import {ReactNode} from 'react';

export interface GuestLayoutProps {
  children: ReactNode;
  onSubmit(): void;
}
