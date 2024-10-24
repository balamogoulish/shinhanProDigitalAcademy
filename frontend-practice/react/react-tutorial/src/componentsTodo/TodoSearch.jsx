import { useState } from 'react';

export default function TodoSearch(props) {
    const [search, setSearch] = useState('');
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                    type="text"
                    style={{ height: '30px', border: 'none', backgroundColor: 'whitesmoke' }}
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                />
                <button
                    style={{ height: '30px', border: 'none', backgroundColor: 'lightgray' }}
                    onClick={() => {
                        props.doSearch(search);
                    }}
                >
                    검색
                </button>
            </div>
        </div>
    );
}
