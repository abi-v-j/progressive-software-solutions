import type { ReactElement } from 'react';
import type { RouteObject } from 'react-router-dom';

/* ===========================
   ✅ ROUTING TYPES
=========================== */

export interface AppRoute extends Omit<RouteObject, 'element' | 'children'> {
  path: string;
  element: ReactElement;
  children?: AppRoute[];
  requiresAuth?: boolean;
  title?: string;
  description?: string;
}

/* ===========================
   ✅ COURSE DOMAIN TYPES
=========================== */

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

export interface Certification {
  name: string;
  authority?: string;
  isGovernment: boolean;
}

export interface Course {
  id: number;                 // ✅ MYSQL PRIMARY KEY
  slug: string;
  title: string;

  summary: string;
  description: string;

  category: string;
  duration: string;
  level: CourseLevel;

  images: string[];

  certifications: Certification[];

  outcomes: string[];

  modules: Module[];

  eligibleForPSC: boolean;
  hasInternship: boolean;

  targetAudience: string[];

  createdAt?: string;
  updatedAt?: string;
}

/* ===========================
   ✅ OTHER DOMAIN TYPES
=========================== */

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  photoUrl: string;
}

export type GalleryCategory = 'Event' | 'Training' | 'Students';

export interface GalleryItem {
  id: number;
  title: string;
  imageUrl: string;
  category: GalleryCategory;
}

export type BlogStatus = 'Draft' | 'Published';

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  author: string;
  status: BlogStatus;
}

export type UserRole = 'Admin' | 'User';
export type UserStatus = 'Active' | 'Blocked';

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
}

export interface AppSettings {
  siteName: string;
  supportEmail: string;
  maintenanceMode: boolean;
  enableRegistrations: boolean;
}

export interface Poster {
  id: number;
  title: string;
  imageUrl: string;
}
