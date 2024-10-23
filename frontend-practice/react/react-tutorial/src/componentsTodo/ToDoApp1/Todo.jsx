import Colorbar from './Colorbar';
import TodoInput from './TodoInput';
import TodoList from './Todolist';
import { useState } from 'react';

export default function Todo() {
  const [inputArr, setInputArr] = useState([]);
  const [color, setColor] = useState('');
  const [colorArr, setColorArr] = useState(['red', 'white', 'blue', 'black']);

  const addTodo = (text) => {
    setInputArr([...inputArr, { text, color }]);
    console.log(inputArr);
  };
  const selectColor = (color) => {
    setColor(color);
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: color }}>
      <br />
      <h1>Todo App</h1>
      <br />
      <div>
        {/** 입력 */}
        <TodoInput addTodo={addTodo} />
      </div>
      <br />
      <div>
        {/** 색상 선택 */}
        <Colorbar colorArr={colorArr} selectColor={selectColor} />
      </div>
      <br />
      {/** item을 map해서 돌려야 함 */}
      <h2>Todo Item</h2>
      <TodoList inputArr={inputArr} />
    </div>
  );
}
