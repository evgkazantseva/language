import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.info}>
        English with <h1 className={styles.h1}>Language</h1>
      </div>
    </header>
  );
}

export default Header;
