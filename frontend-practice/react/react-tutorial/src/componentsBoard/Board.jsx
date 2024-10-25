import { useEffect, useState } from 'react';
import PostList from './PostList';
import { v4 as uuid4 } from 'uuid';
import WritePost from './WritePost';

export default function Board() {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    const [postArr, setPostArr] = useState([]);
    const [selectedId, setSelectedId] = useState(-1);

    //렌딩될 때, 게시글 불러오기
    useEffect(() => {
        fetch(`${baseUrl}/posts`)
            .then((response) => response.json())
            .then((json) => {
                setPostArr(json);
            });
    }, []);

    const selectPost = (id) => {
        if (selectedId == id) {
            setSelectedId(-1);
        } else {
            setSelectedId(id);
        }
    };
    const deletePost = () => {
        setPostArr(postArr.filter((key) => key.id !== selectedId));
    };
    const updatePost = (data) => {
        postArr.map((el, id) => {
            if (el.id == selectedId) {
                postArr[id] = { id: selectedId, userId: -1, body: data.description, title: data.title };
            }
        });
        setPostArr([...postArr]);
    };
    const addPost = (data) => {
        setPostArr([{ id: uuid4(), userId: -1, body: data.description, title: data.title }, ...postArr]);
    };

    return (
        <div
            className="board-root"
            style={{ maxWidth: '1000px', margin: 'auto', fontFamily: 'sans-serif', padding: '7em' }}
        >
            <div
                className="board-wrap"
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '1em' }}
            >
                <div className="board-tit" style={{ width: '100%', textAlign: 'center' }}>
                    {/** title */}
                    <h1>게시판</h1>
                </div>
                <div className="post-write-wrap" style={{ width: '100%' }}>
                    {/** write post */}
                    <WritePost addPost={addPost} />
                </div>
                <div className="postList-wrap">
                    {/** read post */}
                    <PostList
                        selectPost={selectPost}
                        postArr={postArr}
                        selectedId={selectedId}
                        updatePost={updatePost}
                        deletePost={deletePost}
                    />
                </div>
            </div>
        </div>
    );
}
