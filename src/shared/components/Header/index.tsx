import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>AI Image Generator</h1>
      </div>
    </header>
  );
};

export default Header;
