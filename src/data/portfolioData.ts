import { Project } from '../components/ProjectCard';
import { TimelineItemType } from '../components/TimelineItem';

// Project data
export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with product management, cart, and checkout functionality.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    repoUrl: '#'
  },
  {
    id: 2,
    title: 'Project Management App',
    description: 'Task management tool with team collaboration features, Kanban boards, and progress tracking.',
    image: 'https://images.pexels.com/photos/5989925/pexels-photo-5989925.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['TypeScript', 'Next.js', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: '#'
  },
  {
    id: 3,
    title: 'Real-time Chat Application',
    description: 'Messaging platform with real-time updates, user authentication, and file sharing.',
    image: 'https://images.pexels.com/photos/2882570/pexels-photo-2882570.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Socket.io', 'Express', 'Firebase'],
    liveUrl: '#',
    repoUrl: '#'
  },
  {
    id: 4,
    title: 'Personal Finance Tracker',
    description: 'Application to track expenses, income, and financial goals with visualization dashboards.',
    image: 'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Vue.js', 'Supabase', 'Chart.js', 'Netlify'],
    liveUrl: '#',
    repoUrl: '#'
  },
  {
    id: 5,
    title: 'AI-Powered Content Generator',
    description: 'Tool that leverages AI to generate marketing copy, blog posts, and social media content.',
    image: 'https://images.pexels.com/photos/7567467/pexels-photo-7567467.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Python', 'OpenAI API', 'AWS Lambda'],
    liveUrl: '#',
    repoUrl: '#'
  },
  {
    id: 6,
    title: 'Fitness Tracking Mobile App',
    description: 'Mobile application for tracking workouts, nutrition, and health metrics with social features.',
    image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React Native', 'Firebase', 'Redux', 'HealthKit'],
    liveUrl: '#',
    repoUrl: '#'
  }
];

// Skills data
export const technicalSkills = [
  { name: 'JavaScript/TypeScript', percentage: 95, color: 'indigo' },
  { name: 'React.js', percentage: 92, color: 'blue' },
  { name: 'Node.js', percentage: 88, color: 'teal' },
  { name: 'HTML/CSS', percentage: 90, color: 'purple' },
  { name: 'SQL/NoSQL', percentage: 85, color: 'indigo' },
  { name: 'AWS/Cloud Services', percentage: 80, color: 'red' },
];

export const softSkills = [
  { name: 'Problem Solving', percentage: 95, color: 'teal' },
  { name: 'Communication', percentage: 90, color: 'indigo' },
  { name: 'Team Collaboration', percentage: 92, color: 'purple' },
  { name: 'Project Management', percentage: 85, color: 'blue' },
  { name: 'Adaptability', percentage: 88, color: 'red' },
  { name: 'Time Management', percentage: 86, color: 'indigo' },
];

export const tools = [
  { name: 'Git/GitHub', percentage: 92, color: 'purple' },
  { name: 'VS Code', percentage: 95, color: 'blue' },
  { name: 'Docker', percentage: 85, color: 'teal' },
  { name: 'Figma/Adobe XD', percentage: 80, color: 'indigo' },
  { name: 'Jira/Asana', percentage: 88, color: 'red' },
  { name: 'CI/CD Pipelines', percentage: 82, color: 'indigo' },
];

// Experience data
export const experienceItems: TimelineItemType[] = [
  {
    id: 1,
    date: '2022 - Present',
    title: 'Senior Software Engineer',
    company: 'Tech Innovations Inc.',
    description: 'Lead developer for multiple projects, mentoring junior developers, and implementing best practices across the engineering department.',
    technologies: ['React', 'Node.js', 'AWS', 'GraphQL']
  },
  {
    id: 2,
    date: '2020 - 2022',
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    description: 'Developed and maintained web applications for clients across various industries, focusing on performance optimization and responsive design.',
    technologies: ['JavaScript', 'Vue.js', 'Express', 'MongoDB']
  },
  {
    id: 3,
    date: '2018 - 2020',
    title: 'Frontend Developer',
    company: 'Web Creations Studio',
    description: 'Created responsive, accessible user interfaces for client websites and web applications, collaborating closely with designers and backend developers.',
    technologies: ['HTML/CSS', 'JavaScript', 'React', 'Sass']
  },
  {
    id: 4,
    date: '2017 - 2018',
    title: 'Web Development Intern',
    company: 'StartUp Accelerator',
    description: 'Assisted in the development of web applications for early-stage startups, gaining hands-on experience with modern web technologies.',
    technologies: ['HTML/CSS', 'JavaScript', 'Bootstrap']
  }
];

// Education data
export const educationItems: TimelineItemType[] = [
  {
    id: 1,
    date: '2013 - 2017',
    title: 'Bachelor of Science in Computer Science',
    company: 'University of Technology',
    description: 'Focused on software engineering, data structures, algorithms, and web development. Graduated with honors.',
    technologies: ['Java', 'Python', 'Data Structures', 'Algorithms']
  },
  {
    id: 2,
    date: '2019',
    title: 'Full Stack Web Development Certification',
    company: 'Tech Academy',
    description: 'Intensive program covering modern web development technologies and practices.',
    technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB']
  }
];

// Contact info
export const contactInfo = [
  {
    icon: 'Mail',
    title: 'Email',
    content: 'yourname@example.com',
    link: 'mailto:yourname@example.com'
  },
  {
    icon: 'Phone',
    title: 'Phone',
    content: '+1 (555) 123-4567',
    link: 'tel:+15551234567'
  },
  {
    icon: 'MapPin',
    title: 'Location',
    content: 'San Francisco, CA',
    link: null
  }
];

// Social links
export const socialLinks = [
  { icon: 'Github', name: 'GitHub', url: 'https://github.com/' },
  { icon: 'Linkedin', name: 'LinkedIn', url: 'https://linkedin.com/in/' },
  { icon: 'Twitter', name: 'Twitter', url: 'https://twitter.com/' }
];