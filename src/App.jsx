import styles from './app.module.css'
import Todo from './components/Todo'
import { useSelector, useDispatch } from 'react-redux';
import { createTodo, updateTodo, deleteAllTodo, deleteSelectedTodo, getAllTodos } from './redux';
import { useEffect, useState } from 'react';
const App = () => {
  const todos = useSelector(store => store.todos);
  const dispatch = useDispatch();
  const [inputBoxVal, setInputBoxVal] = useState('');
  const [idOfEditTodo, setIdOfEditTodo] = useState('');

  const addNewTodo = () => {
    const inputEl = document.querySelector(`.${styles.inputContainer} input`);
    inputBoxVal && dispatch(createTodo(inputBoxVal));
    setInputBoxVal('');
    inputEl.focus();
  }

  const editInputBox = (id) => {
    const inputEl = document.querySelector(`.${styles.inputContainer} input`);
    setInputBoxVal(todos.find(todo => todo.id === id).message);
    setIdOfEditTodo(`${id}`)
    inputEl.focus();
  }

  const saveUpdatedTodo = () => {
    inputBoxVal && dispatch(updateTodo(Number(idOfEditTodo), { ...todos.find(todo => todo.id === Number(idOfEditTodo)), message: inputBoxVal }));
    inputBoxVal && setIdOfEditTodo('');
    setInputBoxVal('');
  }

  useEffect(() => {
    dispatch(getAllTodos())
  }, [])

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Daily To Do List</h1>
      <div className={styles.inputContainer}>
        <input type="text" placeholder='Add new list item' value={inputBoxVal} onChange={(e) => setInputBoxVal(e.target.value)} />
        <button onClick={idOfEditTodo ? saveUpdatedTodo : addNewTodo}>{idOfEditTodo ? "Save" : "Add"}</button>
      </div>
      <div className={styles.todos}>

        {todos.length == 0 ? <p>You don't have any task here.</p> : todos.map((todo, key) => <Todo message={todo.message} id={todo.id} key={key} isSelected={todo.isSelected} editInputBox={editInputBox} />)}
      </div>
      <div className={styles.bottom}>
        <span>{todos.filter(todo => todo.isSelected).length} item selected</span>
        <span onClick={todos.filter(todo => todo.isSelected).length == 0 ? () => dispatch(deleteAllTodo()) : () => dispatch(deleteSelectedTodo())}>{todos.filter(todo => todo.isSelected).length == 0 ? "Clear All" : "Clear Selected"}</span>
      </div>
    </div>
  )
}

export default App