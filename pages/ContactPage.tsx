
import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { useTranslations } from '../contexts/LanguageContext';

const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github" {...props}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const LineIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle" {...props}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
);

const CheckCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
  
const ExclamationCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
    </svg>
);


const ContactPage: React.FC = () => {
    const t = useTranslations();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitState, setSubmitState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState('');


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (submitState === 'sending') return;

        if (!formData.name || !formData.email || !formData.message) {
            setSubmitState('error');
            setStatusMessage(t.sections.contact.form.status.error);
            setTimeout(() => setSubmitState('idle'), 4000);
            return;
        }

        setSubmitState('sending');
        setTimeout(() => {
            setSubmitState('success');
            setStatusMessage(t.sections.contact.form.status.success(formData.name));
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setSubmitState('idle'), 4000);
        }, 1500);
    };

    const isSending = submitState === 'sending';
    const isSuccess = submitState === 'success';
    const isError = submitState === 'error';

    return (
        <div>
            <SectionHeader 
                title={t.sections.contact.title}
                subtitle={t.sections.contact.subtitle}
            />

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-slate-200">{t.sections.contact.contactInfo}</h3>
                    <p className="text-slate-400">
                       {t.sections.contact.contactInfoText}
                    </p>
                    <div className="space-y-4">
                       <a data-interactive href={`mailto:${t.portfolio.contact.email}`} className="flex items-center space-x-3 text-slate-400 hover:text-cyan-400 transition-colors group">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail text-cyan-400/50 group-hover:text-cyan-400 transition-colors"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            <span>{t.portfolio.contact.email}</span>
                        </a>
                        <a data-interactive href={t.portfolio.contact.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-slate-400 hover:text-cyan-400 transition-colors group">
                            <InstagramIcon className="text-cyan-400/50 group-hover:text-cyan-400 transition-colors" />
                            <span>{t.sections.contact.instagramProfile}</span>
                        </a>
                        <a data-interactive href={t.portfolio.contact.line} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-slate-400 hover:text-cyan-400 transition-colors group">
                            <LineIcon className="text-cyan-400/50 group-hover:text-cyan-400 transition-colors" />
                            <span>{t.sections.contact.lineProfile}</span>
                        </a>
                        <a data-interactive href={t.portfolio.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-slate-400 hover:text-cyan-400 transition-colors group">
                            <GitHubIcon className="text-cyan-400/50 group-hover:text-cyan-400 transition-colors" />
                            <span>{t.sections.contact.githubProfile}</span>
                        </a>
                    </div>
                </div>
                <div>
                    <form onSubmit={handleSubmit} className="space-y-8 futuristic-form" noValidate>
                        <div className="form-group">
                            <input data-interactive type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="form-input" placeholder=" " />
                            <label htmlFor="name" className="form-label">{t.sections.contact.form.name}</label>
                        </div>
                        <div className="form-group">
                            <input data-interactive type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="form-input" placeholder=" " />
                            <label htmlFor="email" className="form-label">{t.sections.contact.form.email}</label>
                        </div>
                        <div className="form-group">
                            <textarea data-interactive name="message" id="message" rows={4} value={formData.message} onChange={handleChange} required className="form-input" placeholder=" "></textarea>
                            <label htmlFor="message" className="form-label">{t.sections.contact.form.message}</label>
                        </div>
                        <div>
                             <button data-interactive type="submit" disabled={isSending} className="w-full h-[50px] relative bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-md text-base font-medium hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/20 submit-btn">
                                {isSending ? <div className="spinner"></div> : <span className="btn-text">{t.buttons.sendMessage}</span>}
                            </button>
                        </div>
                        {(isSuccess || isError) && (
                             <div className={`status-message ${isSuccess ? 'status-success' : ''} ${isError ? 'status-error' : ''}`}>
                                {isSuccess && <CheckCircleIcon className="w-5 h-5" />}
                                {isError && <ExclamationCircleIcon className="w-5 h-5" />}
                                <span>{statusMessage}</span>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;