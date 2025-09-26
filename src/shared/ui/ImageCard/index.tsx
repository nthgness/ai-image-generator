import clsx from 'clsx';
import styles from './ImageCard.module.css';

interface ImageCardProps {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  metadata?: Array<{ label: string; value: string }>;
  hasError?: boolean;
  errorMessage?: string;
  onImageError?: () => void;
  className?: string;
}

const ImageCard = ({
  src,
  alt,
  title,
  subtitle,
  metadata,
  hasError = false,
  errorMessage = 'Failed to load image',
  onImageError,
  className,
}: ImageCardProps) => {
  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.imageWrapper}>
        {hasError ? (
          <div className={styles.imageError}>
            <div className={styles.errorIcon}>❌</div>
            <div className={styles.errorText}>{errorMessage}</div>
            <div className={styles.errorUrl}>URL: {src}</div>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            className={styles.image}
            onError={onImageError}
            loading="lazy"
          />
        )}
      </div>
      
      {title && (
        <div className={styles.content}>
          <div className={styles.title}>{title}</div>
          {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
        </div>
      )}
      
      {metadata && metadata.length > 0 && (
        <div className={styles.metadata}>
          {metadata.map((item, index) => (
            <span key={index}>
              {item.label}: {item.value}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCard;
