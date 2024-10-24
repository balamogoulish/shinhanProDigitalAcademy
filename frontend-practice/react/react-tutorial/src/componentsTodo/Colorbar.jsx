import { useState } from 'react';

export default function Colorbar(props) {
    const [newColor, setNewColor] = useState('');
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <input
                    style={{ border: 'none' }}
                    type="color"
                    onClick={(e) => {
                        setNewColor(e.target.value);
                    }}
                />
                <button
                    style={{
                        paddingLeft: '5px',
                        background: 'lightgray',
                        border: 'none',
                        textAlign: 'center',
                    }}
                    onClick={() => {
                        props.addColor(newColor);
                    }}
                >
                    +
                </button>
            </div>

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
        </div>
    );
}
