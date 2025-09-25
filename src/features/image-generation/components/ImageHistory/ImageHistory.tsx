import React from 'react';
import clsx from 'clsx';
import styles from './ImageHistory.module.css';
import { useGenerationContext } from '../../context';
import { formatDate } from '../../../../utils';

const ImageHistory: React.FC = () => {
  const { history, selectFromHistory, currentImage } = useGenerationContext();

  if (history.length === 0) {
    return (
      <div className={styles.empty}>
        <div className={styles.emptyIcon}>🎨</div>
        <div className={styles.emptyTitle}>No images yet</div>
        <div className={styles.emptyDescription}>
          Generate your first AI image to see it appear here
        </div>
      </div>
    );
  }

  return (
    <div className={styles.history}>
      <h3 className={styles.title}>Image History</h3>
      <div className={styles.grid}>
        {history.map((image) => (
          <div
            key={image.id}
            className={clsx(styles.imageCard, { [styles.active]: currentImage?.id === image.id })}
            onClick={() => selectFromHistory(image.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectFromHistory(image.id);
              }
            }}
          >
            <div className={styles.imageWrapper}>
              <img
                src={image.imageUrl}
                alt={image.prompt}
                className={styles.image}
              />
              <div className={styles.imageOverlay}>
                <div className={styles.imageActions}>
                  <button className={styles.actionButton} title="View full size">
                    👁️
                  </button>
                  <button className={styles.actionButton} title="Download">
                    ⬇️
                  </button>
                </div>
              </div>
            </div>
            
            <div className={styles.cardContent}>
              <p className={styles.prompt}>{image.prompt}</p>
              <div className={styles.date}>
                <span className={styles.dateIcon}>🕒</span>
                {formatDate(image.createdAt)}
              </div>
            </div>
            
            <div className={styles.cardFooter}>
              <span className={styles.imageId}>#{image.id}</span>
              <div className={styles.status}>
                <span className={styles.statusIcon}></span>
                Generated
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

ImageHistory.displayName = 'ImageHistory';

export default ImageHistory;
