export default function TodoList(props) {
  return (
    <div>
      {props.inputArr.map((el) => {
        let color = el.color;
        console.log(color);
        return (
          <p key={el.text} style={{ width: '30em', background: color, textAlign: 'center' }}>
            {el.text}
          </p>
        );
      })}
    </div>
  );
}
