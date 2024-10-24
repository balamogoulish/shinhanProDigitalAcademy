import { useState } from 'react';

export default function TodoInput(props) {
    const [input, setInput] = useState('');
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <input
                style={{ height: '30px', border: 'none', backgroundColor: props.color }}
                onChange={(e) => {
                    setInput(e.target.value);
                }}
            />
            <button
                style={{ height: '30px', border: 'none', backgroundColor: 'lightgray' }}
                onClick={() => {
                    props.addTodo(input);
                }}
            >
                입력
            </button>
        </div>
    );
}
