import React, { useRef, useState } from 'react';

interface InfoCardProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ children, icon }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { clientX, clientY } = e;
    const { top, left, width, height } = cardRef.current.getBoundingClientRect();
    const x = (clientX - left - width / 2) / 15;
    const y = -(clientY - top - height / 2) / 15;
    setStyle({ transform: `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg) scale(1.05)`, transition: 'transform 0.1s linear' });
  };

  const handleMouseLeave = () => {
    setStyle({ transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)', transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)' });
  };
  
  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className="info-card p-4 rounded-lg text-center h-full flex flex-col items-center justify-center"
      data-interactive
    >
      {icon}
      <p className="text-sm font-medium text-slate-300">{children}</p>
    </div>
  );
};

export default InfoCard;
