export default function TodoList(props) {
    return (
        <div>
            {props.inputArr.map((el, id) => {
                let color = el.color;
                return (
                    <div key={id} style={{ display: 'flex' }}>
                        <p
                            style={{
                                width: '30em',
                                height: 'auto',
                                background: color,
                                textAlign: 'center',
                                alignContent: 'center',
                                borderRadius: '1.5em',
                                margin: '0.5em',
                                padding: '0.5em',
                            }}
                            onClick={() => {
                                props.removeTodo(id);
                            }}
                        >
                            {el.text}
                        </p>
                        <button
                            style={{
                                width: '3em',
                                height: 'auto',
                                background: 'gray',
                                textAlign: 'center',
                                borderRadius: '1.5em',
                                border: 'none',
                                padding: '0.5em',
                                margin: '0.5em',
                            }}
                            onClick={() => {
                                props.selectTodo(id);
                            }}
                        >
                            수정
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
