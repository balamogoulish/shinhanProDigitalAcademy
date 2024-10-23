import 'bootstrap/dist/css/bootstrap.min.css';

import MyPage from './components2/MyPage';
import ThemeButton from './components2/ThemeButton';
import { ThemeProvider } from './contexts/themeContext';
import Button from 'react-bootstrap/Button';
import ToDoApp from './components/ToDoApp';
import TodoInput from './componentsTodo/ToDoApp1/TodoInput';
import Todo from './componentsTodo/ToDoApp1/Todo';

function App() {
  return (
    <>
      {/* <Button>버튼</Button>
      <ThemeProvider>
        <ThemeButton />
        <MyPage />
      </ThemeProvider> */}
      {/* <ToDoApp /> */}
      <Todo />
    </>
  );
}

export default App;
