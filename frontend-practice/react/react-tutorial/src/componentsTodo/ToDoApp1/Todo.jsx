import Colorbar from './Colorbar';
import TodoInput from './TodoInput';
import TodoList from './Todolist';
import { useState, useEffect } from 'react';
import TodoSearch from './TodoSearch';
import SearchResult from './SearchResult';

export default function Todo() {
    const [inputArr, setInputArr] = useState(JSON.parse(localStorage.getItem('todoArr')));
    const [color, setColor] = useState('white');
    const [colorArr, setColorArr] = useState(['red', 'white', 'blue', 'black']);
    const [searchResultArr, setSearchResultArr] = useState([]);
    useEffect(() => {
        localStorage.setItem('todoArr', JSON.stringify(inputArr));
    }, [inputArr]);
    const addTodo = (text) => {
        setInputArr([...inputArr, { text, color }]);
    };
    const selectColor = (color) => {
        setColor(color);
    };
    const doSearch = (data) => {
        let temp = [];
        inputArr.map((el, i) => {
            if (el.text.includes(data) === true) {
                temp.push(el);
            }
            setSearchResultArr(temp);
        });
    };
    return (
        <div
            className="todo-app-wrap"
            style={{
                maxWidth: '760px',
                margin: 'auto',
                marginTop: '5em',
                fontFamily: 'sans-serif',
                padding: '10em',
            }}
        >
            <div
                className="todo-app"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    margin: 'auto',
                    rowGap: '3em',
                }}
            >
                <div className="title">
                    <h1>Todo App</h1>
                </div>
                <div className="todo-wrap" style={{ textAlign: 'center' }}>
                    <div className="todo-list">
                        <div className="add-todo" style={{ paddingBottom: '20px' }}>
                            <div className="todo-input-wrap" style={{ flexDirection: 'row', paddingBottom: '10px' }}>
                                {/** 입력 */}
                                <TodoInput addTodo={addTodo} color={color} />
                            </div>
                            <div className="todo-color-wrap">
                                {/** 색상 선택 */}
                                <Colorbar colorArr={colorArr} selectColor={selectColor} />
                            </div>
                        </div>

                        <div className="todo-list-wrap">
                            {/** Todo Item */}
                            <div className="todo-title" style={{ paddingBottom: '10px' }}>
                                <h2>Todo Item</h2>
                            </div>
                            <TodoList inputArr={inputArr} />
                        </div>
                    </div>
                </div>
                <div className="todo-search-wrap" style={{ textAlign: 'center' }}>
                    {/** 검색창 */}
                    <div className="todo-search-title" style={{ paddingBottom: '10px' }}>
                        <h2>Todo search</h2>
                    </div>
                    <div className="todo-search-input" style={{ flexDirection: 'row', paddingBottom: '10px' }}>
                        <TodoSearch doSearch={doSearch} />
                    </div>
                    <div className="todo-search-list">
                        <SearchResult searchResultArr={searchResultArr} />
                    </div>
                </div>
            </div>
        </div>
    );
}
