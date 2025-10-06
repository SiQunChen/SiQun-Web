import React, { useEffect, useRef, useState } from 'react';
import { Skill } from '../types';

interface SkillBarProps {
  skill: Skill;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
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
        threshold: 0.5,
      }
    );
    
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const match = skill.name.match(/(.*?)\s*#\s*(.*)/);
  let mainSkill = skill.name;
  let tags: string[] = [];

  if (match && match[1] && match[2]) {
    mainSkill = match[1].trim();
    tags = match[2].split(/,|、/).map(tag => tag.trim());
  }


  return (
    <div className="w-full" ref={ref} data-interactive>
      <div className="flex justify-between items-center mb-2">
        <span className="text-base font-medium text-slate-300">{mainSkill}</span>
        <span className="text-sm font-medium text-cyan-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-2.5 overflow-hidden">
        <div
          className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: '200ms',
            transitionProperty: 'width',
          }}
        ></div>
      </div>
       {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span key={index} className="bg-cyan-900/50 text-cyan-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillBar;