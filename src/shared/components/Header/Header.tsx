import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>AI Image Generator</h1>
      <p className={styles.description}>Create stunning images with AI-powered generation</p>
    </header>
  );
};

export default Header;
