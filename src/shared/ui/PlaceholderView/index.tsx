import clsx from 'clsx';
import styles from './PlaceholderView.module.css';

interface PlaceholderViewProps {
  icon: string;
  title: string;
  description: string;
  variant?: 'default' | 'sidebar' | 'card';
  className?: string;
}

const PlaceholderView = ({
  icon,
  title,
  description,
  variant = 'default',
  className,
}: PlaceholderViewProps) => {
  return (
    <div className={clsx(styles.placeholder, styles[variant], className)}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default PlaceholderView;
