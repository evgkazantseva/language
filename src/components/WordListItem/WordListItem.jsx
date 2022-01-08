import styles from "./WordListItem.module.scss";
import SaveButton from "../SaveButton/SaveButton.jsx";
import CancelButton from "../CancelButton/CancelButton.jsx";
import ChangeButton from "../ChangeButton/ChangeButton.jsx";
import DeleteButton from "../DeleteButton/DeleteButton.jsx";
import React, { useState } from "react";

function WordListItem(props) {
  const { english, russian, transcription, id, tags, isViewed } = props;
  const [Viewed, setViewed] = useState(isViewed);
  const [inputEnglish, setInputEnglish] = useState(english);
  const [inputRussian, setInputRussian] = useState(russian);
  const [inputTranscription, setInputTranscription] = useState(transcription);
  const [inputTags, setInputTags] = useState(tags);
  const cancel = () => {
    setViewed(true);
    setInputEnglish(english);
    setInputRussian(russian);
    setInputTranscription(transcription);
    setInputTags(tags);
  };

  let change = () => {
    setViewed(false);
  };

  let changeInputEnglish = (e) => {
    setInputEnglish(e.target.value);
  };
  let changeInputRussian = (e) => {
    setInputRussian(e.target.value);
  };

  let changeInputTranscription = (e) => {
    setInputTranscription(e.target.value);
  };

  let changeInputTags = (e) => {
    setInputTags(e.target.value);
  };

  return Viewed ? (
    <tr className={styles.line} id={id}>
      <td>{english}</td>
      <td>{russian}</td>
      <td>{transcription}</td>
      <td>{tags}</td>
      <td>
        <ChangeButton change={change} />
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
          value={inputEnglish}
          onChange={changeInputEnglish}
        />
      </td>
      <td>
        <input
          className={styles.input}
          type="text"
          name={"russian"}
          value={inputRussian}
          onChange={changeInputRussian}
        />
      </td>
      <td>
        <input
          className={styles.input}
          type="text"
          name={"transcription"}
          value={inputTranscription}
          onChange={changeInputTranscription}
        />
        <br />
      </td>
      <td>
        <input
          className={styles.input}
          type="text"
          name={"transcription"}
          value={inputTags}
          onChange={changeInputTags}
        />
        <br />
      </td>
      <td className={styles.buttons}>
        <SaveButton />
        <CancelButton cancel={cancel} />
      </td>
    </tr>
  );
}

export default WordListItem;
