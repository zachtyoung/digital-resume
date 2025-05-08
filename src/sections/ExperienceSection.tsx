import SectionHeading from '../components/SectionHeading';
import TimelineItem, { TimelineItemType } from '../components/TimelineItem';

const ExperienceSection = () => {
  const experienceItems: TimelineItemType[] = [
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
  
  const educationItems: TimelineItemType[] = [
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
  
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Experience & Education" 
          subtitle="My professional journey and educational background"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center mr-3">W</span>
              Work Experience
            </h3>
            <div className="mt-8">
              {experienceItems.map((item, index) => (
                <TimelineItem 
                  key={item.id} 
                  item={item} 
                  isLast={index === experienceItems.length - 1} 
                />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center mr-3">E</span>
              Education
            </h3>
            <div className="mt-8">
              {educationItems.map((item, index) => (
                <TimelineItem 
                  key={item.id} 
                  item={item} 
                  isLast={index === educationItems.length - 1} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;