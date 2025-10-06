

import React, { useState } from 'react';
import { useTranslations } from '../contexts/LanguageContext';
import SectionHeader from '../components/SectionHeader';
import AnimatedOnScroll from '../components/AnimatedOnScroll';
import HoloCube from '../components/HoloCube';
import InfoCard from '../components/InfoCard';
import SkillBar from '../components/SkillBar';
import Carousel from '../components/Carousel';
import CertificationCard from '../components/CertificationCard';
import Modal from '../components/Modal';
import { Certification } from '../types';


const interestEnglishMap: { [key: string]: string } = {
    '美食': 'Gourmet Food',
    '健身': 'Fitness',
    '動漫': 'Anime',
    '電玩': 'Video Games',
    '唱歌': 'Singing',
    '旅遊': 'Travel',
    'グルメ': 'Gourmet Food',
    'フィットネス': 'Fitness',
    'アニメ': 'Anime',
    'ゲーム': 'Video Games',
    '歌うこと': 'Singing',
    '旅行': 'Travel',
};

const interestIcons: { [key: string]: React.ReactNode } = {
    'Gourmet Food': <span className="material-symbols-outlined text-3xl mb-2 text-cyan-400" aria-hidden="true">ramen_dining</span>,
    'Fitness': <span className="material-symbols-outlined text-3xl mb-2 text-cyan-400" aria-hidden="true">fitness_center</span>,
    'Anime': <span className="material-symbols-outlined text-3xl mb-2 text-cyan-400" aria-hidden="true">live_tv</span>,
    'Video Games': <span className="material-symbols-outlined text-3xl mb-2 text-cyan-400" aria-hidden="true">sports_esports</span>,
    'Singing': <span className="material-symbols-outlined text-3xl mb-2 text-cyan-400" aria-hidden="true">mic</span>,
    'Travel': <span className="material-symbols-outlined text-3xl mb-2 text-cyan-400" aria-hidden="true">travel</span>,
};

const getInterestIcon = (interest: string) => {
    const englishInterest = interestEnglishMap[interest] || interest;
    return interestIcons[englishInterest] || <div />;
}


const AboutPage: React.FC = () => {
  const t = useTranslations();
  const portfolioData = t.portfolio;
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const cubeImages = [
      '/images/20250306_195149.jpg',   // front (original avatar)
      '/images/IMG_9465.jpg', // back
      '/images/IMG_9464.jpg', // right
      '/images/20250308_152247.jpg', // left
      '/images/DSCF6611.jpg', // top
      '/images/DSCF4170.jpg',    // bottom
  ];

  const handleCardClick = (index: number) => {
    if (portfolioData.certifications) {
        setSelectedCert(portfolioData.certifications[index]);
    }
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <div className="space-y-20">
      <section>
        <SectionHeader title={t.sections.about.title} />
        <AnimatedOnScroll>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1 flex justify-center items-center min-h-[250px]">
                  <HoloCube imageSrcs={cubeImages} />
                </div>
                <div className="md:col-span-2 text-slate-400 space-y-4 text-left self-center">
                    {portfolioData.bio.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                </div>
            </div>
        </AnimatedOnScroll>
      </section>

      <section>
        <SectionHeader title={t.sections.skills.title} subtitle={t.sections.skills.subtitle} />
        <div className="max-w-5xl mx-auto p-4 md:p-8 rounded-lg bg-slate-800/20 border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <AnimatedOnScroll>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-200 mb-6">{t.sections.skills.techSkills}</h3>
                  <div className="space-y-6">
                    {portfolioData.skills.map((skill) => (
                      <SkillBar key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>
              </AnimatedOnScroll>
              <AnimatedOnScroll delay={150}>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-200 mb-6">{t.sections.skills.languages}</h3>
                   <div className="space-y-6">
                    {portfolioData.languages.map((language) => (
                      <SkillBar key={language.name} skill={language} />
                    ))}
                  </div>
                </div>
              </AnimatedOnScroll>
            </div>
        </div>
      </section>
      
      {portfolioData.certifications && portfolioData.certifications.length > 0 && (
        <section>
          <SectionHeader title={t.sections.certifications.title} />
          <AnimatedOnScroll>
            <Carousel onCenterItemClick={handleCardClick}>
              {portfolioData.certifications.map((cert, index) => (
                <CertificationCard key={index} certification={cert} />
              ))}
            </Carousel>
          </AnimatedOnScroll>
        </section>
      )}

      {portfolioData.honors && (
        <section>
            <SectionHeader title={t.sections.honors.title} />
            <AnimatedOnScroll>
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {portfolioData.honors.map((honor, index) => (
                        <InfoCard key={index} icon={<span className="material-symbols-outlined text-3xl mb-2 text-cyan-400" aria-hidden="true">workspace_premium</span>}>
                            {honor}
                        </InfoCard>
                        ))}
                    </div>
                </div>
            </AnimatedOnScroll>
        </section>
      )}
      
      {portfolioData.interests && (
        <section>
            <SectionHeader title={t.sections.interests.title} />
            <AnimatedOnScroll>
                <div className="max-w-5xl mx-auto">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {portfolioData.interests.map((interest, index) => (
                      <InfoCard key={index} icon={getInterestIcon(interest)}>
                        {interest}
                      </InfoCard>
                    ))}
                  </div>
                </div>
            </AnimatedOnScroll>
        </section>
      )}

      {selectedCert && (
        <Modal isOpen={!!selectedCert} onClose={closeModal}>
            <div className="p-4 sm:p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                <div className="w-full aspect-[16/9] rounded-lg overflow-hidden border-2 border-slate-700 shadow-lg bg-slate-900 flex items-center justify-center">
                    <img src={selectedCert.imageUrl} alt={selectedCert.name} className="w-full h-full object-contain" />
                </div>
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-100">{selectedCert.name}</h2>
                    <p className="text-lg text-cyan-400">{selectedCert.issuer}</p>
                    <p className="text-sm text-slate-500">{selectedCert.date}</p>
                    
                    {selectedCert.verifyUrl && selectedCert.verifyUrl !== '#' && (
                        <a 
                            data-interactive
                            href={selectedCert.verifyUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-md text-base font-medium hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/20"
                        >
                            <span>Verify Credential</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </a>
                    )}
                </div>
            </div>
        </Modal>
      )}

    </div>
  );
};

export default AboutPage;