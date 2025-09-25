import React from "react";
import styles from "./ErrorMessage.module.css";
import { ICONS } from "../../../constants";

interface ErrorMessageProps {
  message: string;
  id?: string;
  variant?: 'inline' | 'card';
  type?: 'error' | 'warning' | 'success';
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  id,
  variant = 'inline',
  type = 'error'
}) => {
  const errorClass = variant === 'card' ? styles.errorCard : styles.errorMessage;
  const typeClass = type !== 'error' ? styles[type] : '';
  const combinedClass = `${errorClass} ${typeClass}`.trim();
  
  const getIcon = () => {
    switch (type) {
      case 'warning':
        return '⚠️';
      case 'success':
        return '✅';
      default:
        return ICONS.ERROR;
    }
  };
  
  return (
    <div id={id} className={combinedClass} role="alert">
      <span className={styles.errorIcon}>{getIcon()}</span>
      <span className={styles.errorText}>{message}</span>
    </div>
  );
};

export default ErrorMessage;
