import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard, { Project } from '../components/ProjectCard';

const ProjectsSection = () => {
  // Sample project data
  const projects: Project[] = [
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
  
  const categories = ['All', 'React', 'Node.js', 'TypeScript', 'Firebase', 'Mobile'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(selectedCategory));
  
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="My Projects" 
          subtitle="A showcase of my recent work and notable projects"
        />
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-indigo-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;