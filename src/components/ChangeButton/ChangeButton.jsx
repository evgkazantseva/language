import styles from "./ChangeButton.module.scss";
function ChangeButton(props) {
  const { change } = props;
  return (
    <button className={styles.button} onClick={change}>
      &#9998;
    </button>
  );
}

export default ChangeButton;
