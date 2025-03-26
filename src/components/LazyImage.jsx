import React, { useState, useEffect } from 'react';
import { resourceManager } from '../utils/ResourceManager';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  onLoad,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;

    const loadImage = async () => {
      try {
        await resourceManager.preloadImage(src);
        if (mounted) {
          setIsLoaded(true);
          onLoad?.();
        }
      } catch (err) {
        if (mounted) {
          setError(true);
          console.error('Error loading image:', err);
        }
      }
    };

    loadImage();

    return () => {
      mounted = false;
    };
  }, [src, onLoad]);

  if (error) {
    return <div className={`${className} bg-gray-200`}>Failed to load image</div>;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
      loading={loading}
      {...props}
    />
  );
};

export default LazyImage; 