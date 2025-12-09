/* ===========================
   ✅ INTERFACES & TYPES
=========================== */

export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Certification {
  name: string;
  isGovernment: boolean;
}

export interface CourseModule {
  title: string;
  description: string;
}
export interface Course {
  id: number;
  slug: string;
  title: string;
  summary: string;
  description: string;
  category: string;
  duration: string;
  level: CourseLevel;
  images: string[];      // 3 Real Unsplash Images per course
  tools: string[];       // Extracted from posters (e.g., 'Tally Prime', 'Python')
  outcomes: string[];
  certifications: Certification[];
  modules: CourseModule[];
  targetAudience: string[];
  eligibleForPSC: boolean; // True for PGDCA, DCA, Data Entry
  hasInternship: boolean;  // True for Project courses
  createdAt?: string;
}
/* ===========================
   ✅ NAVIGATION
=========================== */

export const HEADER_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Courses', path: '/courses' },
  // { label: 'Gallery', path: '/gallery' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' }
];

export const FOOTER_LINKS = {
  quickLinks: [
    { label: 'About Us', path: '/about' },
    { label: 'Courses', path: '/courses' },
    // { label: 'Gallery', path: '/gallery' },
    { label: 'Careers', path: '/careers' },
    // { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' }
  ],
  platform: [
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Reviews', path: '/reviews' },
    { label: 'Posters', path: '/posters' }
  ],
  admin: [
    // { label: 'Admin Dashboard', path: '/admin/dashboard' }
  ],
  legal: [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/termsofservice' }
  ]
};

/* ===========================
   ✅ COURSES (DETAILED & MULTI-IMAGE)
=========================== */
export const COURSES: Course[] = [
  // 1. Full Stack Development (Based on "Full Stack Development" & "MERN/MEAN" posters)
  {
    id: 1,
    slug: 'full-stack-development-mern',
    title: 'Certified Full Stack Developer (MERN & MEAN)',
    summary: 'Master Web Development with MongoDB, Express, React, Node.js, and Angular.',
    description: 'A complete career-oriented program covering both MERN (React) and MEAN (Angular) stacks. Learn to build scalable web applications from scratch, design REST APIs, and deploy to the cloud. Includes internship on live US-based projects.',
    category: 'Software Development',
    duration: '6 Months',
    level: 'Advanced',

    images: [
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80', // React/Code
      'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=800&q=80', // Coding Setup
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80'  // Team collaboration
    ],
    tools: ['React.js', 'Node.js', 'MongoDB', 'Express', 'Angular', 'Git'],
    outcomes: [
      'Build dynamic Single Page Applications (SPA)',
      'Backend API Development & Integration',
      'Database Management with MongoDB',
      'Real-world Project Implementation'
    ],
    certifications: [
      { name: 'Full Stack Developer Certification', isGovernment: false },
      { name: 'Internship Experience Letter', isGovernment: false }
    ],
    modules: [
      { title: 'Frontend Fundamentals', description: 'HTML5, CSS3, JavaScript ES6+, Bootstrap.' },
      { title: 'MERN Stack', description: 'React Hooks, Redux, Node.js Runtime, Express Middleware.' },
      { title: 'MEAN Stack', description: 'Angular Components, TypeScript, Dependency Injection.' },
      { title: 'Deployment', description: 'Hosting on AWS/Vercel, CI/CD Pipelines.' }
    ],
    targetAudience: ['B.Tech', 'BCA', 'MCA', 'Job Seekers'],
    eligibleForPSC: false,
    hasInternship: true
  },

  // 2. DCBAT (Based on "DCBAT - Diploma in Corporate Business Accounting" posters)
  {
    id: 2,
    slug: 'dcbat-accounting-taxation',
    title: 'DCBAT (Diploma in Corporate Business Accounting & Taxation)',
    summary: 'Rutronix Certified course for a career in Corporate Accounts and Taxation.',
    description: 'Become a complete accountant with expertise in Tally Prime, GST filing, Income Tax, and Gulf VAT. This course is designed to make you job-ready for accounting roles in India and the Middle East (GCC).',
    category: 'Accounting',
    duration: '6 Months',
    level: 'Intermediate',

    images: [
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80', // Financial Report
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80', // Office/Accountant
      'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80'  // Calculator/Money
    ],
    tools: ['Tally Prime', 'MS Excel', 'GST Portal', 'SAP FICO Basics'],
    outcomes: [
      'Independent GST & TDS Filing',
      'Manage Corporate Payroll & ESI/PF',
      'Finalization of Company Accounts',
      'Gulf VAT Calculation'
    ],
    certifications: [
      { name: 'Rutronix Certified DCBAT', isGovernment: true },
      { name: 'Tally Professional', isGovernment: false }
    ],
    modules: [
      { title: 'Financial Accounting', description: 'Journals, Ledgers, Trial Balance, Balance Sheet.' },
      { title: 'Tally Prime Advanced', description: 'Inventory, Cost Centers, Multi-Currency, Budgeting.' },
      { title: 'Taxation Compliance', description: 'GST Registration, Returns (GSTR-1, 3B), E-Way Bills.' },
      { title: 'Payroll Management', description: 'Salary Processing, Payslip Generation, Statutory Deductions.' }
    ],
    targetAudience: ['B.Com', 'M.Com', 'BBA', 'Accountants'],
    eligibleForPSC: true,
    hasInternship: true
  },

  // 3. AI & Machine Learning (Based on "Internship in AI" & "Kickstart with AI/ML" posters)
  {
    id: 3,
    slug: 'ai-machine-learning-internship',
    title: 'Artificial Intelligence & Machine Learning Internship',
    summary: 'Build next-gen AI projects like Sentiment Analysis and Image Classification.',
    description: 'An intensive internship-based training program where you learn Python for Data Science and build real AI models. Work under a US-based tech company framework and gain hands-on experience with Neural Networks and Deep Learning.',
    category: 'Data Science',
    duration: '3 Months',
    level: 'Advanced',

    images: [
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80', // AI Brain/Connections
      'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80', // Code on screen
      'https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&w=800&q=80'  // Robot/Future
    ],
    tools: ['Python', 'TensorFlow', 'Keras', 'Pandas', 'Jupyter'],
    outcomes: [
      'Develop AI Agents & Chatbots',
      'Perform Sentiment Analysis on text data',
      'Image Classification using CNNs',
      'Deploy ML models to production'
    ],
    certifications: [
      { name: 'AI Internship Certificate', isGovernment: false },
      { name: 'Novolo.ai Partner Certification', isGovernment: false }
    ],
    modules: [
      { title: 'Python for AI', description: 'NumPy, Pandas, Data Cleaning, Visualization.' },
      { title: 'Machine Learning Algorithms', description: 'Regression, Classification, Clustering, Decision Trees.' },
      { title: 'Deep Learning', description: 'Neural Networks, Backpropagation, CNN, RNN.' },
      { title: 'Live Project', description: 'Building an AI-driven prediction system.' }
    ],
    targetAudience: ['B.Tech CS', 'M.Tech', 'Statistics Graduates'],
    eligibleForPSC: false,
    hasInternship: true
  },

  // 4. PGDCA (Based on multiple "Govt Approved PGDCA" posters)
  {
    id: 4,
    slug: 'pgdca-kerala-rutronix',
    title: 'PGDCA (Post Graduate Diploma in Computer Applications)',
    summary: 'Govt. Approved Diploma (Rutronix) essential for PSC & Govt Jobs.',
    description: 'The most sought-after computer qualification for Kerala PSC appointments. A 1-year comprehensive course covering Office Automation, Programming, and Database Management. Eligible for fee concessions (SC/ST).',
    category: 'Government Certification',
    duration: '12 Months',
    level: 'Beginner',

    images: [
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80', // Studying/Books
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80', // Classroom Lab
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80'  // Students
    ],
    tools: ['MS Office', 'C++', 'Java', 'SQL', 'ISM Malayalam'],
    outcomes: [
      'Eligibility for PSC Computer Assistant/Programmer',
      'Proficiency in Malayalam & English Typing',
      'Solid programming foundation'
    ],
    certifications: [
      { name: 'Govt. Recognized PGDCA (Rutronix)', isGovernment: true }
    ],
    modules: [
      { title: 'Informatics', description: 'Hardware, OS, Internet, Network Basics.' },
      { title: 'Office Automation', description: 'Word, Excel, PowerPoint, Access.' },
      { title: 'Programming', description: 'C++, Core Java, Web Designing basics.' },
      { title: 'Lab & Project', description: 'Practical records and final viva.' }
    ],
    targetAudience: ['Degree Holders', 'PSC Aspirants'],
    eligibleForPSC: true,
    hasInternship: false
  },

  // 5. Academic Projects (Based on "Academic Mini Project" & "Project with Internship" posters)
  {
    id: 5,
    slug: 'academic-projects-internship',
    title: 'Academic Projects & Internship (IEEE/Custom)',
    summary: 'Final year projects for BCA, MCA, B.Tech, and Polytechnic students.',
    description: 'Complete guidance for your final year or mini-project. Choose from trending technologies like Python Django, MERN Stack, Android/Flutter, or PHP. Includes documentation support, coding classes, and internship certification.',
    category: 'Student Projects',
    duration: '1-3 Months',
    level: 'Intermediate',

    images: [
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80', // Students talking
      'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80', // Presentation
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80'  // Laptop/Code
    ],
    tools: ['Python', 'PHP', 'Java', 'Flutter', 'React', 'MySQL'],
    outcomes: [
      'Submission-ready Project Code',
      'Complete Project Documentation (Synopsis to Report)',
      'Viva-Voce Preparation',
      'Mini-Project or Main Project completion'
    ],
    certifications: [
      { name: 'Project Completion Certificate', isGovernment: false },
      { name: 'Internship Certificate', isGovernment: false }
    ],
    modules: [
      { title: 'Topic Selection', description: 'Choosing IEEE papers or custom ideas.' },
      { title: 'Design & Coding', description: 'UI Design, Database setup, Logic implementation.' },
      { title: 'Testing', description: 'Bug fixing and validation.' },
      { title: 'Documentation', description: 'Creating standard project reports.' }
    ],
    targetAudience: ['Final Year Students (B.Tech, BCA, MCA, Poly)'],
    eligibleForPSC: false,
    hasInternship: true
  },

  // 6. Python for Beginners (Based on "Python for Beginners" posters)
  {
    id: 6,
    slug: 'python-programming-foundation',
    title: 'Python Programming Foundation',
    summary: 'Learn the world’s most popular language from scratch. Ideal for beginners.',
    description: 'A dedicated course for students and beginners to master Python syntax, loops, functions, and object-oriented concepts. This builds the base for Data Science, Web Dev, or Automation careers.',
    category: 'Software Development',
    duration: '2 Months',
    level: 'Beginner',

    images: [
      'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80', // Python Snake/Code Art
      'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80', // Developer typing
      'https://images.unsplash.com/photo-1649180556628-9ba704115795?auto=format&fit=crop&w=800&q=80'  // Python Logo concept
    ],
    tools: ['Python 3.x', 'IDLE', 'VS Code'],
    outcomes: [
      'Strong grasp of Programming Logic',
      'Ability to write Python scripts',
      'Understanding of OOPs concepts'
    ],
    certifications: [
      { name: 'Certificate in Python Programming', isGovernment: false }
    ],
    modules: [
      { title: 'Basics', description: 'Variables, Data Types, Operators, Control Flow.' },
      { title: 'Data Structures', description: 'Lists, Tuples, Dictionaries, Sets.' },
      { title: 'Advanced Topics', description: 'Functions, Lambda, File Handling, Exception Handling.' }
    ],
    targetAudience: ['School Students', 'College Freshers', 'Non-IT Professionals'],
    eligibleForPSC: false,
    hasInternship: false
  },

  // 7. Data Entry Operator (Based on "Data Entry" posters)
  {
    id: 7,
    slug: 'data-entry-operator',
    title: 'Data Entry Operator Program',
    summary: 'Get certified for Government and Private sector office jobs.',
    description: 'A skill-focused course to improve typing speed and data management accuracy. Essential for clerical posts in PSC and corporate offices. 50% Fee off for SC/ST students.',
    category: 'Vocational Training',
    duration: '3 Months',
    level: 'Beginner',

    images: [
      'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=800&q=80', // Typing/Keyboard
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80', // Person typing
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80'  // Office Desk
    ],
    tools: ['MS Word', 'MS Excel', 'Typing Tutor'],
    outcomes: [
      'High-speed Typing (English & Malayalam)',
      'Data Accuracy & Formatting',
      'Document Management'
    ],
    certifications: [
      { name: 'Govt. Approved Data Entry Certificate', isGovernment: true }
    ],
    modules: [
      { title: 'Keyboarding Skills', description: 'Touch typing techniques, Speed building.' },
      { title: 'Data Processing', description: 'Entry into databases, Excel forms.' },
      { title: 'Office Tools', description: 'Basic document formatting and printing.' }
    ],
    targetAudience: ['10th/12th Pass', 'Job Seekers'],
    eligibleForPSC: true,
    hasInternship: false
  },

  // 8. Tally Prime & GST (Based on "Tally Prime" & "DGSTP" posters)
  {
    id: 8,
    slug: 'tally-prime-gst-practitioner',
    title: 'Tally Prime with GST & Gulf VAT',
    summary: 'Become a certified GST Practitioner and Tally Expert.',
    description: 'Comprehensive training on Tally Prime covering Accounting, Inventory, Banking, Payroll, and E-Invoicing. Special focus on GST filing for India and VAT for Gulf countries.',
    category: 'Accounting',
    duration: '3 Months',
    level: 'Beginner',

    images: [
      'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80', // Accounting
      'https://images.unsplash.com/photo-1565514020176-6c2235c87445?auto=format&fit=crop&w=800&q=80', // Calculator
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'  // Charts
    ],
    tools: ['Tally Prime', 'GST Portal', 'Excel'],
    outcomes: [
      'GST Registration & Returns',
      'E-Way Bill Generation',
      'Payroll Processing',
      'Inventory Management'
    ],
    certifications: [
      { name: 'Diploma in GST Practice (DGSTP)', isGovernment: true },
      { name: 'Tally Certification', isGovernment: false }
    ],
    modules: [
      { title: 'Accounting Vouchers', description: 'Contra, Payment, Receipt, Journal, Sales, Purchase.' },
      { title: 'GST Compliance', description: 'Intrastate vs Interstate, Reverse Charge Mechanism.' },
      { title: 'Payroll', description: 'Employee Groups, Attendance, Pay Heads.' }
    ],
    targetAudience: ['Commerce Students', 'Accountants'],
    eligibleForPSC: true,
    hasInternship: false
  },

  // 9. Mobile App Development (Based on "Android/Flutter" posters)
  {
    id: 9,
    slug: 'mobile-app-development-flutter',
    title: 'Mobile App Development (Flutter & Android)',
    summary: 'Build cross-platform mobile apps for iOS and Android.',
    description: 'Learn to create beautiful, compiled native applications from a single codebase using Google’s Flutter framework. Course covers Dart programming, UI design widgets, and publishing to the Play Store.',
    category: 'Software Development',
    duration: '4 Months',
    level: 'Intermediate',
    images: [
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80', // Mobile Phone/App
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80', // Phone screen
      'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=800&q=80'  // App Code
    ],
    tools: ['Flutter', 'Dart', 'Android Studio', 'Firebase'],
    outcomes: [
      'Build responsive mobile UIs',
      'Manage State (Provider/Bloc)',
      'Integrate APIs and Databases',
      'Publish App to Play Store'
    ],
    certifications: [
      { name: 'Certified App Developer', isGovernment: false }
    ],
    modules: [
      { title: 'Dart Basics', description: 'Syntax, OOPs, Async programming.' },
      { title: 'Flutter Widgets', description: 'Stateless vs Stateful, Layouts, Material Design.' },
      { title: 'Backend Integration', description: 'Firebase Auth, Firestore Database, API calls.' }
    ],
    targetAudience: ['BCA', 'B.Tech', 'App Enthusiasts'],
    eligibleForPSC: false,
    hasInternship: true
  }
];
/* ===========================
   ✅ TESTIMONIALS (UPDATED WITH REALISTIC IMAGES & NAMES)
=========================== */

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  photoUrl: string;
}

export const TESTIMONIALS: Testimonial[] = [
  // {
  //   id: 1,
  //   name: 'Anjali Menon',
  //   role: 'Frontend Developer',
  //   company: 'Technopark',
  //   quote: 'The Full Stack internship gave me the confidence to handle real client projects. The mentors are extremely supportive.',
  //   // Professional Woman Portrait
  //   photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
  // },
  // {
  //   id: 2,
  //   name: 'Rahul Krishnan',
  //   role: 'App Developer',
  //   company: 'Freelance',
  //   quote: 'I published my first app on the Play Store within 3 months of joining. The practical-oriented training is the best.',
  //   // Professional Man Portrait
  //   photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
  // }
];

/* ===========================
   ✅ GALLERY (UPDATED WITH REALISTIC EVENTS)
=========================== */

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  // {
  //   id: 1,
  //   title: 'Code Hackathon 2024',
  //   category: 'Event',
  //   // Hackathon/Coding Event
  //   imageUrl: 'https://images.unsplash.com/photo-1504384308090-c54be38558bd?auto=format&fit=crop&w=800&q=80'
  // },
  // {
  //   id: 2,
  //   title: 'Advanced Computer Lab',
  //   category: 'Facility',
  //   // Modern Computer Lab
  //   imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80'
  // },
  // {
  //   id: 3,
  //   title: 'Convocation Ceremony',
  //   category: 'Event',
  //   // Graduation/Certificate
  //   imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80'
  // },
  // {
  //   id: 4,
  //   title: 'Cultural Fest (Onam)',
  //   category: 'Culture',
  //   // Cultural/Festival vibe
  //   imageUrl: 'https://images.unsplash.com/photo-1582650742337-c7cf12e69312?auto=format&fit=crop&w=800&q=80'
  // }
];

/* ===========================
   ✅ BLOG (UPDATED WITH TECH IMAGES)
=========================== */

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  author: string;
}

export const BLOG_POSTS: BlogPost[] = [
  // {
  //   id: 1,
  //   slug: 'future-of-web-dev',
  //   title: 'Top 5 Trends in Web Development for 2025',
  //   excerpt: 'From AI-generated code to the rise of Web3, find out what skills you need to stay relevant in the tech industry.',
  //   // Futuristic Tech/Code
  //   imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
  //   author: 'Sandeep K.',
  //   date: new Date('2024-05-10').toDateString()
  // },
  // {
  //   id: 2,
  //   slug: 'psc-computer-tips',
  //   title: 'How to Crack PSC Computer Assistant Exams',
  //   excerpt: 'Essential tips and keyboard shortcuts to ace your upcoming Kerala PSC computer proficiency tests.',
  //   // Studying/Notes
  //   imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
  //   author: 'Admin',
  //   date: new Date('2024-04-22').toDateString()
  // }
];

/* ===========================
   ✅ POSTERS (UPDATED WITH VERTICAL IMAGES)
=========================== */

export const POSTERS = [
  // {
  //   id: 1,
  //   title: 'Summer Internship Drive',
  //   // Vertical image: Modern office teamwork
  //   imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80'
  // },
  // {
  //   id: 2,
  //   title: 'Admission Open: PGDCA',
  //   // Vertical image: Students talking
  //   imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
  // },
  // {
  //   id: 3,
  //   title: 'Free Workshop on Python',
  //   // Vertical image: Coding vertical
  //   imageUrl: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=800&q=80'
  // }
];

/* ===========================
   ✅ REVIEWS (TEXT ONLY)
=========================== */

export const REVIEWS = [
  // { id: 1, name: 'Rohit S.', rating: 5, comment: 'Excellent training and placement support. Highly recommend!' },
  // { id: 2, name: 'Fathima N.', rating: 4, comment: 'Good syllabus coverage for PGDCA. Lab facilities are great.' },
  // { id: 3, name: 'John D.', rating: 5, comment: 'Tally classes were very practical and helpful for my job.' }
];