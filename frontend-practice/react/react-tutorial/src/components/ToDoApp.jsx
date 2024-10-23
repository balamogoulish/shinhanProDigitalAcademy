import Button from 'react-bootstrap/Button';
import react, { useEffect, useState } from 'react';

export default function ToDoApp() {
  const [input, setInput] = useState('');
  const [inputArr, setInputArr] = useState([]);
  const [color, setColor] = useState('');
  const [newColor, setNewColor] = useState('');
  const [colorArr, setColorArr] = useState(['red', 'white', 'blue', 'black']);

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
          placeholder="할 일을 입력하세요"
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
      <div>
        <input
          type="color"
          placeholder="추가할 색상을 입력하세요"
          onChange={(e) => {
            setNewColor(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setColorArr([...colorArr, newColor]);
            console.log(colorArr);
          }}
        >
          입력
        </button>
      </div>
      <br />
      <div>
        {colorArr.map((el) => {
          return (
            <button
              style={{ background: el, border: 'none', width: '1em', height: '1em', borderRadius: '1.5em' }}
              value={el}
              key={el}
              onClick={(e) => {
                setColor(e.target.value);
              }}
            ></button>
          );
        })}
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
