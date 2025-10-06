import { TranslationData } from '../types';

export const translations: TranslationData = {
  portfolio: {
    name: 'Siqun Chen',
    tagline: 'B.S. in CSIE, NTUT & M.S. Student in EOE, NTU',
    bio: [
      "I have many hobbies, but they're just that—hobbies. My real goal is to become an engineer irreplaceable by AI, enjoying a stable income, a steady partner, and flexible work. Oh, and I must have a dog. I also want to be surrounded by friends who'll join me for wild adventures and fun, living an ordinary but fulfilling life all the way to retirement."
    ],
    skills: [
      { name: 'Machine Learning #Scikit-learn, Transformers, RL, LSTM, XGBoost', level: 90 },
      { name: 'Data Analysis #Pandas, NumPy, Matplotlib/Seaborn', level: 85 },
      { name: 'Web Development #PHP, MySQL, PostgreSQL', level: 80 },
    ],
    languages: [
      { name: 'Mandarin (Native)', level: 100 },
      { name: 'Taiwanese Hokkien', level: 70 },
      { name: 'English', level: 60 },
      { name: 'Japanese', level: 10 },
    ],
    projects: [
      {
        title: 'NTU Eats | What to Eat at NTU',
        description: 'A web app to help you decide what to eat near National Taiwan University. Features multi-dimensional filtering, real-time distance calculation, and a random picker for the indecisive.',
        tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Geolocation'],
        imageUrl: '/images/ntu-eats-preview.png', 
        githubUrl: 'https://github.com/SiQunChen/ntu-eats', 
        liveUrl: 'https://ntu-eats.pages.dev/', 
      },
    ],
    experience: [
      {
        role: 'Programming Intern',
        company: 'Winkler Partners, Attorneys at Law',
        period: 'Jul 2024 - Present',
        description: [
          'Responsible for developing and maintaining internal web pages and tools.',
        ],
      },
      {
        role: 'Student Worker',
        company: 'Computer and Network Center, NTUT',
        period: 'Jul 2022 - Jul 2024',
        description: [
          'Assisted with campus network maintenance and troubleshooting.',
          'Provided technical support for hardware and software issues to faculty and students.'
        ],
      },
      {
        role: 'Student Worker',
        company: 'Beseye',
        period: 'Sep 2021 - Dec 2022',
        description: [
          'Assisted in annotating images for model training.',
        ],
      },
    ],
    education: [
      {
        degree: 'M.S. in Engineering Science and Ocean Engineering',
        institution: 'National Taiwan University',
        period: '2025 - Present',
        description: "Learning AI-related technologies in Professor Jui-I Chang's lab, actively participating in projects and competitions."
      },
      {
        degree: 'B.S. in Computer Science and Information Engineering',
        institution: 'National Taipei University of Technology',
        period: '2021 - 2025',
        description: 'Studied various computer science subjects. Final year project: "An Integrated Network Intrusion Detection and Alert System Combining Language Models with Feature Mechanisms".'
      }
    ],
    cadreExperience: [
      {
        role: 'Director of Performing Arts, CSIE Student Association',
        organization: 'National Taipei University of Technology',
        period: 'Sophomore Year (2022 - 2023)',
        description: [
          'Planned and executed performance segments for major department events like orientation and camps.',
          'Coordinated rehearsals and performances for various teams.'
        ]
      },
      {
        role: 'Captain, Department Volleyball & Basketball Teams',
        organization: 'National Taipei University of Technology',
        period: 'Sophomore & Junior Years (2022 - 2024)',
        description: [
          'Led weekly team practices and participated in on-campus competitions.',
          'Developed teamwork and leadership skills.'
        ]
      },
      {
        role: 'Vice Class Rep, PR Director & Student Counselor',
        organization: 'National Taipei University of Technology',
        period: 'Freshman to Senior Years (2021 - 2025)',
        description: [
          'Acted as a liaison between the class and the department office.',
          'Managed publicity and communications for class activities.',
          'Provided academic and personal support to classmates.'
        ]
      },
      {
        role: 'Freshman Orientation Camp Team Leader',
        organization: 'National Taipei University of Technology',
        period: 'Sophomore Year (2023)',
        description: [
          'Served as a team leader at the freshman orientation camp, responsible for guiding team members and planning activities to ensure the event ran smoothly.'
        ]
      }
    ],
    interests: [
      'Gourmet Food', 'Fitness', 'Anime', 'Video Games', 'Singing', 'Travel'
    ],
    honors: [
      "Dean's List (Two times)",
      'Vocational Hackathon, Northern Regional - Best Design Award'
    ],
    certifications: [
      {
        name: 'Junior Information Security Engineer',
        issuer: 'iPAS',
        date: 'Jul 2024',
        imageUrl: '/images/IPAS.jpg',
        verifyUrl: '#',
      },
      {
        name: 'Class B Hardware Repair Technician',
        issuer: 'Workforce Development Agency, Ministry of Labor',
        date: 'Feb 2021',
        imageUrl: '/images/硬體裝修乙級.png',
        verifyUrl: '#',
      },
      {
        name: 'Class C Hardware Repair Technician',
        issuer: 'Workforce Development Agency, Ministry of Labor',
        date: 'Sep 2020',
        imageUrl: '/images/硬體裝修丙級.jpg',
        verifyUrl: '#',
      },
    ],
    contact: {
      email: 'jerry92033119@gmail.com',
      line: 'https://line.me/ti/p/zO_8EBN4A1',
      instagram: 'https://www.instagram.com/qunnn_0331/',
      github: 'https://github.com/SiQunChen',
    },
  },
  nav: {
    about: 'About',
    resume: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
  },
  buttons: {
    downloadCV: 'Download CV',
    viewWork: 'View My Work',
    getInTouch: 'Get In Touch',
    sendMessage: 'Send Message',
    goHome: 'Go back home',
    downloadFullResume: 'Download Full Resume (PDF)',
  },
  sections: {
    about: { title: 'About Me' },
    interests: { title: 'Interests' },
    honors: { title: 'Honors & Awards' },
    certifications: { title: 'Licenses & Certifications' },
    skills: { title: 'Skills & Languages', subtitle: '', techSkills: 'Technical Skills', languages: 'Languages' },
    resume: { title: 'Experience', subtitle: 'A summary of my professional experience, education, and qualifications.', workExperience: 'Work Experience', education: 'Education', cadreExperience: 'Cadre Experience' },
    projects: { title: 'My Projects', subtitle: 'A selection of my work. Feel free to explore the code and live demos.' },
    contact: { 
        title: 'Get In Touch', 
        subtitle: "I'm open to discussing new projects, creative ideas, or opportunities. Feel free to reach out!",
        form: { 
            name: 'Full Name', 
            email: 'Email Address', 
            message: 'Message',
            status: {
                sending: 'Sending...',
                success: (name: string) => `Thank you, ${name}! Your message has been sent.`,
                error: 'Please fill out all fields.'
            }
        },
        contactInfo: 'Contact Information',
        contactInfoText: "You can reach me via email or connect with me on social media. I'll do my best to get back to you as soon as possible.",
        instagramProfile: 'Instagram Profile',
        lineProfile: 'Line Profile',
        githubProfile: 'GitHub Profile',
    },
  },
  notFound: {
      title: 'Page Not Found',
      subtitle: 'Sorry, we couldn’t find the page you’re looking for.',
  },
  footer: {
      rights: 'All Rights Reserved.',
  },
  projectCard: {
      code: 'Code',
      liveDemo: 'Live Demo',
  }
};
