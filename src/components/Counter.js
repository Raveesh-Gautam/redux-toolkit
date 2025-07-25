import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter } from "../features/counterSlice";
import styles from "./Counter.module.css"; 

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Counter: {count}</h2>
      <div className={styles.buttonGroup}>
        <button className={styles.button} onClick={() => dispatch(incrementCounter())}>
          +
        </button>
        <button className={styles.button} onClick={() => dispatch(decrementCounter())}>
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
