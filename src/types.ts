import type { ReactElement } from 'react';
import type { RouteObject } from 'react-router-dom';

/**
 * ✅ Extended router type for your app
 * - Keeps v7 compatibility
 * - Adds security & SEO metadata
 * - Keeps strong typing for element
 */
export interface AppRoute extends Omit<RouteObject, 'element' | 'children'> {
  path: string;
  element: ReactElement;
  children?: AppRoute[];
  requiresAuth?: boolean;
  title?: string;        // SEO
  description?: string; // SEO
}


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

  summary: string;        // ✅ ADD THIS
  description: string;

  category: string;
  duration: string;
  level: CourseLevel;

  imageUrl: string;

  isLiveProject: boolean;
  hasCertification: boolean;

  outcomes: string[];
  modules: {
    title: string;
    description: string;
  }[];
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

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'User';
  status: 'Active' | 'Blocked';
};

export type BlogStatus = 'Draft' | 'Published';  // ✅ FIXED


export interface AppSettings  {
  siteName: string;
  supportEmail: string;
  maintenanceMode: boolean;
  enableRegistrations: boolean;
};


export interface Poster  {
  id: string;
  title: string;
  imageUrl: string;
};
