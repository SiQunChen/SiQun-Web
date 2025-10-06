

import React, { useRef, useState, useEffect } from 'react';

interface HoloCubeProps {
  imageSrcs: string[];
}

const HoloCube: React.FC<HoloCubeProps> = ({ imageSrcs }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState({ x: 10, y: 0 });
  const lastMousePosRef = useRef<{ x: number; y: number } | null>(null);
  const cubeRef = useRef<HTMLDivElement>(null); // For checking if mounted in animation loop

  // Handle drag-to-rotate
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !lastMousePosRef.current) return;

      const deltaX = e.clientX - lastMousePosRef.current.x;
      const deltaY = e.clientY - lastMousePosRef.current.y;

      setRotation(prevRotation => {
        // Clamp rotation on X-axis to prevent flipping upside down but allow full view
        const newX = Math.max(-90, Math.min(90, prevRotation.x - deltaY * 0.4));
        const newY = prevRotation.y + deltaX * 0.4;
        return { x: newX, y: newY };
      });

      lastMousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      lastMousePosRef.current = null;
    };

    if (isDragging) {
      document.body.style.cursor = 'grabbing';
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      document.body.style.cursor = '';
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
    };
  }, [isDragging]);
  
  // Handle auto-rotation and smooth transition back
  useEffect(() => {
    let animationFrameId: number;
    const animate = () => {
        if (cubeRef.current && !isHovering && !isDragging) {
             setRotation(prev => {
                const targetX = 10;
                // Lerp back to targetX for a smooth transition
                const newX = prev.x + (targetX - prev.x) * 0.05;
                const newY = prev.y + 0.15; // Slower, more serene rotation, no modulo
                return { x: newX, y: newY };
            });
        }
        animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovering, isDragging]);


  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div 
        className="holocube-container" 
        onMouseDown={handleMouseDown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        data-interactive
    >
      <div 
        ref={cubeRef} 
        className="holocube"
        style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            // Disable CSS transition during drag for responsiveness
            transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
        }}
      >
        <div className="holocube-face holocube-face-front">
          <img src={imageSrcs?.[0]} alt="HoloCube Front Face" />
        </div>
        <div className="holocube-face holocube-face-back">
            <img src={imageSrcs?.[1]} alt="HoloCube Back Face" />
        </div>
        <div className="holocube-face holocube-face-right">
            <img src={imageSrcs?.[2]} alt="HoloCube Right Face" />
        </div>
        <div className="holocube-face holocube-face-left">
            <img src={imageSrcs?.[3]} alt="HoloCube Left Face" />
        </div>
        <div className="holocube-face holocube-face-top">
            <img src={imageSrcs?.[4]} alt="HoloCube Top Face" />
        </div>
        <div className="holocube-face holocube-face-bottom">
            <img src={imageSrcs?.[5]} alt="HoloCube Bottom Face" />
        </div>
      </div>
    </div>
  );
};

export default HoloCube;