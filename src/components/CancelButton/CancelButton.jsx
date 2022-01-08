import styles from "./CancelButton.module.scss";
function CancelButton(props) {
  const { cancel } = props;
  return (
    <button className={styles.button} onClick={cancel}>
      &#10006;
    </button>
  );
}

export default CancelButton;
