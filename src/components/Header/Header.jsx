import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.h1}>English class</h1>
      </div>
    </header>
  );
}

export default Header;
