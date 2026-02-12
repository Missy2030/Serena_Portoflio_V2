// context/ThemeContext.tsx
import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext({
  darkMode: false,
  toggleTheme: () => {}
});

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', String(darkMode));
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme: () => setDarkMode(!darkMode) }}>
      {children}
    </ThemeContext.Provider>
  );
}