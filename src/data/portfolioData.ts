import { Project, TechSkill, ExperienceItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Ashmit Saxena',
  shortName: 'Ashmit',
  brandName: 'Ashmit.dev',
  headlineTitle: "Ashmit Saxena",
  headlineSub: 'Full-Stack Developer | AI Enthusiast | AR & Game Developer',
  bio: 'Computer Science undergraduate passionate about Full-Stack Web Development, Artificial Intelligence, Augmented Reality, and Game Development. I enjoy building modern applications that combine great user experiences with scalable backend systems.',
  aboutDetail: "I'm a Computer Science undergraduate with a passion for software engineering, AI, and immersive technologies. I specialize in full-stack web development using React, Node.js, Express.js, MongoDB, and TypeScript, while also building AI-powered applications and AR experiences using Unity. I enjoy solving real-world problems, learning new technologies, and creating impactful digital products.",
  location: 'India',
  timezone: 'IST (GMT+5:30)',
  email: 'saxenaashmit85@gmail.com',
  availableForWork: true,
  avatarUrl: '/profile.jpg',
  journeyPortrait: '/profile.jpg',
  quote: '"The best way to predict the future is to build it — with clean code, intelligent AI, and immersive experiences."',
  socials: {
    github: 'https://github.com/ashmittt08',
    linkedin: 'https://linkedin.com/in/ashmit-saxena08',
    email: 'mailto:saxenaashmit85@gmail.com'
  }
};

export const PASSIONS = [
  {
    title: 'Full-Stack Web Development',
    desc: 'Building responsive frontends with React & TypeScript paired with robust Node.js/Express backends and databases.',
    icon: 'Code2',
    color: 'primary'
  },
  {
    title: 'Artificial Intelligence & GenAI',
    desc: 'Integrating LLMs, prompt engineering, and generative AI APIs to craft intelligent, adaptive user experiences.',
    icon: 'Sparkles',
    color: 'secondary'
  },
  {
    title: 'Augmented Reality & Gaming',
    desc: 'Creating interactive 3D AR applications using Unity, C#, Vuforia SDK, and Blender for interactive visualization.',
    icon: 'Gamepad2',
    color: 'tertiary'
  },
  {
    title: 'Software Engineering & Architecture',
    desc: 'Designing modular, maintainable software systems with clean API abstractions and secure authentication.',
    icon: 'Cpu',
    color: 'primary'
  },
  {
    title: 'Building Scalable Applications',
    desc: 'Optimizing performance, database indexing, ORM queries, and state management for seamless scaling.',
    icon: 'Layers',
    color: 'secondary'
  },
  {
    title: 'Problem Solving & Competitive Dev',
    desc: 'Solving algorithmic challenges, mastering data structures, and continuously sharpening core C++ and JS fundamentals.',
    icon: 'Terminal',
    color: 'tertiary'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'mockmate',
    title: 'MockMate 🤖',
    category: 'AI',
    tags: ['AI PLATFORM', 'GEMINI AI', 'REACT', 'TYPESCRIPT', 'POSTGRESQL', 'PRISMA'],
    description: 'An AI-powered mock interview platform that simulates real interview experiences, evaluates responses, and provides intelligent feedback.',
    longDescription: 'MockMate is an intelligent interview preparation platform designed to help users sharpen technical and behavioral communication skills. Powered by Google Gemini AI, it generates domain-tailored questions, analyzes responses in real time, scores candidate performance, and provides actionable feedback.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200',
    githubUrl: 'https://github.com/ashmittt08/MockMate',
    featured: true,
    gridSpan: 'wide',
    metrics: ['Gemini AI Question Generation', 'Real-time Evaluation Engine', 'PostgreSQL & Prisma ORM'],
    keyFeatures: [
      'AI-generated interview questions customized to job role & seniority',
      'Intelligent answer evaluation scoring communication and domain accuracy',
      'Secure Firebase authentication & persistent interview session history',
      'Full-stack architecture built with React, Node.js, Express, and Prisma'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'Firebase Auth', 'Gemini AI', 'REST APIs']
  },
  {
    id: 'mentorboard',
    title: 'MentorBoard 🎓',
    category: 'Fullstack',
    tags: ['FULLSTACK', 'REACT', 'TYPESCRIPT', 'NODE.JS', 'MONGODB', 'JWT'],
    description: 'A collaborative internship management platform featuring JWT authentication, role-based access, Kanban boards, and analytics dashboards.',
    longDescription: 'MentorBoard streamlines intern tracking and mentorship workflows. It provides real-time drag-and-drop Kanban task boards, role-based permissions for mentors and interns, progress analytics, and secure JWT authentication.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200',
    demoUrl: 'https://mentor-board-zeta.vercel.app',
    githubUrl: 'https://github.com/ashmittt08/MentorBoard',
    featured: true,
    gridSpan: 'normal',
    metrics: ['Interactive Kanban Workspace', 'JWT Role Authorization', 'Live on Vercel'],
    keyFeatures: [
      'Drag-and-drop Kanban board for milestone & task tracking',
      'Role-based authorization (Mentor vs Intern access controls)',
      'Analytics dashboard summarizing intern output & task velocity',
      'MongoDB database schemas and RESTful backend APIs'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS']
  },
  {
    id: 'smooth-ai',
    title: 'Smooth AI ⚡',
    category: 'AI',
    tags: ['AI', 'REACT', 'TYPESCRIPT', 'GEN AI WORKFLOWS', 'TAILWIND'],
    description: 'An AI-powered web application focused on providing intelligent user interactions through modern generative AI workflows.',
    longDescription: 'Smooth AI offers a sleek, high-speed interface for generative AI interactions. Built with React and TypeScript, it handles prompt streams, context memory, and custom AI API workflows in a responsive dark studio UI.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200',
    demoUrl: 'https://smoothai-nine.vercel.app',
    githubUrl: 'https://github.com/ashmittt08/smooth.ai',
    featured: true,
    gridSpan: 'normal',
    metrics: ['Streaming GenAI Output', 'Sub-second Response Times', 'Tailwind Obsidian Theme'],
    keyFeatures: [
      'Generative AI prompt pipeline with real-time response rendering',
      'Clean obsidian workspace UI tailored for fast developer interaction',
      'Stateful session history and prompt preset switching'
    ],
    techStack: ['React', 'TypeScript', 'AI APIs', 'Tailwind CSS']
  },
  {
    id: 'ecoverse-ar',
    title: 'EcoVerse AR 🌿',
    category: 'AR & Gaming',
    tags: ['AR', 'UNITY', 'C#', 'VUFORIA SDK', 'BLENDER', '3D'],
    description: 'An educational AR application built with Unity and Vuforia that enables interactive learning through image recognition and 3D visualization.',
    longDescription: 'EcoVerse AR brings environmental education to life by rendering interactive 3D ecosystems over physical target images. Students can inspect low-poly models created in Blender, trigger animations, and explore ecological concepts.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200',
    githubUrl: 'https://github.com/ashmittt08/EcoVerse_ar',
    featured: true,
    gridSpan: 'normal',
    metrics: ['Vuforia Target Tracking', 'Custom Blender 3D Assets', 'Interactive Unity Scripts'],
    keyFeatures: [
      'Target image detection and tracking using Vuforia Engine SDK',
      'Hand-crafted 3D environmental models created in Blender',
      'Interactive C# scripts for touch controls, audio cues, and visual overlays'
    ],
    techStack: ['Unity', 'C#', 'Blender', 'Vuforia SDK']
  },
  {
    id: 'ar-business-card',
    title: 'AR Business Card 💳',
    category: 'AR & Gaming',
    tags: ['AR', 'UNITY', 'C#', 'VUFORIA', 'MOBILE AR'],
    description: 'An interactive AR business card that overlays digital content, social profiles, and contact information onto a physical card.',
    longDescription: 'An innovative augmented reality networking application that displays interactive 3D profile elements, floating social links, and direct contact buttons when a mobile device camera scans a physical business card.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200',
    githubUrl: 'https://github.com/ashmittt08/BusinessCard_Ar',
    featured: false,
    gridSpan: 'normal',
    metrics: ['Instant Target Recognition', 'Interactive 3D UI', 'Mobile Camera Tracking'],
    keyFeatures: [
      'Fast image target recognition on physical cards via Vuforia',
      'Floating 3D buttons linked to LinkedIn, GitHub, and email',
      'Cross-platform Unity project optimized for mobile devices'
    ],
    techStack: ['Unity', 'C#', 'Vuforia SDK']
  }
];

export const TECH_SKILLS: TechSkill[] = [
  // Languages
  {
    id: 'cpp',
    name: 'C++',
    category: 'Languages',
    icon: 'Terminal',
    description: 'Object-oriented programming, data structures, competitive programming & low-level concepts.',
    proficiency: 90,
    color: 'primary'
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Languages',
    icon: 'Code2',
    description: 'Scripting, AI model integrations, data analysis & backend automation.',
    proficiency: 88,
    color: 'primary'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Languages',
    icon: 'FileCode',
    description: 'ES6+, async/await, DOM manipulation, closures, and modern web APIs.',
    proficiency: 95,
    color: 'secondary'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Languages',
    icon: 'FileCode',
    description: 'Strict typing, generic utility types, interface contracts & API schemas.',
    proficiency: 92,
    color: 'secondary'
  },
  {
    id: 'csharp',
    name: 'C#',
    category: 'Languages',
    icon: 'Cpu',
    description: 'Unity game scripting, OOP architecture, async tasks & AR logic.',
    proficiency: 85,
    color: 'tertiary'
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'Languages',
    icon: 'Database',
    description: 'Relational queries, database indexing, joins, and schema normalization.',
    proficiency: 88,
    color: 'tertiary'
  },

  // Frontend
  {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    icon: 'Atom',
    description: 'Component lifecycles, custom hooks, state management, SPA routing.',
    proficiency: 94,
    color: 'primary'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'Frontend',
    icon: 'Palette',
    description: 'Utility-first layout design, glassmorphism, responsive breakpoints & dark themes.',
    proficiency: 96,
    color: 'primary'
  },
  {
    id: 'zustand',
    name: 'Zustand',
    category: 'Frontend',
    icon: 'Layers',
    description: 'Lightweight client-side state management and store selectors.',
    proficiency: 88,
    color: 'secondary'
  },
  {
    id: 'recharts',
    name: 'Recharts',
    category: 'Frontend',
    icon: 'BarChart3',
    description: 'Interactive analytics dashboards, custom chart components & data visualization.',
    proficiency: 85,
    color: 'tertiary'
  },

  // Backend
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend',
    icon: 'Server',
    description: 'Event-driven backend services, REST APIs, npm ecosystem, asynchronous I/O.',
    proficiency: 92,
    color: 'primary'
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'Backend',
    icon: 'Server',
    description: 'RESTful API routing, custom middleware, error handling, CORS & security headers.',
    proficiency: 92,
    color: 'primary'
  },
  {
    id: 'jwt',
    name: 'JWT Authentication',
    category: 'Backend',
    icon: 'ShieldCheck',
    description: 'Token-based authentication, stateless session validation & authorization middleware.',
    proficiency: 90,
    color: 'secondary'
  },

  // Database & ORM
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'Database & ORM',
    icon: 'Database',
    description: 'NoSQL document modeling, aggregation pipelines, Mongoose schemas & indexing.',
    proficiency: 90,
    color: 'primary'
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'Database & ORM',
    icon: 'Database',
    description: 'Relational database schema design, ACID transactions, and query optimization.',
    proficiency: 88,
    color: 'primary'
  },
  {
    id: 'prisma',
    name: 'Prisma ORM',
    category: 'Database & ORM',
    icon: 'FileCode',
    description: 'Type-safe database queries, schema migrations, and relational mapping.',
    proficiency: 86,
    color: 'secondary'
  },
  {
    id: 'firebase',
    name: 'Firebase',
    category: 'Database & ORM',
    icon: 'Flame',
    description: 'Firebase Authentication, Firestore real-time database & hosting integration.',
    proficiency: 85,
    color: 'tertiary'
  },

  // Tools & AR
  {
    id: 'unity',
    name: 'Unity',
    category: 'Tools & AR',
    icon: 'Gamepad2',
    description: '3D game development, AR scene setup, physics, lighting & mobile build pipelines.',
    proficiency: 86,
    color: 'primary'
  },
  {
    id: 'vuforia',
    name: 'Vuforia SDK',
    category: 'Tools & AR',
    icon: 'Eye',
    description: 'Augmented reality target image tracking, 3D model positioning & camera feeds.',
    proficiency: 84,
    color: 'secondary'
  },
  {
    id: 'blender',
    name: 'Blender',
    category: 'Tools & AR',
    icon: 'Box',
    description: 'Low-poly 3D modeling, UV unwrapping, material shaders & asset export for Unity.',
    proficiency: 78,
    color: 'tertiary'
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    category: 'Tools & AR',
    icon: 'GitBranch',
    description: 'Version control workflows, pull requests, branch protection & GitHub Actions.',
    proficiency: 94,
    color: 'primary'
  },
  {
    id: 'postman',
    name: 'Postman',
    category: 'Tools & AR',
    icon: 'Send',
    description: 'REST API testing, collection documentation, environment variables & request scripts.',
    proficiency: 90,
    color: 'secondary'
  },
  {
    id: 'deployment',
    name: 'Vercel & Render',
    category: 'Tools & AR',
    icon: 'Globe',
    description: 'Frontend CI/CD deployments, environment configuration & web hosting.',
    proficiency: 90,
    color: 'tertiary'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    period: '2023 — Present',
    role: 'Full-Stack & AI Developer (Projects)',
    company: 'Independent Developer',
    location: 'Bhopal, India',
    description: 'Architecting and deploying web applications combining React, Node.js, Express, PostgreSQL, and Google Gemini AI.',
    highlights: [
      'Built MockMate, an AI interview platform featuring Gemini AI evaluation and Prisma ORM backend',
      'Developed MentorBoard, a collaborative internship management web app deployed on Vercel',
      'Created Smooth AI, an obsidian-style AI interface supporting stream responses'
    ],
    type: 'work'
  },
  {
    id: 'exp-2',
    period: '2023 — 2024',
    role: 'AR & Unity Developer',
    company: 'Immersive Tech Projects',
    location: 'India',
    description: 'Designing augmented reality applications using Unity 3D engine, Vuforia SDK, C# scripts, and Blender 3D models.',
    highlights: [
      'Engineered EcoVerse AR, an educational AR target-tracking app with Blender 3D models',
      'Created an AR Business Card application projecting interactive 3D social links onto physical cards'
    ],
    type: 'work'
  }
];

export const EDUCATION: ExperienceItem[] = [
  {
    id: 'edu-1',
    period: '2022 — Present',
    role: 'B.Tech in Computer Science & Engineering',
    company: 'Computer Science Department',
    location: 'India',
    description: 'Focusing on Software Engineering, Data Structures & Algorithms, Full-Stack Web Development, Artificial Intelligence, and Computer Graphics.',
    highlights: [
      'Hands-on expertise in MERN stack, PostgreSQL, and Gemini AI workflows',
      'Active developer building real-world open-source applications and AR experiences'
    ],
    type: 'education'
  }
];

export const CORE_COMPETENCIES = [
  'Full-Stack Web Development',
  'RESTful API Design',
  'Generative AI Integrations',
  'Augmented Reality (Vuforia)',
  'Unity 3D Engine',
  'Data Structures & Algorithms',
  'Database Architecture (MongoDB / PostgreSQL)',
  'State Management (Zustand / Context)',
  'JWT & Firebase Auth'
];
