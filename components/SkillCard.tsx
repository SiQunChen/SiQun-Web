import React, { useEffect, useRef, useState } from 'react';
import { Skill } from '../types';

interface SkillCardProps {
    skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
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
            { threshold: 0.3 }
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
        <div
            ref={ref}
            className={`skill-card ${isVisible ? 'skill-card-visible' : ''}`}
            data-interactive
        >
            <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-2xl text-cyan-400" aria-hidden="true">code</span>
                <h4 className="text-lg font-semibold text-slate-200">{mainSkill}</h4>
            </div>
            {tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="skill-tag"
                            style={{
                                transitionDelay: isVisible ? `${index * 60 + 200}ms` : '0ms',
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(8px)',
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SkillCard;
