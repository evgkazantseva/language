import styles from "./WordListItem.module.scss";
import SaveButton from "./SaveButton.jsx";
import CancelButton from "./CancelButton.jsx";
import ChangeButton from "./ChangeButton.jsx";
import DeleteButton from "./DeleteButton.jsx";

function WordListItem(props) {
  const { english, russian, transcription, id, tags, isViewed } = props;
  return isViewed ? (
    <tr className={styles.line} id={id}>
      <td>{english}</td>
      <td>{russian}</td>
      <td>{transcription}</td>
      <td>{tags}</td>
      <td>
        <ChangeButton />
        <DeleteButton />
      </td>
    </tr>
  ) : (
    <tr className={styles.line}>
      <td>
        <input
          className={styles.input}
          type="text"
          name={"english"}
          placeholder={"Please type english word"}
        />
      </td>
      <td>
        <input
          className={styles.input}
          type="text"
          name={"russian"}
          placeholder={"Please type translation"}
        />
      </td>
      <td>
        <input
          className={styles.input}
          type="text"
          name={"transcription"}
          placeholder={"Please type transcription"}
        />
        <br />
      </td>
      <td>
        <input
          className={styles.input}
          type="text"
          name={"tags"}
          placeholder={"Please type tags"}
        />
        <br />
      </td>
      <td className={styles.buttons}>
        <SaveButton />
        <CancelButton />
      </td>
    </tr>
  );
}

export default WordListItem;
