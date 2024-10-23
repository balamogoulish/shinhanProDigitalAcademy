import 'bootstrap/dist/css/bootstrap.min.css';

import MyPage from './components2/MyPage';
import ThemeButton from './components2/ThemeButton';
import { ThemeProvider } from './contexts/themeContext';
import Button from 'react-bootstrap/Button';
import ToDoApp from './components/ToDoApp';

function App() {
  return (
    <>
      {/* <Button>버튼</Button>
      <ThemeProvider>
        <ThemeButton />
        <MyPage />
      </ThemeProvider> */}
      <ToDoApp />
    </>
  );
}

export default App;
