import axios from 'axios';

async function getBoard() {
  const response = await axios.get('http://localhost:3000/board');
  return response.data;
}
export { getBoard };
