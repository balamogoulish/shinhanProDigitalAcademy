/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function PostList(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    return (
        <div
            className="postList-wrap-2"
            style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'whitesmoke',
                borderRadius: '1em',
                padding: '2em',
                rowGap: '2em',
            }}
        >
            {props.postArr.map((el) => {
                const toggle = el.id == props.selectedId ? true : false;
                return (
                    <div
                        className="post-item"
                        key={el.id}
                        style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', rowGap: '0.5em' }}
                    >
                        <div
                            style={{ padding: '2em', backgroundColor: 'white' }}
                            className="post-view"
                            onClick={() => {
                                props.selectPost(el.id);
                            }}
                        >
                            {toggle ? (
                                <div
                                    className="edit-delete-post"
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        gap: '0.5em',
                                        justifyContent: 'right',
                                    }}
                                >
                                    <button
                                        style={{
                                            border: 'none',
                                            padding: '0.5em',
                                            fontWeight: 'bold',
                                            backgroundColor: 'lightblue',
                                            borderRadius: '0.5em',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() => {
                                            props.updatePost({ title, description });
                                        }}
                                    >
                                        수정하기
                                    </button>
                                    <button
                                        style={{
                                            border: 'none',
                                            padding: '0.5em',
                                            fontWeight: 'bold',
                                            backgroundColor: 'lightpink',
                                            borderRadius: '0.5em',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() => props.deletePost(el.id)}
                                    >
                                        삭제하기
                                    </button>
                                </div>
                            ) : null}

                            <div>
                                <h2>{el.title}</h2>
                            </div>
                            <div>{el.body}</div>
                        </div>
                        {toggle ? (
                            <div
                                className="post-update"
                                style={{
                                    backgroundColor: 'lightblue',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    padding: '2em',
                                    rowGap: '0.5em',
                                }}
                            >
                                <p style={{ margin: '0', fontWeight: 'bold' }}>Title</p>
                                <input
                                    className="edit-title"
                                    type="text"
                                    style={{ border: 'none', padding: '0.5em' }}
                                    onChange={(e) => {
                                        setTitle(e.target.value);
                                    }}
                                />
                                <p style={{ margin: '0', fontWeight: 'bold' }}>Description</p>
                                <textarea
                                    className="edit-description"
                                    rows={4}
                                    style={{ border: 'none', padding: '0.5em' }}
                                    onChange={(e) => {
                                        setDescription(e.target.value);
                                    }}
                                />
                            </div>
                        ) : null}
                    </div>
                );
            })}
        </div>
    );
}
