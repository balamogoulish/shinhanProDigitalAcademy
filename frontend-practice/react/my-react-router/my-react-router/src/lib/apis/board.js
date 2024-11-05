import axios from 'axios';

async function getBoard() {
  const response = await axios.get('http://localhost:3000/board');
  return response.data;
}

export async function fetchBoardDetail(boardId) {
  try {
    const res = await fetch(`http://localhost:3000/board/${boardId}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });
    return res.json();
  } catch (error) {
    console.error(error);
    return {};
  }
}
export { getBoard };
