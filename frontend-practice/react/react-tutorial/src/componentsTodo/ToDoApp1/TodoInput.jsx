import { useState } from 'react';

export default function TodoInput(props) {
  const [input, setInput] = useState('');
  return (
    <div>
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          props.addTodo(input);
        }}
      >
        입력
      </button>
    </div>
  );
}
