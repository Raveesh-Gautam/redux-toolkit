import React, { useState } from "react";
import styles from "./AddTodo.module.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
const AddTodo = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;
    dispatch(addTodo(todo));
    // dispatch k andar reducer ko call karte hai
    setTodo("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;

//  store
//  reducers
// useSelector     useDispatch
