export default function TodoList(props) {
    return (
        <div style={{ margin: '0.5em', marginRight: '0' }}>
            {props.inputArr.map((el, id) => {
                let color = el.color;
                return (
                    <div key={id} style={{ display: 'flex', marginBottom: '5px' }}>
                        <p
                            style={{
                                width: '30em',
                                height: 'auto',
                                background: color,
                                textAlign: 'center',
                                alignContent: 'center',
                                borderTopLeftRadius: '1.5em',
                                borderBottomLeftRadius: '1.5em',
                                margin: '0',
                                cursor: 'pointer',
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
                                background: 'pink',
                                textAlign: 'center',
                                border: 'none',
                                padding: '0.5em',
                                color: 'black',
                                cursor: 'pointer',
                                borderTopRightRadius: '1.5em',
                                borderBottomRightRadius: '1.5em',
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
