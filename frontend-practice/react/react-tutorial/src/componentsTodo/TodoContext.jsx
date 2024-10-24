import Colorbar from './Colorbar';
import TodoInput from './TodoInput';
import TodoList from './Todolist';
import { useState, useEffect, createContext, useContext } from 'react';
import TodoSearch from './TodoSearch';
import SearchResult from './SearchResult';
import TodoEdit from './TodoEdit';

const todoContext = createContext();

export default function TodoProvider(props) {
    const [inputArr, setInputArr] = useState(JSON.parse(localStorage.getItem('todoArr')) || []);
    const [color, setColor] = useState('lightgray');
    const [colorArr, setColorArr] = useState(['red', 'lightgray', 'blue', 'black']);
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
            }
            setSearchResultArr(temp);
        });
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
    return (
        <>
            <todoContext.Provider value={{ todoList, addTodo, removeTodo, editTodo }}>
                {props.children}
            </todoContext.Provider>
        </>
    );
}

export function useTodo() {
    const { todoList, addTodo, removeTodo, editTodo } = useContext(todoContext);
    return { todoList, addTodo, removeTodo, editTodo };
}
