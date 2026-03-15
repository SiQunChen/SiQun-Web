import React, { useEffect, useRef, useState } from 'react';
import { Language, LanguageProficiency } from '../types';

interface LanguageCardProps {
    language: Language;
    proficiencyLabel: string;
}

const proficiencyConfig: Record<LanguageProficiency, { icon: string; colorClass: string; glowClass: string }> = {
    native: {
        icon: 'star',
        colorClass: 'proficiency-native',
        glowClass: 'glow-native',
    },
    fluent: {
        icon: 'trending_up',
        colorClass: 'proficiency-fluent',
        glowClass: 'glow-fluent',
    },
    intermediate: {
        icon: 'swap_horiz',
        colorClass: 'proficiency-intermediate',
        glowClass: 'glow-intermediate',
    },
    beginner: {
        icon: 'eco',
        colorClass: 'proficiency-beginner',
        glowClass: 'glow-beginner',
    },
};

const LanguageCard: React.FC<LanguageCardProps> = ({ language, proficiencyLabel }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const config = proficiencyConfig[language.proficiency];

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

    return (
        <div
            ref={ref}
            className={`language-card ${isVisible ? 'language-card-visible' : ''}`}
            data-interactive
        >
            <div className={`language-card-icon ${config.glowClass}`}>
                <span className="material-symbols-outlined text-2xl" aria-hidden="true">
                    {config.icon}
                </span>
            </div>
            <h4 className="text-base font-semibold text-slate-200 mt-3 mb-2">{language.name}</h4>
            <span className={`proficiency-badge ${config.colorClass}`}>
                {proficiencyLabel}
            </span>
        </div>
    );
};

export default LanguageCard;
