import { useEffect, useState } from 'react';

export default function PostList(props) {
    return (
        <div
            className="postList-wrap-2"
            style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'whitesmoke',
                padding: '2em',
                borderRadius: '0.5',
                rowGap: '1em',
            }}
        >
            {props.postArr.map((el) => {
                const color = el.id == props.selectedId ? 'lightyellow' : 'white';
                const toggle = el.id == props.selectedId ? true : false;
                return (
                    <div
                        className="post-item"
                        key={el.id}
                        style={{ display: 'flex', flexDirection: 'column', rowGap: '0.5em', borderRadius: '0.5' }}
                    >
                        <div
                            style={{ padding: '2em', backgroundColor: color }}
                            className="post-view"
                            onClick={() => {
                                props.selectPost(el.id);
                            }}
                        >
                            {toggle ? (
                                <div>
                                    <button onClick={() => props.updatePost(el.id)}>UPDATE</button>
                                    <button onClick={() => props.deletePost(el.id)}>DELETE</button>
                                </div>
                            ) : null}

                            <div>
                                <h2>{el.title}</h2>
                            </div>
                            <div>{el.body}</div>
                        </div>
                        {toggle ? (
                            <div
                                className="post-upate"
                                style={{
                                    backgroundColor: 'lightpink',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    padding: '2em',
                                    rowGap: '0.5em',
                                }}
                            >
                                <input className="edit-title" style={{ border: 'none', padding: '0.5em' }} />
                                <input />
                            </div>
                        ) : null}
                    </div>
                );
            })}
        </div>
    );
}
