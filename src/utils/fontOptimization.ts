/**
 * Font optimization utilities for improved Core Web Vitals
 */

// Function to preload critical fonts
export const preloadFonts = () => {
  if (typeof document === 'undefined') return;

  const fontFiles = [
    '/fonts/roboto-v30-latin-300.woff2',
    '/fonts/roboto-v30-latin-regular.woff2',
    '/fonts/roboto-v30-latin-500.woff2',
    '/fonts/roboto-v30-latin-700.woff2',
  ];

  fontFiles.forEach(fontFile => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = fontFile;
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

// CSS to be included in a global style to prevent layout shifts from font loading
export const fontFaceCSS = `
  /* roboto-300 - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url('/fonts/roboto-v30-latin-300.woff2') format('woff2');
  }
  
  /* roboto-regular - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/roboto-v30-latin-regular.woff2') format('woff2');
  }
  
  /* roboto-500 - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url('/fonts/roboto-v30-latin-500.woff2') format('woff2');
  }
  
  /* roboto-700 - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('/fonts/roboto-v30-latin-700.woff2') format('woff2');
  }
`;
