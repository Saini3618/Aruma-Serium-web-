import { useState, useEffect, useRef } from 'react';

export default function SafeImage({ src, alt, className = '', loading = 'lazy', ...props }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, []);

  const handleLoad = () => setIsLoaded(true);
  const handleError = () => setError(true);

  // Simple shimmer skeleton
  const skeletonStyle = {
    background: 'linear-gradient(90deg, #1a1610 25%, #2a241a 50%, #1a1610 75%)',
    backgroundSize: '200% 100%',
    animation: 'shimmer 1.5s infinite linear',
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && !error && (
        <div className="absolute inset-0 z-10" style={skeletonStyle}></div>
      )}
      <img
        ref={imgRef}
        src={error ? 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop' : (src.startsWith('http') ? src : `/${src}`)}
        alt={alt}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        {...props}
      />
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
}
