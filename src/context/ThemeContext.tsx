import React, { createContext, useContext, useState, ReactNode } from 'react';
import { themeClass } from '../styles/theme';
import { ThemeType } from '../types/ThemeInterface';

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const { light, dark } = themeClass;
    const [theme, setTheme] = useState<ThemeType>(light);

    const toggleTheme = () => setTheme(theme ===  light ? dark : light);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
