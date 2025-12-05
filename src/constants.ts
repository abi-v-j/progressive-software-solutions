import { Course, CourseLevel, GalleryItem, Testimonial, BlogPost } from './types';

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Courses', path: '/courses' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'Posters', path: '/posters' },
  { label: 'Careers', path: '/careers' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
  { label: 'DashBoard', path: '/admin/dashboard' }
];

export const COURSES: Course[] = [
  {
    _id: '1',
    slug: 'full-stack-web-development',
    title: 'Full Stack Web Development',
    summary: 'Master the MERN stack and build modern web applications.',
    description: 'Complete full stack program with frontend, backend, and deployment.',
    category: 'Web Development',
    duration: '6 Months',
    level: CourseLevel.Beginner,
    images: ['https://picsum.photos/800/600?random=1'],
    certifications: [{ name: 'Industry Certificate', isGovernment: false }],
    outcomes: ['Build full-stack apps', 'REST APIs', 'Cloud Deployment'],
    modules: [
      { title: 'Frontend', description: 'HTML, CSS, JS, React' },
      { title: 'Backend', description: 'Node.js, Express, MongoDB' }
    ],
    eligibleForPSC: false,
    hasInternship: true,
    targetAudience: ['BCA', 'BSC', 'BTECH']
  },
  {
    _id: '2',
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    summary: 'Build iOS & Android apps with React Native.',
    description: 'Cross-platform mobile app development.',
    category: 'Mobile Development',
    duration: '4 Months',
    level: CourseLevel.Intermediate,
    images: ['https://picsum.photos/800/600?random=2'],
    certifications: [{ name: 'App Development Certificate', isGovernment: false }],
    outcomes: ['Play Store Publishing', 'Native APIs'],
    modules: [
      { title: 'React Native', description: 'Core mobile UI' },
      { title: 'APIs', description: 'REST integration' }
    ],
    eligibleForPSC: false,
    hasInternship: true,
    targetAudience: ['BCA', 'BTECH']
  },
  {
    _id: '3',
    slug: 'pgdca',
    title: 'PGDCA',
    summary: 'Govt Approved PGDCA Course',
    description: 'Computer applications, programming and office automation.',
    category: 'Computer Applications',
    duration: '12 Months',
    level: CourseLevel.Advanced,
    images: ['https://picsum.photos/800/600?random=3'],
    certifications: [{ name: 'Kerala PSC Approved', isGovernment: true }],
    outcomes: ['PSC Eligibility', 'Office Automation'],
    modules: [
      { title: 'Programming', description: 'C, Java' },
      { title: 'DBMS', description: 'MySQL' }
    ],
    eligibleForPSC: true,
    hasInternship: false,
    targetAudience: ['Plus Two', 'Degree']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    _id: '1',
    name: 'Sarah Johnson',
    role: 'Frontend Developer',
    company: 'TechCorp',
    quote: 'The Full Stack course transformed my career.',
    photoUrl: 'https://picsum.photos/100/100?random=10'
  },
  {
    _id: '2',
    name: 'Michael Chen',
    role: 'Mobile Engineer',
    company: 'StartUp Inc',
    quote: 'React Native training helped me publish my first app.',
    photoUrl: 'https://picsum.photos/100/100?random=11'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { _id: '1', title: 'Hackathon', category: 'Event', imageUrl: 'https://picsum.photos/600/400?random=20' },
  { _id: '2', title: 'Classroom', category: 'Training', imageUrl: 'https://picsum.photos/600/400?random=21' }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    _id: '1',
    slug: 'future-of-web-dev',
    title: 'The Future of Web Development',
    excerpt: 'Emerging trends in web.',
    date: 'Oct 15, 2023',
    imageUrl: 'https://picsum.photos/800/400?random=30',
    author: 'John Doe',
    status: 'Published'
  }
];

export const POSTERS = Array.from({ length: 6 }).map((_, i) => ({
  _id: `${i}`,
  title: `Promotional Poster ${i + 1}`,
  imageUrl: `https://picsum.photos/800/1000?random=${40 + i}`
}));

export const REVIEWS = [
  { id: '1', name: 'Rohit', rating: 5, comment: 'Excellent training and support.' },
  { id: '2', name: 'Anita', rating: 4, comment: 'Good course content.' }
];
