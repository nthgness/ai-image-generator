import React from 'react';
import styles from './SkeletonLoader.module.css';

interface SkeletonLoaderProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  width = '100%',
  height = 'auto',
  borderRadius = 'var(--radius-xl)',
  className = '',
}) => {
  return (
    <div 
      className={`${styles.skeleton} ${className}`}
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

SkeletonLoader.displayName = 'SkeletonLoader';

export default SkeletonLoader;
