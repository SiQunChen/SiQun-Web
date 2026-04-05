import { TranslationData } from '../types';

export const translations: TranslationData = {
  portfolio: {
    name: 'Siqun Chen',
    tagline: 'B.S. in CSIE, NTUT & M.S. Student in EOE, NTU',
    bio: [
      "I have many hobbies, but they're just that—hobbies. My real goal is to become an engineer irreplaceable by AI, enjoying a stable income, a steady partner, and a good quality of life. Oh, and I must have a dog. I also want to be surrounded by friends who'll join me for wild adventures and fun, living a happy life all the way to retirement."
    ],
    skills: [
      { name: 'Machine Learning #Scikit-learn, Transformers, RL, LSTM, XGBoost, GAN' },
      { name: 'Data Analysis #Pandas, NumPy, Matplotlib/Seaborn' },
      { name: 'Web Development #PHP, MySQL, PostgreSQL' },
    ],
    languages: [
      { name: 'Mandarin (Native)', proficiency: 'native' },
      { name: 'Taiwanese Hokkien', proficiency: 'fluent' },
      { name: 'English', proficiency: 'intermediate' },
      { name: 'Japanese', proficiency: 'beginner' },
    ],
    projects: [
      {
        title: 'ICAN Chiller AI Energy-Saving Strategy Platform',
        description: 'Simulates chiller operations, combines GAN to expand simulated data, and uses Reinforcement Learning and XGBoost to predict optimal energy-saving strategies based on electricity prices. Integrates bounded-error compression to greatly improve transmission efficiency while maintaining data accuracy.',
        tags: ['RL', 'GAN', 'XGBoost'],
        imageUrl: '/images/chiller-energy-saving.png',
        liveUrl: 'https://ntuchiller.site/auth/login',
      },
      {
        title: 'HERO',
        description: 'A digital household disaster preparedness supply management system supporting OCR scanning, expiry tracking and expiration alerts, with automatic calculation of supply gaps based on Taiwan\'s official civil defense recommendations.',
        tags: ['Flask', 'Jinja2', 'SQLite', 'OCR'],
        imageUrl: '/images/hero.png',
        githubUrl: 'https://github.com/SiQunChen/HERO'
      },
      {
        title: 'Gan Woo Ya (Movie Finder)',
        description: 'An aggregated real-time movie information platform covering large, medium, and small cinemas, allowing you to compare showtimes, distances, and prices at a glance to quickly find the movie you want.',
        tags: ['Python', 'React', 'TypeScript', 'Vite', 'Tailwind CSS'],
        imageUrl: '/images/gan-woo-ya.jpg',
        githubUrl: 'https://github.com/SiQunChen/Gan-Woo-Ya',
        liveUrl: 'https://gan-woo-ya.pages.dev/',
      },
      {
        title: 'NTU Eats | What to Eat at NTU',
        description: 'A web app to help you decide what to eat near National Taiwan University. Features multi-dimensional filtering, real-time distance calculation, and a random picker for the indecisive.',
        tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Geolocation'],
        imageUrl: '/images/ntu-eats-preview.png',
        githubUrl: 'https://github.com/SiQunChen/ntu-eats',
        liveUrl: 'https://ntu-eats.pages.dev/',
      },
      {
        title: 'Time-Coordinator',
        description: 'A simple, intuitive online scheduling tool designed to help teams quickly find the best time for everyone. Create events, share links, and easily view all participants\' available time slots.',
        tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
        imageUrl: '/images/time-coordinator.png',
        githubUrl: 'https://github.com/SiQunChen/Time-Coordinator',
        liveUrl: 'https://time-coordinator.pages.dev/',
      },
      {
        title: 'Integrated Network Intrusion Detection and Alert System',
        description: 'University capstone project utilizing language models to analyze network packets for real-time detection of malicious attacks.',
        tags: ['SimpleTransformer', 'Docker', 'TShark', 'CICFlowMeter', 'ALBERT'],
        imageUrl: '/images/capstone-project.png',
      },
      {
        title: 'EMOMO Shopping Website',
        description: 'Database systems final project simulating an e-commerce website with product management, order management, and member management features for deeper understanding of database operations.',
        tags: ['PHP', 'MySQL'],
        imageUrl: '/images/emomo.png',
        githubUrl: 'https://github.com/SiQunChen/EMOMO',
      },
      {
        title: 'Classroom Flirting (Game)',
        description: 'Object-oriented programming final project recreating a classic childhood web game, using OOP concepts to design characters, items, and levels as separate classes with inheritance and composition.',
        tags: ['C++'],
        imageUrl: '/images/classroom-flirting.png',
        githubUrl: 'https://github.com/SiQunChen/classroom-flirting',
      },
      {
        title: 'Article Summarization',
        description: 'NLP and text mining final project, a first attempt at using machine learning for article summarization.',
        tags: ['Python', 'TensorFlow', 'RNN', 'Seq2Seq', 'Scikit-learn'],
        imageUrl: '/images/article-abstract.png',
      },
      {
        title: 'Multi-Function Image Recognition System',
        description: 'Multimedia technology final project featuring a vehicle that detects and tracks white lane lines to maintain straight driving, while also recognizing road signs via real-time image analysis to perform actions like slowing down, turning, or stopping.',
        tags: ['YOLOv4', 'Python'],
        imageUrl: '/images/carcar.png',
      },
      {
        title: 'Social Media Platform',
        description: 'Web programming final project — a simple social platform where users can publish posts, leave comments, like content, and interact with other users.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
        imageUrl: '/images/social-media.png',
        githubUrl: 'https://github.com/SiQunChen/Web_hw/tree/main/FinalProject',
      },
      {
        title: 'AR Interactive Sustainable Energy Teaching Material',
        description: 'Led the development of an AR-based environmental education tool at the national hackathon, using AR cameras to capture physical cards and models to trigger virtual information and mini-games for eco-education.',
        tags: ['AR Vuforia', 'Unity', 'ESP8266 Dev Board'],
        imageUrl: '/images/tech-hackathon.png',
      },
      {
        title: 'Zuvio Auto Attendance System',
        description: 'Network programming final project using Python web scraping to automatically log in and take attendance on Zuvio.',
        tags: ['Python', 'BeautifulSoup4', 'Webdriver Manager', 'Selenium'],
        imageUrl: '/images/zuvio-attendance.png',
      },
      {
        title: 'Drone Synchronized Dance',
        description: 'Smart space interaction programming final project — programmed four Hummingbird drones in Scratch to perform a synchronized dance routine to music.',
        tags: ['Humming Bird EDU', 'Scratch'],
        imageUrl: '/images/drone-dancing.png',
      },
      {
        title: 'Education Level vs. Employment Rate Analysis',
        description: 'Educational data mining final project using Python to analyze the correlation between education levels and employment rates.',
        tags: ['Python', 'SciPy', 'Matplotlib'],
        imageUrl: '/images/education-employment.png',
      },
      {
        title: 'Font Design',
        description: 'Font design and text encoding final project — hand-wrote over 5,000 Chinese characters as base data and trained a generative model with TensorFlow to synthesize a personalized, highly generalizable font.',
        tags: ['Python', 'TensorFlow', 'PyTorch', 'LPIPS', 'Pillow'],
        imageUrl: '/images/font-design.png',
      },
    ],
    experience: [
      {
        role: 'Industry-Academia Collaboration Intern',
        company: 'Raimen Data Service Co., Ltd.',
        period: 'Jul 2025 - Present',
        description: [
          'Assisted in data analysis and web development.',
        ],
      },
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
      'Gourmet Food', 'Fitness', 'Anime', 'Baseball', 'Singing', 'Travel'
    ],
    honors: [
      "Dean's List (Two times)",
      'Vocational Hackathon, Northern Regional - Best Design Award',
      'National Skills Competition, Central Regional - Robotics Category — Honorable Mention',
      'Taichung City 109th Academic Year Model Student'
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
    skills: { title: 'Skills & Languages', subtitle: '', techSkills: 'Technical Skills', languages: 'Languages', proficiencyLabels: { native: 'Native', fluent: 'Fluent', intermediate: 'Intermediate', beginner: 'Beginner' } },
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
