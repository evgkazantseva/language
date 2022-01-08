import styles from "./TranslateButton.module.scss";
import React, { useState } from "react";

function TranslateButton(props) {
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    setChecked(!checked);
  };
  return !checked ? (
    <button className={styles.button} onClick={handleClick}>
      Translate
    </button>
  ) : (
    <div className={styles.translation} onClick={handleClick}>
      {props.translation}
    </div>
  );
}

export default TranslateButton;
