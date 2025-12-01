export interface Module {
  title: string;
  description: string;
  hours?: number;
}

export enum CourseLevel {
  Beginner = "Beginner",
  Intermediate = "Intermediate",
  Advanced = "Advanced"
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  category: string;
  duration: string;
  level: CourseLevel;
  price?: string;
  imageUrl: string;
  modules: Module[];
  outcomes: string[];
  isLiveProject: boolean;
  hasCertification: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  photoUrl: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  category: 'Event' | 'Training' | 'Students';
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  author: string;
}