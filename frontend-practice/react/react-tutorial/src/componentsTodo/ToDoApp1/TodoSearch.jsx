import { useState } from 'react';

export default function TodoSearch(props) {
    const [search, setSearch] = useState('');
    return (
        <div>
            <div>
                <input
                    type="text"
                    style={{ border: 'none', backgroundColor: 'lightgray', padding: '0.5em' }}
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                />
                <button
                    style={{ border: 'none', backgroundColor: 'gray', padding: '0.5em' }}
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
