import clsx from 'clsx';
import styles from './Spinner.module.css';

interface SpinnerProps {
  text?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'circle' | 'button';
}

const Spinner = ({ 
  text = 'Generating your image...', 
  size = 'md',
  variant = 'circle',
}: SpinnerProps) => {
  const renderSpinner = () => {
    if (variant === 'button') {
      return <div className={styles.buttonSpinner} />;
    }
    
    return <div className={clsx(styles.spinner, styles[size])} />;
  };

  const content = (
    <div className={styles.container}>
      {renderSpinner()}
      {text && <span className={styles.text}>{text}</span>}
    </div>
  );
  return content;
};

export default Spinner;