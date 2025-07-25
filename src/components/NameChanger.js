import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../features/inputSlice";
import styles from "./NameChanger.module.css";

const NameChanger = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const nameFromStore = useSelector((state) => state.inputData.name);

  const handleNameChange = () => {
    if (nameFromStore !== name.trim()) {
      dispatch(changeName(name));
    }
    alert('name changed');
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        name="uname"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
        placeholder="Enter new name"
      />
      <button onClick={handleNameChange} className={styles.button}>
        Change Name
      </button>
      <p className={styles.label}>Current: {nameFromStore}</p>
    </div>
  );
};

export default NameChanger;
