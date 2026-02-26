// Image optimization utilities for smooth scrolling performance

// Shimmer effect for image loading placeholder
export const shimmerEffect = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#1a1a1a" offset="20%" />
      <stop stop-color="#2a2a2a" offset="50%" />
      <stop stop-color="#1a1a1a" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#1a1a1a" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

// Convert to base64 data URL
export const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

// Generate blur data URL for image placeholder
export const getBlurDataURL = (width = 100, height = 100) => {
  return `data:image/svg+xml;base64,${toBase64(shimmerEffect(width, height))}`;
};

// Default blur placeholder (light background)
export const blurDataURLLight = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNlZGUyIi8+PC9zdmc+';

// Default blur placeholder (dark background)
export const blurDataURLDark = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWExYTFhIi8+PC9zdmc+';

// Optimized image component props for different use cases
export const imageOptimizations = {
  // Above-the-fold hero images - load immediately with priority
  hero: {
    priority: true,
    loading: 'eager' as const,
    quality: 85,
    placeholder: 'blur' as const,
    blurDataURL: blurDataURLDark,
  },
  // Parallax background images - needs high quality for large displays  
  parallax: {
    priority: false,
    loading: 'eager' as const,
    quality: 80,
    placeholder: 'blur' as const,
    blurDataURL: blurDataURLDark,
  },
  // Grid/gallery images - lazy load with good quality
  gallery: {
    priority: false,
    loading: 'lazy' as const,
    quality: 75,
    placeholder: 'blur' as const,
    blurDataURL: blurDataURLDark,
  },
  // Instagram section images - smaller, lazy load
  instagram: {
    priority: false,
    loading: 'lazy' as const,
    quality: 70,
    placeholder: 'blur' as const,
    blurDataURL: blurDataURLLight,
  },
};
