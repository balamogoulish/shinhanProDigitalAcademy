import { useState, useContext } from 'react';
// import { themeContext } from '../contexts/themeContext';
import { useTheme } from '../contexts/themeContext';

export default function ThemeButton({ onChangeTheme }) {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>현재 테마: {theme}</button>;
}
