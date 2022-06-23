import {createContext} from 'react';
import {defaultThemeContext, ThemeContext} from './ThemeContext.types';

export const themeContext = createContext<ThemeContext>(defaultThemeContext);
