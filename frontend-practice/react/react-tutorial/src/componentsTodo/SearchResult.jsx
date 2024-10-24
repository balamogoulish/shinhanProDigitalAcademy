export default function SearchResult(props) {
    return (
        <div style={{ margin: '0' }}>
            {props.searchResultArr.map((el) => {
                return (
                    <p
                        key={el.text}
                        style={{
                            width: '33em',
                            height: 'auto',
                            background: el.color,
                            textAlign: 'center',
                            alignContent: 'center',
                            borderRadius: '1.5em',
                            margin: '0',
                            marginBottom: '5px',
                            padding: '0.3em',
                        }}
                    >
                        {el.text}
                    </p>
                );
            })}
        </div>
    );
}
