import { useEffect } from 'react';
import clsx from 'clsx';
import styles from './Toast.module.css';

interface ToastProps {
  message: string;
  type?: 'error' | 'success' | 'warning' | 'info';
  duration?: number;
  onClose?: () => void;
}

const Toast = ({ message, type = 'error', duration = 5000, onClose }: ToastProps) => {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose?.();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✅';
      case 'warning':
        return '⚠️';
      case 'info':
        return 'ℹ️';
      default:
        return '❌';
    }
  };

  return (
    <div className={clsx(styles.toast, styles[type])}>
      <div className={styles.content}>
        <span className={styles.icon}>{getIcon()}</span>
        <span className={styles.message}>{message}</span>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Toast;