import { useState } from "react";
import Button from "../Button";
import styles from "./Add.module.css";

const Add = ({ onSave }) => {
  const [value, setValue] = useState<string>("");

  return (
    <div className={styles.add}>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className={styles.input}
      />

      <Button
        variant="flat"
        size="sm"
        onClick={() => {
          setValue("");
          onSave(value);
        }}
      >
        Add
      </Button>
    </div>
  );
};

export default Add;
