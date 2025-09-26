import clsx from 'clsx';
import styles from './SkeletonLoader.module.css';

interface SkeletonLoaderProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  className?: string;
}

const SkeletonLoader = ({
  width = '100%',
  height = 'auto',
  borderRadius = 'var(--radius-xl)',
  className = '',
}: SkeletonLoaderProps) => {
  return (
    <div 
      className={clsx(styles.skeleton, className)}
      style={{
        width,
        height,
        borderRadius,
      }}
    >
      <div className={styles.shimmer} />
    </div>
  );
};

export default SkeletonLoader;
