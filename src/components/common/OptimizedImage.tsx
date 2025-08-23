import React from 'react';
import Image, { ImageProps } from 'next/image';

interface OptimizedImageProps extends Omit<ImageProps, 'alt'> {
  alt: string;
  className?: string;
}

/**
 * OptimizedImage component that wraps Next.js Image with best practices
 * - Always includes alt text
 * - Uses proper loading strategy
 * - Sets appropriate sizes for responsive images
 * - Applies proper quality settings
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  quality = 80,
  ...props
}: OptimizedImageProps) {
  // Default sizes if not provided
  const defaultSizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      sizes={props.sizes || defaultSizes}
      quality={quality}
      {...props}
    />
  );
}
