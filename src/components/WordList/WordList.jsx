import styles from "./WordList.module.scss";
import WordListItem from "../WordListItem/WordListItem.jsx";
import words from "../../words.js";

function WordList() {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <caption className={styles.table__title}>Words List</caption>
        <thead className={styles.thead}>
          <tr className={styles.table__header}>
            <th scope="col">Word</th>
            <th scope="col">Translation</th>
            <th scope="col">Transcription</th>
            <th scope="col">Tags</th>
            <th scope="col"></th>
          </tr>
        </thead>
        {
          <tbody>
            {words.map((word) => (
              <WordListItem
                key={word.id}
                id={word.id}
                english={word.english}
                russian={word.russian}
                transcription={word.transcription}
                tags={word.tags}
                isViewed={word.id == "10879" ? false : true}
              />
            ))}
          </tbody>
        }
      </table>
    </div>
  );
}

export default WordList;
