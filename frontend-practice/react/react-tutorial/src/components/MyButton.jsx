/* eslint-disable prettier/prettier */
export default function MyButton1({ title, color, clickUrl }) {
  return (
    <a
      href={clickUrl}
      style={{
        backgroundColor: color,
        padding: 10,
        borderRadius: 6,
        color: 'white',
        textDecoration: 'none',
      }}
      target="_blank"
    >
      {title}
    </a>
  );
}

export function MyButton2({ title, color, clickUrl, style, ...rest }) {
  // const {title, color, clickUrl, ...rest} = props
  // react에서 event 핸들러 등록은 on<Event이름>이라는 props로 전달합니다.
  return (
    <button
      onClick={() => {
        window.open(clickUrl, '_blank');
      }}
      style={{
        ...style,
        backgroundColor: color,
        padding: 10,
        borderRadius: 6,
        color: 'white',
        textDecoration: 'none',
      }}
      {...rest}
    >
      {title}
    </button>
  );
}
