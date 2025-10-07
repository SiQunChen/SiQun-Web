import React, { useState } from 'react';
import { useTranslations } from '../contexts/LanguageContext';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import AnimatedOnScroll from '../components/AnimatedOnScroll';
import Modal from '../components/Modal';
import { Project } from '../types';

const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);


const ProjectsPage: React.FC = () => {
  const t = useTranslations();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };


  return (
    <div>
      <SectionHeader 
        title={t.sections.projects.title}
        subtitle={t.sections.projects.subtitle}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.portfolio.projects.map((project, index) => (
          <AnimatedOnScroll key={index} delay={index * 100} className="h-full">
            <ProjectCard project={project} onImageClick={() => handleCardClick(project)} />
          </AnimatedOnScroll>
        ))}
      </div>

      {selectedProject && (
        <Modal isOpen={!!selectedProject} onClose={closeModal}>
            <div className="p-4 sm:p-6 flex flex-col items-center text-center">
                 <img 
                    src={selectedProject.imageUrl} 
                    alt={selectedProject.title} 
                    className="w-full h-auto max-w-full max-h-[60vh] object-contain rounded-lg border-2 border-slate-700 shadow-lg mb-6" 
                />
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-100">{selectedProject.title}</h2>
                    <p className="text-slate-400 text-sm max-w-xl">{selectedProject.description}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {selectedProject.tags.map((tag, index) => (
                        <span key={index} className="bg-cyan-900/50 text-cyan-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                     <div className="flex justify-center items-center space-x-6 pt-4">
                        {selectedProject.githubUrl && (
                            <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-slate-300 hover:text-cyan-400 font-medium transition-colors" data-interactive>
                            <GitHubIcon />
                            <span className="ml-2">{t.projectCard.code}</span>
                            </a>
                        )}
                        {selectedProject.liveUrl && (
                            <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-slate-300 hover:text-cyan-400 font-medium transition-colors" data-interactive>
                            <ExternalLinkIcon />
                            <span className="ml-2">{t.projectCard.liveDemo}</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </Modal>
      )}
    </div>
  );
};

export default ProjectsPage;