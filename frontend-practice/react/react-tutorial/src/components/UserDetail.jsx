import { useState, useCallback, useEffect } from 'react';

export default function UserDetail() {
  const baseUrl = 'https://jsonplaceholder.typicode.com/users';

  const [userId, setUserId] = useState('');
  const [toggle, setToggle] = useState(false);

  const fetchUser = useCallback(() => {
    return fetch(`${baseUrl}/${userId}`).then((resp) => {
      return resp.json();
    });
  }, [userId]);

  useEffect(() => {
    fetchUser(userId).then((data) => {
      console.log(data);
    });
  }, [fetchUser]);

  return (
    <div>
      <button
        onClick={() => {
          setToggle((prev) => !prev);
        }}
      >
        {' '}
        버튼
      </button>
      <input
        type="text"
        value={userId}
        onChange={(e) => {
          setUserId(e.target.value);
        }}
      />
    </div>
  );
}
