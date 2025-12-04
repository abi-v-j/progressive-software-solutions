import { Course, CourseLevel, GalleryItem, Testimonial, BlogPost } from './types';

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Courses', path: '/courses' },

  // ✅ Grouped trust/marketing pages
  { label: 'Gallery', path: '/gallery' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'Posters', path: '/posters' },

  { label: 'Careers', path: '/careers' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
  { label: 'DashBoard', path: '/admin/dashboard' },
];


export const COURSES: Course[] = [
  {
    id: '1',
    slug: 'full-stack-web-development',
    title: 'Full Stack Web Development',
    summary: 'Master the MERN stack and build modern web applications.',
    description: 'A comprehensive bootcamp designed to take you from novice to pro. Learn HTML, CSS, JavaScript, React, Node.js, and MongoDB.',
    category: 'Web Development',
    duration: '6 Months',
    level: CourseLevel.Beginner,
    imageUrl: 'https://picsum.photos/800/600?random=1',
    isLiveProject: true,
    hasCertification: true,
    outcomes: ['Build full-stack apps', 'Understand REST APIs', 'Deploy to cloud'],
    modules: [
      { title: 'Frontend Fundamentals', description: 'HTML5, CSS3, JavaScript ES6+' },
      { title: 'React.js Deep Dive', description: 'Hooks, Context, Redux, Routing' },
      { title: 'Backend with Node.js', description: 'Express server, Middleware, Auth' },
      { title: 'Database Management', description: 'MongoDB, Mongoose, Aggregations' },
    ]
  },
  {
    id: '2',
    slug: 'mobile-app-development',
    title: 'Mobile App Development with React Native',
    summary: 'Build cross-platform mobile apps for iOS and Android.',
    description: 'Learn to use your React skills to build native mobile applications using React Native.',
    category: 'Mobile Development',
    duration: '4 Months',
    level: CourseLevel.Intermediate,
    imageUrl: 'https://picsum.photos/800/600?random=2',
    isLiveProject: true,
    hasCertification: true,
    outcomes: ['Publish to App Store', 'Native Device Features', 'State Management'],
    modules: [
      { title: 'React Native Basics', description: 'Components, Styling, Flexbox' },
      { title: 'Navigation', description: 'Stack, Tab, Drawer navigation' },
      { title: 'Native Features', description: 'Camera, Geolocation, Sensors' },
    ]
  },
  {
    id: '3',
    slug: 'data-science-python',
    title: 'Data Science with Python',
    summary: 'Analyze data and build ML models using Python.',
    description: 'Dive into the world of data science. Learn Pandas, NumPy, Scikit-learn, and more.',
    category: 'Data Science',
    duration: '5 Months',
    level: CourseLevel.Advanced,
    imageUrl: 'https://picsum.photos/800/600?random=3',
    isLiveProject: true,
    hasCertification: true,
    outcomes: ['Data Visualization', 'Machine Learning Models', 'Statistical Analysis'],
    modules: [
      { title: 'Python for Data Science', description: 'Syntax, Data Structures' },
      { title: 'Data Analysis', description: 'Pandas, NumPy' },
      { title: 'Visualization', description: 'Matplotlib, Seaborn' },
      { title: 'Machine Learning', description: 'Regression, Classification, Clustering' },
    ]
  },
  {
    id: '4',
    slug: 'ui-ux-design',
    title: 'UI/UX Design Masterclass',
    summary: 'Design beautiful user interfaces and experiences.',
    description: 'Learn Figma, prototyping, and design thinking principles to create stunning digital products.',
    category: 'Design',
    duration: '3 Months',
    level: CourseLevel.Beginner,
    imageUrl: 'https://picsum.photos/800/600?random=4',
    isLiveProject: true,
    hasCertification: true,
    outcomes: ['Master Figma', 'User Research', 'Prototyping'],
    modules: [
      { title: 'Design Principles', description: 'Typography, Color, Layout' },
      { title: 'Figma Mastery', description: 'Components, Auto-layout' },
      { title: 'UX Research', description: 'User Personas, Journey Maps' },
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Frontend Developer',
    company: 'TechCorp',
    quote: 'The Full Stack course transformed my career. The hands-on projects were incredible.',
    photoUrl: 'https://picsum.photos/100/100?random=10'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Mobile Engineer',
    company: 'StartUp Inc',
    quote: 'I went from knowing nothing about mobile dev to publishing my first app in 4 months.',
    photoUrl: 'https://picsum.photos/100/100?random=11'
  },
  {
    id: '3',
    name: 'Priya Patel',
    role: 'Data Analyst',
    company: 'DataFlow',
    quote: 'Excellent instructors and a curriculum that is relevant to the industry needs.',
    photoUrl: 'https://picsum.photos/100/100?random=12'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: '1', title: 'Hackathon 2023', category: 'Event', imageUrl: 'https://picsum.photos/600/400?random=20' },
  { id: '2', title: 'Classroom Session', category: 'Training', imageUrl: 'https://picsum.photos/600/400?random=21' },
  { id: '3', title: 'Graduation Day', category: 'Students', imageUrl: 'https://picsum.photos/600/400?random=22' },
  { id: '4', title: 'Workshop on AI', category: 'Event', imageUrl: 'https://picsum.photos/600/400?random=23' },
  { id: '5', title: 'Live Project Demo', category: 'Training', imageUrl: 'https://picsum.photos/600/400?random=24' },
  { id: '6', title: 'Alumni Meet', category: 'Event', imageUrl: 'https://picsum.photos/600/400?random=25' },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'future-of-web-dev',
    title: 'The Future of Web Development in 2025',
    excerpt: 'Explore the emerging trends in web development, from AI-assisted coding to WebAssembly.',
    date: 'Oct 15, 2023',
    imageUrl: 'https://picsum.photos/800/400?random=30',
    author: 'John Doe'
  },
  {
    id: '2',
    slug: 'getting-started-react',
    title: 'Getting Started with React 18',
    excerpt: 'A beginners guide to understanding components, hooks, and the new concurrent features.',
    date: 'Sep 22, 2023',
    imageUrl: 'https://picsum.photos/800/400?random=31',
    author: 'Jane Smith'
  },
  {
    id: '3',
    slug: 'career-in-tech',
    title: 'How to Switch Your Career to Tech',
    excerpt: 'Practical advice for professionals looking to transition into the software industry.',
    date: 'Aug 10, 2023',
    imageUrl: 'https://picsum.photos/800/400?random=32',
    author: 'Mike Johnson'
  }
];


export const POSTERS = Array.from({ length: 9 }).map((_, i) => ({
  id: `${i}`,
  title: `Promotional Poster ${i + 1}`,
  imageUrl: `https://picsum.photos/800/1000?random=${23 + i}`
}));


export const REVIEWS = [
  { id: '1', name: 'Rohit', rating: 5, comment: 'Excellent training and support.' },
  { id: '2', name: 'Anita', rating: 4, comment: 'Good course content.' },
  { id: '3', name: 'Vikram', rating: 5, comment: 'Highly recommend their full stack program.' }
];
