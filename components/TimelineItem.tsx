import React from 'react';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, subtitle, period, children, style }) => {
  return (
    <div className="relative pl-12 pb-8 group" style={style}>
      {/* Node on the timeline */}
      <div className="timeline-node"></div>
      
      <div className="timeline-item-card">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
          <h3 className="text-xl font-bold text-slate-100">{title}</h3>
          <time className="text-sm font-semibold text-cyan-400 mt-1 sm:mt-0">{period}</time>
        </div>
        <p className="text-md text-slate-400 mb-3">{subtitle}</p>
        <div className="text-slate-400 text-sm">
          {children}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
