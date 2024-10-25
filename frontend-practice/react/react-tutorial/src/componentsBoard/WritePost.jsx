/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function WritePost(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    return (
        <div
            className="post-update"
            style={{
                backgroundColor: 'whitesmoke',
                display: 'flex',
                flexDirection: 'column',
                padding: '2em',
                rowGap: '1em',
                borderRadius: '1em',
            }}
        >
            <div style={{ width: '100%', textAlign: 'center' }}>
                <h2>게시글 작성하기</h2>
            </div>
            <p style={{ margin: '0', fontWeight: 'bold' }}>Title</p>
            <input
                className="edit-title"
                type="text"
                style={{ border: 'none', padding: '0.5em' }}
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
            ></input>
            <p style={{ margin: '0', fontWeight: 'bold' }}>Description</p>
            <textarea
                className="edit-description"
                rows={4}
                style={{ border: 'none', padding: '0.5em' }}
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
            />
            <button
                style={{
                    border: 'none',
                    padding: '0.5em',
                    fontWeight: 'bold',
                    backgroundColor: 'lightgreen',
                    borderRadius: '0.5em',
                    cursor: 'pointer',
                }}
                onClick={() => {
                    props.addPost({ title, description });
                    setTitle('');
                    setDescription('');
                }}
            >
                게시하기
            </button>
        </div>
    );
}
