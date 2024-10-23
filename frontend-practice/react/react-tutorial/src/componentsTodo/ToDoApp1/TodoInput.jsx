export default function TodoInput() {
  const [input, setInput] = useState('');
  const [inputArr, setInputArr] = useState([]);
  return (
    <div>
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setInputArr([...inputArr, { text: input, color: color }]);
          console.log(inputArr);
        }}
      >
        입력
      </button>
    </div>
  );
}
