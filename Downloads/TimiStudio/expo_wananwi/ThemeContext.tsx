import React from 'react';

type AppTheme = {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
};

export default React.createContext<AppTheme>({
  theme: 'dark',
  toggleTheme: () => {},
});