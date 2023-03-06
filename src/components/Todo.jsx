import { useDispatch } from 'react-redux'
import { updateTodo } from '../redux';
import styles from './Todo.module.css'


const todo = ({ id, isSelected, message, editInputBox }) => {
    const dispatch = useDispatch();
    const editTodo = () => {
        editInputBox(id)
    }
    const clickHandler = () => {
        dispatch(updateTodo(id, { id, message, isSelected: !isSelected }));
    }
    return (
        <div className={styles.todo}>
            <input type="checkbox" id={`checkbox${id}`} checked={isSelected} onChange={clickHandler} />
            <label htmlFor={`checkbox${id}`}>{message}</label>
            <button onClick={editTodo}>&#128393;</button>
        </div>
    )
}

export default todo