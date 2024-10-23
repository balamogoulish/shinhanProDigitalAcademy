import Colorbar from './Colorbar';
import TodoInput from './TodoInput';
import TodoList from './Todolist';
import react, { createContext, useState, createContext, useContext } from 'react';

export const inputContext = createContext();

export default function Todo() {
  const [input, setInput] = useState('');
  const [inputArr, setInputArr] = useState([]);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: color }}>
      <br />
      <h1>Todo App</h1>
      <br />
      {/** TodoInput */}
      <TodoInput />
      {/** Colorbar */}
      <Colorbar />
      {/** TodoList */}
      <TodoList />
    </div>
  );
}
