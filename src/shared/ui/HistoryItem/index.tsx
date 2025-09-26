import clsx from 'clsx';
import styles from './HistoryItem.module.css';

interface HistoryItemProps {
  id: string;
  imageUrl: string;
  prompt: string;
  date: string;
  isActive?: boolean;
  onSelect: (id: string) => void;
  className?: string;
}

const HistoryItem = ({
  id,
  imageUrl,
  prompt,
  date,
  isActive = false,
  onSelect,
  className,
}: HistoryItemProps) => {
  const handleClick = () => {
    onSelect(id);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(id);
    }
  };

  return (
    <div
      className={clsx(
        styles.historyItem,
        { [styles.active]: isActive },
        className
      )}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className={styles.itemImage}>
        <img
          src={imageUrl}
          alt={prompt}
          className={styles.thumbnail}
          loading="lazy"
        />
      </div>
      
      <div className={styles.itemContent}>
        <p className={styles.itemPrompt}>{prompt}</p>
        <div className={styles.itemDate}>
          {date}
        </div>
      </div>
    </div>
  );
};

export default HistoryItem;
