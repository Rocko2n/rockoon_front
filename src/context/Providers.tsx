// Providers.js
import React from 'react';
import { AuthProvider } from './AuthContext';
import { ThemeProvider } from './ThemeContext';
interface ProvidersProps {
  children: React.ReactNode;
}
const Providers : React.FC<ProvidersProps> = ({ children }) => (
  <AuthProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </AuthProvider>
);

export default Providers;
