import React from 'react';
import styles from './ImageDisplay.module.css';
import { useGenerationContext } from '../../context';
import { useQueryContext } from '../../context';
import { Spinner, ErrorMessage, SkeletonLoader } from '../../../../shared';
import { formatDate } from '../../../../utils';
import { ICONS } from '../../../../constants';

const ImageDisplay: React.FC = () => {
  const { currentImage } = useGenerationContext();
  const { isLoading, error } = useQueryContext();
  const formattedDate = currentImage ? formatDate(currentImage.createdAt) : '';

  return (
    <div className={styles.container}>
      {isLoading && (
        <>
          <div className={styles.imageWrapper}>
            <SkeletonLoader 
              className={styles.imageSkeleton}
              height="512px"
            />
          </div>
          
          <div className={styles.prompt}>
            <div className={styles.promptLabel}>Prompt:</div>
            <div className={styles.promptText}>
              <SkeletonLoader height="1.5em" borderRadius="var(--radius-md)" />
            </div>
          </div>
          
          <div className={styles.metadata}>
            <SkeletonLoader width="120px" height="0.8em" borderRadius="var(--radius-sm)" />
            <SkeletonLoader width="140px" height="0.8em" borderRadius="var(--radius-sm)" />
          </div>
          
          <div className={styles.loading}>
            <Spinner 
              text="Creating your masterpiece..." 
              size="sm" 
              variant="circle"
            />
          </div>
        </>
      )}

      {error && !isLoading && (
        <ErrorMessage 
          message={error} 
          variant="card" 
        />
      )}

      {!currentImage && !isLoading && !error && (
        <div className={styles.empty}>
          <div className={styles.emptyIcon}>{ICONS.EMPTY}</div>
          <div className={styles.emptyText}>No image generated yet</div>
          <div className={styles.emptySubtext}>
            Enter a prompt above to create your first AI-generated image
          </div>
        </div>
      )}

      {currentImage && !isLoading && !error && (
        <>
          <div className={styles.imageWrapper}>
            <img
              src={currentImage.imageUrl}
              alt={`Generated image: ${currentImage.prompt}`}
              className={styles.image}
              loading="lazy"
            />
          </div>
          
          <div className={styles.prompt}>
            <div className={styles.promptLabel}>Prompt:</div>
            <div className={styles.promptText}>{currentImage.prompt}</div>
          </div>
          
          <div className={styles.metadata}>
            <span>ID: {currentImage.id}</span>
            <span>Generated: {formattedDate}</span>
          </div>
        </>
      )}
    </div>
  );
};

ImageDisplay.displayName = 'ImageDisplay';

export default ImageDisplay;
