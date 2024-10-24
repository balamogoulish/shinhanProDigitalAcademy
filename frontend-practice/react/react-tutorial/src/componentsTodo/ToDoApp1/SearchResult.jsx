export default function SearchResult(props) {
    return (
        <div>
            {props.searchResultArr.map((el) => {
                return (
                    <p
                        key={el.text}
                        style={{
                            width: '30em',
                            height: 'auto',
                            background: el.color,
                            textAlign: 'center',
                            borderRadius: '1.5em',
                            margin: '0.5em',
                            padding: '0.5em',
                        }}
                    >
                        {el.text}
                    </p>
                );
            })}
        </div>
    );
}
