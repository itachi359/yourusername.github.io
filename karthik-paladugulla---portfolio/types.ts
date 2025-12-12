export interface Project {
  id: string;
  title: string;
  pitch: string;
  techStack: string[];
  problem: string;
  solution: string;
  image: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number }[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
