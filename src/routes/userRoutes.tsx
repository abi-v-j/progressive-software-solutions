import { AppRoute } from '../types';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Courses } from '../pages/Courses';
import { CourseDetail } from '../pages/CourseDetail';
import { Gallery } from '../pages/Gallery';
import { Careers } from '../pages/Careers';
import { Blog } from '../pages/Blog';
import { Contact } from '../pages/Contact';
import { Privacy } from '../pages/Privacy';
import { TermsOfService } from '../pages/TermsofService';

export const userRoutes: AppRoute[] = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/courses', element: <Courses /> },
  { path: '/courses/:slug', element: <CourseDetail /> },
  { path: '/gallery', element: <Gallery /> },
  { path: '/careers', element: <Careers /> },
  { path: '/blog', element: <Blog /> },
  { path: '/contact', element: <Contact /> },
  { path: '/privacy', element: <Privacy /> },
  { path: '/termsofservice', element: <TermsOfService /> },
];
