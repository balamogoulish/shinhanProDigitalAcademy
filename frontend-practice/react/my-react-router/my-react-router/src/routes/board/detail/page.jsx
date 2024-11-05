import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBoardDetail } from '../../../lib/apis/board';

export default function BoardDetailPage() {
  // const params = useParams();
  // console.log(params);
  const { boardId } = useParams();
  // console.log(boardId);

  const [board, setBoard] = useState({ title: '', content: '' });

  useEffect(() => {
    fetchBoardDetail(boardId).then((data) => {
      setBoard(data);
    });
  }, [boardId]);

  return (
    <div>
      <h3>{board.title}</h3>
      <div className="my-3">{board.content}</div>
    </div>
  );
}
