export type ResumeItem = {
  title: string;
  company?: string;
  location?: string;
  start: string;
  end: string;
  bullets: string[];
};

export const experience: ResumeItem[] = [
  {
    title: "Frontend Developer",
    company: "Open-E Data Storage Software",
    start: "May 2023",
    end: "Present",
    bullets: [
      "Develop and maintain enterprise web applications using Angular and TypeScript.",
      "Manage application state with NgRx and reactive programming with RxJS.",
      "Collaborate with backend teams to integrate RESTful APIs.",
      "Write and maintain unit tests with Jasmine and Karma.",
      "Implement end-to-end tests with Playwright.",
      "Use SASS/SCSS for structured, scalable styling.",
    ],
  },
  {
    title: "IT Support (L1)",
    company: "Sopra Steria Poland",
    start: "June 2022",
    end: "April 2023",
    bullets: [
      "Provide first-line support and coordinate escalations with L2 teams.",
      "Resolve hardware and software issues across ~1,000 users (laptops, phones, printers).",
      "Administer Active Directory and support Microsoft Authenticator / Intune workflows.",
      "Create internal procedures and technical documentation.",
    ],
  },
  {
    title: "Intern IT",
    company: "Sopra Steria Poland",
    start: "July 2021",
    end: "August 2021",
    bullets: [
      "Set up workstations for new employees.",
      "Install and configure hardware and software for new team members.",
    ],
  },
];

export const education: ResumeItem[] = [
  {
    title: "Bachelor of Engineering (B.Eng.) in Computer Science",
    company: "Akademia WSB – WSB University",
    start: "2022",
    end: "Present",
    bullets: [
      "Computer Science (B.Eng.) studies with focus on software engineering fundamentals.",
      "Practical projects in web development and data/AI-related topics.",
    ],
  },
  {
    title: "IT Technician",
    company: "Technikum TEB Edukacja Katowice",
    start: "2018",
    end: "2022",
    bullets: [
      "IT fundamentals: networks, hardware/software, and troubleshooting.",
      "Built strong technical foundation for software engineering work.",
    ],
  },
];

export type CourseGroup = {
  category: string;
  items: string[];
};

export const courses: CourseGroup[] = [
  {
    category: "Frontend Engineering",
    items: [
      "Angular - The Complete Guide (2025 Edition)",
      "Reactive Angular Course (RxJS, Angular 20)",
      "Angular Signals In Depth (Angular 20)",
      "React - The Complete Guide 2025 (incl. Next.js, Redux)",
      "Understanding TypeScript",
      "CSS - The Complete Guide 2024 (Flexbox, Grid, Sass)",
      "Accelerated ES6 JavaScript Training",
      "Accelerated JavaScript Training",
    ],
  },
  {
    category: "Artificial Intelligence & Machine Learning",
    items: [
      "Machine Learning Bootcamp in Python Part I - from A to Z",
      "Machine Learning Bootcamp in Python Part II - from A to Z",
      "Data Science Bootcamp in Python - from A to Z",
      "Interactive data visualizations in Python - Plotly",
    ],
  },
  {
    category: "Data Engineering & Big Data",
    items: [
      "Spark and Python for Big Data with PySpark (in progress)",
      "SQL Bootcamp - Databases SQLite - Part I",
      "SQL Bootcamp - Databases SQLite - Part II",
    ],
  },
  {
    category: "Software Engineering Foundations",
    items: [
      "Python programming - from A to Z - 2025",
      "[2025] Python 3 Course from Basics to Master - 72h!",
      "120+ Python Exercises - Data Science - NumPy",
      "130+ Python Exercises - Data Science - Pandas",
      "Scientific Computing with Python",
      "Linux Essentials",
      "PCAP: Programming Essentials in Python",
    ],
  },
];
