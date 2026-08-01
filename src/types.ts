export type NavigationTab = 'home' | 'projects' | 'about' | 'contact';

export interface Project {
  id: string;
  title: string;
  category: 'Fullstack' | 'AI' | 'AR & Gaming' | 'Frontend' | 'Backend' | 'UI Design' | 'Animation';
  tags: string[];
  description: string;
  longDescription?: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  gridSpan?: 'normal' | 'wide';
  metrics?: string[];
  keyFeatures?: string[];
  techStack?: string[];
  status?: string;
}

export interface TechSkill {
  id: string;
  name: string;
  category: 'Languages' | 'Frontend' | 'Backend' | 'Database & ORM' | 'Tools & AR' | 'Design' | 'DevOps & Tools' | 'AI & Databases';
  icon: string; // Lucide icon name or svg
  description: string;
  proficiency: number; // 1-100
  color: 'primary' | 'secondary' | 'tertiary';
}

export interface ExperienceItem {
  id: string;
  period?: string;
  role: string;
  company: string;
  location?: string;
  description: string;
  highlights: string[];
  type: 'work' | 'education';
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
  subject?: string;
  timestamp?: string;
}
