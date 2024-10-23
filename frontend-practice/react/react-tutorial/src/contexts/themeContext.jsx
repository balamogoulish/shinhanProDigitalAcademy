import { createContext, useState, useContext, useCallback } from 'react';

const themeContext = createContext();

export function ThemeProvider(props) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  return (
    <>
      <themeContext.Provider value={{ theme, toggleTheme }}>{props.children}</themeContext.Provider>
    </>
  );
}
export function useTheme() {
  const { theme, toggleTheme } = useContext(themeContext);
  return { theme, toggleTheme };
}
