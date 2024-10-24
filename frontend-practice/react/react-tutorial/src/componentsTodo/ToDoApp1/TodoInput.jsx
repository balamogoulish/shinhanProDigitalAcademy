import { useState } from 'react';

export default function TodoInput(props) {
    const [input, setInput] = useState('');
    return (
        <div>
            <input
                style={{ border: 'none', backgroundColor: props.color, padding: '0.5em' }}
                onChange={(e) => {
                    setInput(e.target.value);
                }}
            />
            <button
                style={{ border: 'none', backgroundColor: 'gray', padding: '0.5em' }}
                onClick={(e) => {
                    props.addTodo(input);
                }}
            >
                입력
            </button>
        </div>
    );
}
