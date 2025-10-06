
import React, { useRef, useState } from 'react';
import { Project } from '../types';
import { useTranslations } from '../contexts/LanguageContext';

interface ProjectCardProps {
  project: Project;
}

const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const t = useTranslations();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { clientX, clientY } = e;
    const { top, left, width, height } = cardRef.current.getBoundingClientRect();
    const x = (clientX - left - width / 2) / 20; // Divide for less intense rotation
    const y = -(clientY - top - height / 2) / 20;
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
      className="rounded-lg overflow-hidden flex flex-col project-card-hover h-full"
      data-interactive
    >
      <img className="h-48 w-full object-cover" src={project.imageUrl} alt={project.title} />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-100 mb-2">{project.title}</h3>
        <p className="text-slate-400 text-sm mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="bg-cyan-900/50 text-cyan-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center space-x-4">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-400 hover:text-cyan-400 font-medium transition-colors">
              <GitHubIcon />
              <span className="ml-2">{t.projectCard.code}</span>
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-400 hover:text-cyan-400 font-medium transition-colors">
               <ExternalLinkIcon />
              <span className="ml-2">{t.projectCard.liveDemo}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
