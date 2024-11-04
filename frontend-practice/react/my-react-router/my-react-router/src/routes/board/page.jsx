import React, { useState, useEffect } from 'react';
import { getBoard } from '../../lib/apis/board';
import ListGroup from 'react-bootstrap/ListGroup';

export default function BoardListPage() {
  const [boardArr, setBoardArr] = useState([]);

  useEffect(() => {
    const bringBoard = async () => {
      const data = await getBoard();
      if (data) {
        setBoardArr(data);
      }
    };
    bringBoard();
  }, []);

  return (
    <>
      <h1>My Borad</h1>
      <ListGroup>
        {boardArr.map((el, id) => {
          return <ListGroup.Item key={id}>{el.title}</ListGroup.Item>;
        })}
      </ListGroup>
    </>
  );
}
