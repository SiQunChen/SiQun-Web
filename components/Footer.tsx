
import React from 'react';
import { useTranslations } from '../contexts/LanguageContext';

const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const LineIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);


const Footer: React.FC = () => {
  const t = useTranslations();
  const { contact } = t.portfolio;

  return (
    <footer className="bg-transparent border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex space-x-6">
            <a data-interactive href={contact.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-all transform hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
              <GitHubIcon />
            </a>
            <a data-interactive href={contact.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-all transform hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
              <InstagramIcon />
            </a>
             <a data-interactive href={contact.line} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-all transform hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
              <LineIcon />
            </a>
             <a data-interactive href={`mailto:${contact.email}`} className="text-slate-400 hover:text-cyan-400 transition-all transform hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
              <MailIcon />
            </a>
          </div>
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {t.portfolio.name.split(' (')[0]}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;