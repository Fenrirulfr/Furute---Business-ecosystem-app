
export enum Page {
  Home = 'home',
  Dashboard = 'dashboard',
  Courses = 'courses',
  ProgramDetail = 'program-detail',
  Community = 'community',
  Marketplace = 'marketplace',
  PRServices = 'pr-services',
  Subscription = 'subscription',
  Retreats = 'retreats',
  Mentoring = 'mentoring',
  Podcast = 'podcast',
  About = 'about',
  Contact = 'contact',
  Profile = 'profile',
  Payments = 'payments',
  Login = 'login',
  SignUp = 'signup',
  ForgotPassword = 'forgot-password',
  ComingSoon = 'coming-soon',
  Careers = 'careers',
  PressKit = 'press-kit',
  Partners = 'partners',
  Privacy = 'privacy',
  Terms = 'terms',
  Cookie = 'cookie',
  Testimonials = 'testimonials',
  Blog = 'blog'
}

export interface User {
  name: string;
  role: string;
  avatar: string;
  credits: number;
  progress: number;
}

export interface Course {
  id: string;
  title: string;
  category: string;
  progress: number;
  lessons: string;
  image: string;
  lastAccessed: string;
}

export interface Expert {
  id: string;
  name: string;
  title: string;
  rating: number;
  price: number;
  bio: string;
  avatar: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  videoUrl?: string;
}