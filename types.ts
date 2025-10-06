
export interface Skill {
  name: string;
  level: number; // Percentage from 0 to 100
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface CadreExperience {
  role: string;
  organization: string;
  period: string;
  description: string[];
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
    description:string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  imageUrl: string;
  verifyUrl?: string;
}

export interface PortfolioData {
  name: string;
  tagline: string;
  bio: string[];
  skills: Skill[];
  languages: Skill[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  cadreExperience?: CadreExperience[];
  interests?: string[];
  honors?: string[];
  certifications?: Certification[];
  contact: {
    email: string;
    line: string;
    instagram: string;
    github: string;
  };
}

// New types for UI translations
export interface Navigation {
  about: string;
  resume: string;
  projects: string;
  contact: string;
}

export interface Buttons {
    downloadCV: string;
    viewWork: string;
    getInTouch: string;
    sendMessage: string;
    goHome: string;
    downloadFullResume: string;
}

export interface Sections {
    about: { title: string; };
    interests: { title: string; };
    honors: { title: string; };
    certifications: { title: string; };
    skills: { title: string; subtitle: string; techSkills: string; languages: string; };
    resume: { title: string; subtitle: string; workExperience: string; education: string; cadreExperience: string; };
    projects: { title: string; subtitle: string; };
    contact: { 
        title: string; 
        subtitle: string;
        form: { 
            name: string; 
            email: string; 
            message: string; 
            status: {
                sending: string;
                success: (name: string) => string;
                error: string;
            }
        },
        contactInfo: string;
        contactInfoText: string;
        instagramProfile: string;
        lineProfile: string;
        githubProfile: string;
    };
}

export interface NotFound {
    title: string;
    subtitle: string;
}

export interface Footer {
    rights: string;
}

export interface ProjectCard {
    code: string;
    liveDemo: string;
}

// Main translation data structure
export interface TranslationData {
  portfolio: PortfolioData;
  nav: Navigation;
  buttons: Buttons;
  sections: Sections;
  notFound: NotFound;
  footer: Footer;
  projectCard: ProjectCard;
}