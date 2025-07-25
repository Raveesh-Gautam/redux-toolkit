import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';
import styles from './Todos.module.css';

const Todos = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Your Todos</div>
      {todos.map((todo) => (
        <li key={todo.id} className={styles.todoItem}>
          {todo.text}
          <button
            className={styles.button}
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            X
          </button>
        </li>
      ))}
    </div>
  );
};

export default Todos;
