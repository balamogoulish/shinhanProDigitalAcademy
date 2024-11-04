import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { getBoard } from '../../lib/apis/board';

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
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>board</th>
          </tr>
        </thead>
        <tbody>
          {boardArr.map((el, id) => {
            return (
              <tr key={id}>
                <td>
                  <div>
                    <h3>{el.title}</h3>
                    <p>{el.author}</p>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
