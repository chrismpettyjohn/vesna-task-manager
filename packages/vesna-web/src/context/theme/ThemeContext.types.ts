import {ReactNode} from 'react';

export interface ThemeContext {
  isSidebarOpen: boolean;
  sidebarWidth: number;
  toggleSidebar(): void;
  setSidebarWidth(newValue: number): void;
}

export const defaultThemeContext: ThemeContext = {
  isSidebarOpen: false,
  sidebarWidth: 0,
  toggleSidebar() {},
  setSidebarWidth(newValue: number) {},
};

export interface ThemeContextProviderProps {
  children: ReactNode;
}
