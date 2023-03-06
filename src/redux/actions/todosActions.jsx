import { CREATE_TODO, UPDATE_TODO, DELETE_ALL_TODOS, DELETE_SELECTED_TODOS, GET_ALL_TODOS } from '../constant';

export const createTodo = (message) => ({
    type: CREATE_TODO,
    payload: message
})

export const updateTodo = (id, todo) => ({
    type: UPDATE_TODO,
    payload: { id, todo }
})

export const deleteAllTodo = () => ({ type: DELETE_ALL_TODOS })
export const deleteSelectedTodo = () => ({ type: DELETE_SELECTED_TODOS })
export const getAllTodos = () => ({ type: GET_ALL_TODOS })