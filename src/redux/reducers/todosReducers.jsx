import { CREATE_TODO, UPDATE_TODO, DELETE_ALL_TODOS, DELETE_SELECTED_TODOS, GET_ALL_TODOS } from '../constant';

let initialState = []

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TODO:
            return setTodosInLocalStorage([...state, { id: state.length, message: action.payload, isSelected: false }]);
        case UPDATE_TODO:
            let todos = [...state];
            todos[action.payload.id] = action.payload.todo;
            return setTodosInLocalStorage([...todos])
        case DELETE_ALL_TODOS:
            return setTodosInLocalStorage([]);
        case DELETE_SELECTED_TODOS:
            return setTodosInLocalStorage([...state.filter(todo => !todo.isSelected).map((todo, index) => { todo.id = index; return todo; })]);
        case GET_ALL_TODOS:
            return localStorage.getItem("MyTodos") ? JSON.parse(localStorage.getItem("MyTodos")) : [];
        default:
            return state;
    }
}

const setTodosInLocalStorage = (todos) => {
    localStorage.setItem("MyTodos", JSON.stringify(todos));
    return todos;
}

export default todoReducer;