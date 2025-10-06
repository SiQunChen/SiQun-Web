
import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  name: '陳思群 (Siqun Chen)',
  tagline: 'Computer Science Student & Aspiring Computer Vision Engineer',
  bio: [
    'A passionate and self-motivated computer science student with a strong interest in computer vision, machine learning, and software development. I am dedicated to applying my technical skills to solve real-world problems and create impactful solutions.',
    'Currently seeking internship or full-time opportunities where I can contribute to innovative projects and continue to grow as an engineer.'
  ],
  skills: [
    { name: 'Python', level: 95 },
    { name: 'PyTorch & TensorFlow', level: 90 },
    { name: 'Computer Vision (OpenCV)', level: 85 },
    { name: 'React & TypeScript', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'SQL & NoSQL', level: 70 },
  ],
  languages: [
    { name: 'Mandarin (Native)', level: 100 },
    { name: 'English (Fluent)', level: 85 },
  ],
  projects: [
    {
      title: 'Real-time Object Detection System',
      description: 'Developed a high-performance object detection system using YOLOv5, capable of identifying multiple objects in real-time video streams with high accuracy.',
      tags: ['Python', 'PyTorch', 'OpenCV', 'YOLO'],
      imageUrl: 'https://picsum.photos/seed/project1/400/300',
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A fully responsive personal website built with React, TypeScript, and Tailwind CSS to showcase my projects and skills. Designed for performance and aesthetics.',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      imageUrl: 'https://picsum.photos/seed/project2/400/300',
      githubUrl: '#',
    },
    {
      title: 'Image Segmentation for Medical Imaging',
      description: 'Implemented a U-Net based model for semantic segmentation of medical images, achieving a high Dice score for tumor detection in MRI scans.',
      tags: ['Python', 'TensorFlow', 'U-Net', 'Medical Imaging'],
      imageUrl: 'https://picsum.photos/seed/project3/400/300',
      githubUrl: '#',
    },
     {
      title: 'E-commerce Platform API',
      description: 'Designed and built a RESTful API for a mock e-commerce platform using Node.js, Express, and MongoDB, featuring user authentication, product management, and order processing.',
      tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      imageUrl: 'https://picsum.photos/seed/project4/400/300',
      githubUrl: '#',
    },
  ],
  experience: [
    {
      role: 'Machine Learning Intern',
      company: 'Tech Innovations Inc.',
      period: 'Jun 2024 - Aug 2024',
      description: [
        'Contributed to the development of a recommendation engine, improving user engagement by 15%.',
        'Preprocessed and analyzed large datasets to extract meaningful features for model training.',
        'Collaborated with senior engineers to deploy models into a production environment using Docker.'
      ],
    },
     {
      role: 'Teaching Assistant - Intro to Programming',
      company: 'National Taiwan University',
      period: 'Sep 2023 - Jan 2024',
      description: [
        'Led weekly lab sessions for a class of 50+ students, explaining core programming concepts in Python.',
        'Graded assignments and provided constructive feedback to help students improve their coding skills.',
        'Held office hours to provide one-on-one assistance and debugging support.'
      ],
    },
  ],
  education: [
    {
        degree: 'B.S. in Computer Science and Information Engineering',
        institution: 'National Taiwan University',
        period: '2021 - 2025',
        description: 'Concentration in Artificial Intelligence and Machine Learning. Relevant coursework: Data Structures, Algorithms, Computer Vision, Deep Learning.'
    }
  ],
  interests: [
    'Computer Vision',
    'Photography',
    'Hiking',
    'Sci-Fi Novels',
    'Indie Music',
    '3D Modeling'
  ],
  honors: [
    "Dean's List - College of Engineering (4 semesters)",
    'First Place, NTU Annual Hackathon 2023',
    'Presidential Award for Academic Excellence',
    'Recipient of the XYZ Tech Scholarship 2024'
  ],
  contact: {
    email: 'jerry92033119@gmail.com',
    line: 'https://line.me/ti/p/zO_8EBN4A1',
    instagram: 'https://www.instagram.com/qunnn_0331/',
    github: 'https://github.com/SiQunChen',
  },
};
