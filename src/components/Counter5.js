import { useDispatch, useSelector } from "react-redux";
import { decrementBy5,incrementBy5 } from "../features/counter5Slice";
import styles from "./Counter.module.css"; 

const Counter5 = () => {
  const count1 = useSelector((state) => state.count5.count);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Counter: {count1}</h2>
      <div className={styles.buttonGroup}>
        <button className={styles.button} onClick={() => dispatch(incrementBy5())}>
          +
        </button>
        <button className={styles.button} onClick={() => dispatch(decrementBy5())}>
          -
        </button>
      </div>
    </div>
  );
};

export default Counter5;
