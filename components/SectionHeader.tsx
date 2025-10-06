import React from 'react';
import ScrambleText from './ScrambleText';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-400 h-12">
        <ScrambleText>{title}</ScrambleText>
      </h2>
      {subtitle && <p className="mt-3 text-lg text-slate-400 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;