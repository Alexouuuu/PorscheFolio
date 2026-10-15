import React, { useState, useEffect, useRef, useId } from 'react';

/**
 * LazyImage component with:
 * - "SC" monogram fill loader animation
 * - Smooth fade-in transition on load
 * - Cached image detection (instant display)
 * - Elegant dark fallback placeholder if image fails to load or src is missing
 */
const LazyImage = ({
  src,
  alt = 'Image',
  className = '',
  containerClassName = '',
  fallbackTitle,
  onClick,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);
  const rawId = useId();
  const clipId = `sc-clip-${rawId.replace(/[^a-zA-Z0-9_-]/g, '')}`;
  const gradId = `sc-grad-${rawId.replace(/[^a-zA-Z0-9_-]/g, '')}`;

  useEffect(() => {
    if (!src || src.trim() === '') {
      setHasError(true);
      setLoaded(false);
      return;
    }
    setHasError(false);

    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [src]);

  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-[#0d0d0d] ${containerClassName}`}
      onClick={onClick}
    >
      {!loaded && !hasError && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#0e0e0e] select-none pointer-events-none">
          <div className="flex flex-col items-center justify-center">
            <svg
              viewBox="0 0 160 80"
              className="w-20 h-10 md:w-24 md:h-12 overflow-visible"
              aria-label="Chargement..."
            >
              <defs>
                <clipPath id={clipId}>
                  <text
                    x="50%"
                    y="55%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="50"
                    fontWeight="800"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    letterSpacing="4"
                  >
                    SC
                  </text>
                </clipPath>

                <linearGradient id={gradId} x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
                </linearGradient>
              </defs>

              <text
                x="50%"
                y="55%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="50"
                fontWeight="800"
                fontFamily="system-ui, -apple-system, sans-serif"
                letterSpacing="4"
                fill="none"
                stroke="rgba(255, 255, 255, 0.15)"
                strokeWidth="1.5"
              >
                SC
              </text>

              <g clipPath={`url(#${clipId})`}>
                <rect
                  x="0"
                  y="0"
                  width="160"
                  height="80"
                  fill={`url(#${gradId})`}
                >
                  <animate
                    attributeName="y"
                    values="80; 0; 0; 80"
                    keyTimes="0; 0.55; 0.8; 1"
                    dur="1.8s"
                    repeatCount="indefinite"
                  />
                </rect>
              </g>
            </svg>

            <div className="w-12 h-[1px] bg-white/10 mt-1 overflow-hidden relative">
              <div className="h-full bg-white/60 animate-pulse w-full" />
            </div>
          </div>
        </div>
      )}

      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[#151515] border border-white/5 select-none">
          <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-3 text-white/40">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </div>
          <span className="text-[13px] font-medium text-white/70 uppercase tracking-wider mb-1 line-clamp-1">
            {fallbackTitle || alt || 'Visuel'}
          </span>
          <span className="text-[11px] text-white/35 uppercase tracking-[0.2em]">
            Visuel en cours d'optimisation
          </span>
        </div>
      ) : (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImage;
