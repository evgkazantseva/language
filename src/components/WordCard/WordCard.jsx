import styles from "./WordCard.module.scss";
import TranslateButton from "../TranslateButton/TranslateButton.jsx";

function WordCard(props) {
  return (
    <div className={styles.card}>
      <div className={styles.card__english}>{props.english}</div>
      <div className={styles.card__transcription}>{props.transcription}</div>
      <div className={styles.buttons}>
        <TranslateButton translation={props.translation} />
      </div>
    </div>
  );
}

export default WordCard;
