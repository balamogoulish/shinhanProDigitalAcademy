/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';
import axios from 'axios';

/**
 * 추가 연습문제(1)
 * 버튼을 클릭할 때마다 “ON”과 “OFF”로 상태가 바뀌는 토글 버튼을 만드세요. 상태가 변경될 때마다 useEffect를 사용해 콘솔에 메시지를 출력하세요.
 * (설명)
 * 버튼의 텍스트는 상태에 따라 “ON” 또는 “OFF”로 변경됩니다.
 * 상태가 변경될 때마다 useEffect를 사용해 콘솔에 “Toggle is ON” 또는 “Toggle is OFF” 메시지를 출력합니다.
 * */
function OnAndOff() {
  const [isOn, setIsOn] = useState(true);

  useEffect(() => {
    isOn ? console.log('Toggle is ON') : console.log('Toggle is OFF');
  }, [isOn]);
  return (
    <button
      onClick={() => {
        setIsOn(!isOn);
      }}
    >
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}

/**추가 연습문제(2)
 * 문제: 컴포넌트가 처음 렌더링될 때 https://jsonplaceholder.typicode.com/users 에서 데이터를 가져와 화면에 표시하세요. useEffect를 사용해 데이터 fetch가 한 번만 실행되도록 하세요.
 * → (username과 email만 렌더링 되도록)
 * 설명:
 * 같은 간단한 공개 API를 사용합니다.
 * 데이터를 받아와 div에 표시합니다.
 * 컴포넌트가 처음 마운트될 때만 데이터를 가져오도록 useEffect를 설정합니다.
 * */
function BringUserInfo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = 'https://jsonplaceholder.typicode.com/users';
      const response = await axios.get(url);
      let userInfo = [];
      for (let d in response.data) {
        const user = response.data[d];
        const username = user.username;
        const email = user.email;
        userInfo.push({
          username,
          email,
        });
      }
      setData(userInfo);
    }
    fetchData();
  }, []);
  return (
    <div>
      <ul>
        {data.map((elem, idx) => {
          return (
            <li key={idx}>
              이름: {elem.username}/ 이메일: {elem.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/**
 * 추가 연습문제(3)
 * 문제: “Start” 버튼을 누르면 타이머가 시작되고, “Stop” 버튼을 누르면 타이머가 멈추며, “Reset” 버튼을 누르면 타이머가 0으로 초기화되는 타이머를 만드세요. 타이머 기능은 useEffect를 사용해 구현하세요.
 * 설명:
 * 현재 타이머 값을 0부터 시작해 표시합니다.
 * “Start” 버튼을 누르면 타이머가 1초마다 증가하고, “Stop” 버튼을 누르면 타이머가 멈춥니다.
 * “Reset” 버튼을 누르면 타이머가 0으로 초기화됩니다.
 * 타이머가 실행될 때마다 useEffect를 사용해 매초 타이머 값을 업데이트합니다.
 */
function StopWatch() {
  //startBtn 클릭 => setTimeout 1초마다 time이 1씩 증가하는 무한 루프
  //stopBtn 클릭 => setTimeout clear
  //resetBtn 클릭 = >setTimeout clear & time을 0으로 초기화
  const [data, setData] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setData((data) => data + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <button
        onClick={() => {
          setIsRunning(false);
          setData(0);
        }}
      >
        Reset
      </button>
      시간: {data}
    </div>
  );
}

/**
 * 추가연습문제(4)
 * 문제: 사용자의 입력된 시간에 따라 타이머가 실행되도록 하세요.
 * → 타이머가 종료되면, 타이머가 끝났다는 메시지를 alert로 화면에 띄우는 기능을 구현하세요.
 * → useEffect를 사용해 타이머가 설정된 시간이 끝났을 때 메시지를 표시합니다.
 * 설명:
 * 타이머가 시작되면 10초 후 자동으로 종료되도록 설정합니다.
 * 타이머가 끝나면 “타이머 종료” 메시지를 화면에 표시합니다.
 * useEffect를 사용해 타이머가 종료되었는지 체크합니다.
 */

function Timer() {
  const [time, setTime] = useState(0);
  const [input, setInput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      setTime(0);
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (time == parseInt(input)) {
      setIsRunning(false);
      alert('타이머 종료');
    }
  }, [time]);

  return (
    <div>
      <input onChange={(e) => setInput(e.target.value)} />
      <button
        onClick={() => {
          setIsRunning(true);
        }}
      >
        타이머 시작
      </button>
      <br />
      현재 시간: {time}
    </div>
  );
}

export { OnAndOff, BringUserInfo, StopWatch, Timer };
