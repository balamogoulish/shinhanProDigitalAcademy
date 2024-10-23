import Button from 'react-bootstrap/Button';
import react, { useEffect, useState } from 'react';

export default function ToDoApp() {
  const [input, setInput] = useState('');
  const [inputArr, setInputArr] = useState([]);
  const [color, setColor] = useState('');

  useEffect(() => {
    console.log(color);
  }, [color]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: color }}>
      <br />
      <h1>Todo App</h1>
      <br />
      <div>
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setInputArr([...inputArr, { text: input, color: color }]);
            console.log(inputArr);
          }}
        >
          입력
        </button>
      </div>
      <br />
      <div>
        <button
          style={{ background: 'red', border: 'none', width: '1em', height: '1em', borderRadius: '1.5em' }}
          value="red"
          onClick={(e) => {
            setColor(e.target.value);
          }}
        ></button>
        <button
          style={{ background: 'white', border: 'none', width: '1em', height: '1em', borderRadius: '1.5em' }}
          value="white"
          onClick={(e) => {
            setColor(e.target.value);
          }}
        ></button>
        <button
          style={{ background: 'lightgray', border: 'none', width: '1em', height: '1em', borderRadius: '1.5em' }}
          value="lightgray"
          onClick={(e) => {
            setColor(e.target.value);
          }}
        ></button>
        <button
          style={{ background: 'blue', border: 'none', width: '1em', height: '1em', borderRadius: '1.5em' }}
          value="blue"
          onClick={(e) => {
            setColor(e.target.value);
          }}
        ></button>
        <button
          style={{ background: 'black', border: 'none', width: '1em', height: '1em', borderRadius: '1.5em' }}
          value="black"
          onClick={(e) => {
            setColor(e.target.value);
          }}
        ></button>
      </div>
      <br />
      <h2>Todo Item</h2>
      {/** item을 map해서 돌려야 함 */}
      {inputArr.map((el) => {
        let color = el.color;
        console.log(color);
        return (
          <p key={el.text} style={{ width: '30em', background: color, textAlign: 'center' }}>
            {el.text}
          </p>
        );
      })}
    </div>
  );
}
