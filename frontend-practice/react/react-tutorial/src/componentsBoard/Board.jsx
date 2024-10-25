import { useEffect, useState } from 'react';
import PostList from './PostList';

export default function Board() {
    const [postArr, setPostArr] = useState([]);
    const [selectedId, setSelectedId] = useState();

    //렌딩될 때, 게시글 불러오기
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setPostArr(json));
    }, []);

    const selectPost = (id) => {
        setSelectedId(id);
    };
    const deletePost = () => {
        console.log('deletePost:', selectedId);
    };
    const updatePost = (data) => {
        console.log('updatePost:', selectedId);
    };
    const addPost = (data) => {
        console.log('addPost', data);
    };
    return (
        <div
            className="board-root"
            style={{ maxWidth: '1000px', margin: 'auto', fontFamily: 'sans-serif', padding: '7em' }}
        >
            <div className="board-wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="board-tit" style={{ width: '100%', textAlign: 'center' }}>
                    {/** title */}
                    <h1>게시판</h1>
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
                <div>{/** write post */}</div>
            </div>
        </div>
    );
}
