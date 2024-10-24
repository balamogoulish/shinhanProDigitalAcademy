export default function Colorbar(props) {
    return (
        <div>
            {props.colorArr.map((el) => {
                return (
                    <button
                        style={{
                            paddingLeft: '5px',
                            background: el,
                            border: 'none',
                            width: '1em',
                            height: '1em',
                            borderRadius: '1.5em',
                        }}
                        value={el}
                        key={el}
                        onClick={() => {
                            props.selectColor(el);
                        }}
                    ></button>
                );
            })}
        </div>
    );
}
