import React, {useState} from 'react';
import {themeContext} from './ThemeContext';
import {ThemeContextProviderProps} from './ThemeContext.types';

export function ThemeContextProvider({children}: ThemeContextProviderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [sidebarWidth, setSidebarWidth] = useState(0);

  const toggleSidebar = () => {
    setIsSidebarOpen(_ => !_);
  };

  return (
    <themeContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar,
        sidebarWidth,
        setSidebarWidth: (newValue: number) => setSidebarWidth(newValue),
      }}
    >
      {children}
    </themeContext.Provider>
  );
}
