import todoReducer from "./reducers/todosReducers";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todos: todoReducer
})

export default rootReducer;