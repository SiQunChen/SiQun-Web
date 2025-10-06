
import React from 'react';
import { useTranslations } from '../contexts/LanguageContext';
import SectionHeader from '../components/SectionHeader';
import TimelineItem from '../components/TimelineItem';
import AnimatedOnScroll from '../components/AnimatedOnScroll';

const ResumePage: React.FC = () => {
  const t = useTranslations();
  const portfolioData = t.portfolio;

  return (
    <div className="space-y-16">
      <SectionHeader 
        title={t.sections.resume.title}
        subtitle={t.sections.resume.subtitle}
      />
      
      <section>
        <h3 className="text-2xl font-bold text-slate-200 mb-8 text-center sm:text-left">{t.sections.resume.education}</h3>
        <div className="max-w-4xl mx-auto relative resume-timeline">
          {portfolioData.education.map((edu, index) => (
             <AnimatedOnScroll key={index} delay={index * 150}>
              <TimelineItem title={edu.degree} subtitle={edu.institution} period={edu.period}>
              <p>{edu.description}</p>
              </TimelineItem>
            </AnimatedOnScroll>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-slate-200 mb-8 text-center sm:text-left">{t.sections.resume.workExperience}</h3>
        <div className="max-w-4xl mx-auto relative resume-timeline">
          {portfolioData.experience.map((exp, index) => (
            <AnimatedOnScroll key={index} delay={index * 150}>
              <TimelineItem title={exp.role} subtitle={exp.company} period={exp.period}>
                <ul className="list-disc pl-5 space-y-1">
                  {exp.description.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </TimelineItem>
            </AnimatedOnScroll>
          ))}
        </div>
      </section>

      {portfolioData.cadreExperience && portfolioData.cadreExperience.length > 0 && (
        <section>
          <h3 className="text-2xl font-bold text-slate-200 mb-8 text-center sm:text-left">{t.sections.resume.cadreExperience}</h3>
          <div className="max-w-4xl mx-auto relative resume-timeline">
            {portfolioData.cadreExperience.map((exp, index) => (
              <AnimatedOnScroll key={index} delay={index * 150}>
                <TimelineItem title={exp.role} subtitle={exp.organization} period={exp.period}>
                  <ul className="list-disc pl-5 space-y-1">
                    {exp.description.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </TimelineItem>
              </AnimatedOnScroll>
            ))}
          </div>
        </section>
      )}

    </div>
  );
};

export default ResumePage;