import React, { useEffect, useRef, useState } from 'react';
import { Skill } from '../types';

interface HoloSkillBarProps {
  skill: Skill;
}

const HoloSkillBar: React.FC<HoloSkillBarProps> = ({ skill }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`holo-skill-bar-container ${isVisible ? 'visible' : ''}`}
      data-interactive
    >
      <div className="holo-skill-bar-level">{skill.level}%</div>
      <div className="holo-skill-bar-wrapper">
        <div 
            className="holo-skill-bar"
            style={{ height: isVisible ? `${skill.level}%` : '0%' }}
        ></div>
      </div>
      <p className="holo-skill-bar-name">{skill.name}</p>
    </div>
  );
};

export default HoloSkillBar;