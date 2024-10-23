// MyPage
import { useContext } from 'react';
// import { themeContext } from '../contexts/themeContext';
import { useTheme } from '../contexts/themeContext';

export default function MyPage() {
  const { theme } = useTheme();

  return (
    <div
      style={
        theme === 'light'
          ? {
              backgroundColor: '#e9e9e9',
            }
          : { backgroundColor: '#000' }
      }
    >
      <div style={{ minHeight: 600 }}>MyPage</div>
    </div>
  );
}
