import React, { useState, useEffect, useRef, useCallback, ReactNode } from 'react';

const ChevronLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
);

const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);

interface CarouselProps {
    children: ReactNode;
    onCenterItemClick?: (itemIndex: number) => void;
}

const Carousel: React.FC<CarouselProps> = ({ children, onCenterItemClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayRef = useRef<number | null>(null);
  
  const totalItems = React.Children.count(children);
  const autoplayInterval = 5000;

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    if (totalItems > 1) {
        autoplayRef.current = window.setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
        }, autoplayInterval);
    }
  }, [totalItems]);

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  const resetAutoplay = useCallback(() => {
    stopAutoplay();
    startAutoplay();
  }, [startAutoplay]);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    resetAutoplay();
  }, [totalItems, resetAutoplay]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    resetAutoplay();
  }, [totalItems, resetAutoplay]);

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
    resetAutoplay();
  };

  if (totalItems === 0) {
    return null;
  }
  
  const itemsToShow = 3; // Number of items visible at a time

  return (
    <div 
      className="relative max-w-5xl mx-auto"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <div className="carousel-wrapper">
        <div className="carousel-track">
          {React.Children.map(children, (child, index) => {
            let offset = index - currentIndex;
            if (Math.abs(offset) > totalItems / 2) {
              offset = offset < 0 ? offset + totalItems : offset - totalItems;
            }

            const isVisible = Math.abs(offset) < Math.ceil(itemsToShow / 2);
            
            const spacingFactor = 75; // % of item width for spacing
            const style: React.CSSProperties = {
              transform: `translateY(-50%) translateX(-50%) translateX(${offset * spacingFactor}%) rotateY(${offset * -15}deg) scale(${offset === 0 ? 1.1 : 0.85})`,
              opacity: isVisible ? 1 : 0,
              zIndex: totalItems - Math.abs(offset),
              pointerEvents: isVisible ? 'auto' : 'none',
              filter: offset !== 0 ? 'brightness(0.6) blur(1px)' : 'none',
            };

            const handleClick = () => {
                if (offset === 0) {
                    onCenterItemClick?.(index);
                } else {
                    setCurrentIndex(index);
                    resetAutoplay();
                }
            };

            return (
              <div
                className="carousel-item"
                style={style}
                key={index}
                onClick={handleClick}
                aria-hidden={!isVisible}
              >
                {child}
              </div>
            );
          })}
        </div>
      </div>
      
      {totalItems > 1 && (
        <>
            <div className="carousel-dots" role="tablist">
                {React.Children.map(children, (_, index) => (
                <button
                    data-interactive
                    key={index}
                    role="tab"
                    aria-selected={index === currentIndex}
                    className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => goToIndex(index)}
                    aria-label={`Go to item ${index + 1}`}
                />
                ))}
            </div>

            <button data-interactive onClick={goToPrev} className="carousel-btn carousel-btn-left" aria-label="Previous item">
                <ChevronLeftIcon />
            </button>
            <button data-interactive onClick={goToNext} className="carousel-btn carousel-btn-right" aria-label="Next item">
                <ChevronRightIcon />
            </button>
        </>
      )}
    </div>
  );
};

export default Carousel;