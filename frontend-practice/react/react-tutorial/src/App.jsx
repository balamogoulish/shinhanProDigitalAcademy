import MyPage from './components2/MyPage';
import ThemeButton from './components2/ThemeButton';
import { ThemeProvider } from './contexts/themeContext';

function App() {
  return (
    <>
      <ThemeProvider>
        <ThemeButton />
        <MyPage />
      </ThemeProvider>
    </>
  );
}

export default App;
