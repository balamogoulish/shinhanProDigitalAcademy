import { useState } from 'react';
export default function TodoEdit(props) {
    const [edit, setEdit] = useState('');
    return (
        <div>
            <input
                style={{ border: 'none', backgroundColor: 'lightgray', padding: '0.5em' }}
                onChange={(e) => {
                    setEdit(e.target.value);
                }}
            />
            <button
                style={{ border: 'none', backgroundColor: 'gray', padding: '0.5em' }}
                onClick={() => {
                    props.editTodo(edit);
                }}
            >
                확인
            </button>
        </div>
    );
}
