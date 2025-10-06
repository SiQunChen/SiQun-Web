import React from 'react';
import { Certification } from '../types';

const CertificationCard: React.FC<{ certification: Certification }> = ({ certification }) => {
  return (
    <div className="certification-card" data-interactive>
        <div className="certification-card-img-container">
            <img src={certification.imageUrl} alt={certification.name} loading="lazy" />
        </div>
        <div className="certification-card-content">
            <h3 className="text-lg font-bold text-slate-100 mb-1">{certification.name}</h3>
            <p className="text-sm text-cyan-400 mb-2">{certification.issuer}</p>
            <p className="text-xs text-slate-500 mb-4">{certification.date}</p>
        </div>
    </div>
  );
};

export default CertificationCard;
