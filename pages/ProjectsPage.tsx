
import React from 'react';
import { useTranslations } from '../contexts/LanguageContext';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import AnimatedOnScroll from '../components/AnimatedOnScroll';

const ProjectsPage: React.FC = () => {
  const t = useTranslations();

  return (
    <div>
      <SectionHeader 
        title={t.sections.projects.title}
        subtitle={t.sections.projects.subtitle}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.portfolio.projects.map((project, index) => (
          <AnimatedOnScroll key={index} delay={index * 100} className="h-full">
            <ProjectCard project={project} />
          </AnimatedOnScroll>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
