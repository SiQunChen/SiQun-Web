import React from 'react';
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

const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail" {...props}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const ContactPage: React.FC = () => {
    const t = useTranslations();

    const contactMethods = [
        {
            icon: <MailIcon className="w-10 h-10 mb-4 text-cyan-400 group-hover:text-white transition-colors" />,
            title: "Email",
            value: t.portfolio.contact.email,
            href: `mailto:${t.portfolio.contact.email}`
        },
        {
            icon: <InstagramIcon className="w-10 h-10 mb-4 text-cyan-400 group-hover:text-white transition-colors" />,
            title: t.sections.contact.instagramProfile,
            value: "@qunnn_0331",
            href: t.portfolio.contact.instagram
        },
        {
            icon: <LineIcon className="w-10 h-10 mb-4 text-cyan-400 group-hover:text-white transition-colors" />,
            title: t.sections.contact.lineProfile,
            value: "點擊以加入好友",
            href: t.portfolio.contact.line
        },
        {
            icon: <GitHubIcon className="w-10 h-10 mb-4 text-cyan-400 group-hover:text-white transition-colors" />,
            title: t.sections.contact.githubProfile,
            value: "SiQunChen",
            href: t.portfolio.contact.github
        }
    ];

    return (
        <div>
            <SectionHeader 
                title={t.sections.contact.title}
                subtitle={t.sections.contact.subtitle}
            />

            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h3 className="text-2xl font-semibold text-slate-200">{t.sections.contact.contactInfo}</h3>
                    <p className="text-slate-400 mt-2 max-w-2xl mx-auto">
                       {t.sections.contact.contactInfoText}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {contactMethods.map((method, index) => (
                        <a 
                            key={index}
                            data-interactive 
                            href={method.href} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="contact-card group"
                        >
                            {method.icon}
                            <h4 className="text-lg font-semibold text-slate-200 group-hover:text-white transition-colors">{method.title}</h4>
                            <p className="text-sm text-slate-400 break-all">{method.value}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactPage;