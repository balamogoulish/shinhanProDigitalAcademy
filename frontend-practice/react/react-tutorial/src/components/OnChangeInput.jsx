/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';

export default function OnChangeInput() {
  const [userInput, setUserInput] = useState('');
  return (
    <div>
      <input
        type="text"
        placeholder="글자를 입력하세요"
        value={userInput}
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      />
      <br />
      입력된 글자: {userInput}
    </div>
  );
}

//연습문제 1
function SumOfNums() {
  const [sum, setSum] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  useEffect(() => {
    setSum(parseInt(num1) + parseInt(num2));
  }, [num1, num2]);

  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={(e) => {
          setNum1(e.target.value);
        }}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => {
          setNum2(e.target.value);
        }}
      />
      <br />
      숫자의 합: {sum}
    </div>
  );
}

//연습문제2
function ForbiddenWords() {
  const [dict, setDict] = useState([]);
  const [word, setWord] = useState('');
  const [data, setData] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  return (
    <div>
      <div>
        {' '}
        {/* 금지어 설정 */}
        <input
          type="text"
          onChange={(e) => {
            setWord(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setDict([word, ...dict]);
          }}
        >
          금지어 추가
        </button>
        <br />
        금지어:
        <ul>
          {dict.map((el) => {
            return <li key={el}>{el}</li>;
          })}
        </ul>
      </div>

      <div>
        {/** 금지어 필터링 */}
        <input
          type="text"
          onChange={(e) => {
            setData(e.target.value);
          }}
        />
        <button
          onClick={() => {
            let temp = data;
            for (let d in dict) {
              if (data.indexOf(dict[d]) != -1) {
                temp = temp.replace(dict[d], '**');
                setFilteredData([temp, ...filteredData]);
              }
            }
          }}
        >
          필터링
        </button>
        <br />
        필터링된 문장:
        {filteredData.map((el) => {
          return <li key={el}>{el}</li>;
        })}
      </div>
    </div>
  );
}

export { SumOfNums, ForbiddenWords };
