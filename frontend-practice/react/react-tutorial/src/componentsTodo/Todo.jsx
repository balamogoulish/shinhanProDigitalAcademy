import Colorbar from './Colorbar';
import TodoInput from './TodoInput';
import TodoList from './Todolist';
import { useState, useEffect } from 'react';
import TodoSearch from './TodoSearch';
import SearchResult from './SearchResult';
import TodoEdit from './TodoEdit';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Hangul from 'hangul-js';

export default function TodoProvider() {
    const [inputArr, setInputArr] = useState(JSON.parse(localStorage.getItem('todoArr')) || []);
    const [color, setColor] = useState('whitesmoke');
    const [colorArr, setColorArr] = useState(['whitesmoke']);
    const [searchResultArr, setSearchResultArr] = useState([]);
    const [editToggle, setEditToggle] = useState(false);
    const [selectedId, setSelectedId] = useState(0);
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
        inputArr.map((el) => {
            if (el.text.includes(data) === true) {
                temp.push(el);
            } else {
                let hangul = Hangul.disassemble(el.text);
                let cho = '';
                for (let i = 0; i < hangul.length - 1; i++) {
                    if (Hangul.isVowel(hangul[i + 1])) cho += hangul[i];
                }
                // console.log(cho);
                if (cho.includes(data) == true) {
                    temp.push(el);
                }
            }
        });
        setSearchResultArr(temp);
        if (searchResultArr.length == 0) {
            toast('Oops, there is no result...');
        }
    };
    const removeTodo = (id) => {
        setInputArr(inputArr.filter((el) => inputArr[id] != el));
    };
    const editTodo = (data) => {
        inputArr[selectedId] = { text: data, color: inputArr[selectedId].color };
        setInputArr([...inputArr]);
        setEditToggle((editTodo) => !editTodo);
    };
    const selectTodo = (id) => {
        setSelectedId(id);
        setEditToggle((editTodo) => !editTodo);
    };
    const addColor = (data) => {
        setColorArr([...colorArr, data]);
    };
    return (
        <div
            className="todo-app-wrap"
            style={{
                maxWidth: '760px',
                margin: 'auto',
                fontFamily: 'sans-serif',
                padding: '7em',
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
                                <Colorbar addColor={addColor} colorArr={colorArr} selectColor={selectColor} />
                            </div>
                        </div>

                        <div className="todo-list-wrap">
                            {/** Todo Item */}
                            <div className="todo-title">
                                <h2>Todo Item</h2>
                            </div>
                            <TodoList inputArr={inputArr} removeTodo={removeTodo} selectTodo={selectTodo} />
                        </div>
                        {editToggle ? (
                            <div className="todo-edit-wrap">
                                {/** Todo Edit */}
                                <TodoEdit editTodo={editTodo} />
                            </div>
                        ) : null}
                    </div>
                </div>
                <div className="todo-search-wrap" style={{ textAlign: 'center' }}>
                    {/** 검색창 */}
                    <div className="todo-search-title" style={{ paddingBottom: '10px' }}>
                        <h2>Todo search</h2>
                    </div>
                    <div
                        className="todo-search-input"
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingBottom: '10px',
                        }}
                    >
                        <TodoSearch doSearch={doSearch} />
                    </div>
                    <div className="todo-search-list">
                        <SearchResult searchResultArr={searchResultArr} />
                    </div>
                </div>
            </div>

            <ToastContainer
                position="top-right" // 알람 위치 지정
                autoClose={3000} // 자동 off 시간
                hideProgressBar={false} // 진행시간바 숨김
                closeOnClick // 클릭으로 알람 닫기
                rtl={false} // 알림 좌우 반전
                pauseOnFocusLoss // 화면을 벗어나면 알람 정지
                draggable // 드래그 가능
                pauseOnHover // 마우스를 올리면 알람 정지
                theme="light"
                // limit={1} // 알람 개수 제한
            />
        </div>
    );
}
