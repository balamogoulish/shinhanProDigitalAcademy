import { useEffect, useState } from 'react';

export default function main() {
    const [board, setBoard] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/board`)
            .then((response) => response.json())
            .then((json) => {
                setBoard([...json]);
                console.log(board);
            });
    }, []);
    useEffect(() => {
        console.log(board);
    }, [board]);

    return (
        <div>
            <h1>Board Data</h1>
            <div>
                {board.map((el) => {
                    return (
                        <div key={el.id}>
                            <div>
                                <h2>board title: {el.title}</h2>
                                <p>board content: {el.content}</p>
                                <p>author: {el.author}</p>
                            </div>
                            <div>
                                <h3>Comments</h3>
                                {el.comments.map((co) => {
                                    return (
                                        <div key={co.id}>
                                            <p>제목: {co.title}</p>
                                            <p>내용: {co.content}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
