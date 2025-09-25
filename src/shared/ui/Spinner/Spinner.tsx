import React from 'react';
import styles from './Spinner.module.css';

interface SpinnerProps {
  text?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'circle' | 'dots' | 'button' | 'waves';
  withGlass?: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({ 
  text = 'Generating your image...', 
  size = 'md',
  variant = 'circle',
  withGlass = false
}) => {
  const renderSpinner = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className={styles.dots}>
            <div className={styles.dot} />
            <div className={styles.dot} />
            <div className={styles.dot} />
          </div>
        );
      case 'waves':
        return (
          <div className={styles.waves}>
            <div className={styles.wave} />
            <div className={styles.wave} />
            <div className={styles.wave} />
            <div className={styles.wave} />
            <div className={styles.wave} />
          </div>
        );
      case 'button':
        return <div className={styles.buttonSpinner} />;
      default:
        return <div className={`${styles.spinner} ${styles[size]}`} />;
    }
  };

  const content = (
    <div className={styles.container}>
      {renderSpinner()}
      {text && <span className={styles.text}>{text}</span>}
    </div>
  );

  if (withGlass) {
    return (
      <div className={styles.glassContainer}>
        {content}
      </div>
    );
  }

  return content;
};

export default Spinner;