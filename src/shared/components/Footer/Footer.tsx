import React from 'react';
import styles from './Footer.module.css';

interface FooterProps {
  children: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        {children}
      </p>
    </footer>
  );
};

export default Footer;
