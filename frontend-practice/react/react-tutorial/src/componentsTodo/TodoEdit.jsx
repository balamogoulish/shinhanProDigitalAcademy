import { useState } from 'react';
export default function TodoEdit(props) {
    const [edit, setEdit] = useState('');
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <input
                style={{ height: '30px', border: 'none', backgroundColor: 'whitesmoke' }}
                onChange={(e) => {
                    setEdit(e.target.value);
                }}
            />
            <button
                style={{ height: '30px', border: 'none', backgroundColor: 'lightgray' }}
                onClick={() => {
                    props.editTodo(edit);
                }}
            >
                확인
            </button>
        </div>
    );
}
