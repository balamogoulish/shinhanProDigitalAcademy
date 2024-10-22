/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';

export default function CountComponent() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log('데이터 받아오기! (이 함수는 한 번만 실행됩니다.');
    return () => {
      console.log('메모리를 잡아먹으면 리소스 해제하는 함수를 return해주어야 합니다.');
    };
  }, []);
  useEffect(() => {
    console.log(`카운트가 증가할 때마다 실행됩니다! \n count: ${count}`);
    //state 변경에 대한 sideeffect 처리
    //dependency가 변경될 때마다,
  }, [count]);
  return (
    <div>
      <div>{count}</div>
      <button onClick={addCount}>+1</button>
    </div>
  );
}
