import SectionHeading from '../components/SectionHeading';
import { Code, Briefcase, GraduationCap as Graduation, Award } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: '5+ Years Experience',
      description: 'Building modern web applications with cutting-edge technologies.'
    },
    {
      icon: <Briefcase size={24} />,
      title: '10+ Projects Delivered',
      description: 'From e-commerce platforms to complex enterprise solutions.'
    },
    {
      icon: <Graduation size={24} />,
      title: 'Computer Science Degree',
      description: 'Bachelor\'s degree with focus on software engineering.'
    },
    {
      icon: <Award size={24} />,
      title: 'Continuous Learner',
      description: 'Always exploring new technologies and methodologies.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know more about me and my background"
        />
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Replace with your image */}
              <div className="w-full h-[420px] bg-gray-200 dark:bg-gray-800 rounded-xl flex items-center justify-center text-gray-500 dark:text-gray-400">
                About Me Image
              </div>
              
              {/* Image decorative element */}
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-8 border-indigo-500 rounded-xl -z-10"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Software Engineer with passion for creating impactful applications
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. 
              Currently, I'm focused on building accessible, human-centered products.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              My journey in software development started during college where I discovered my passion for coding.
              Since then, I've had the privilege of working at a start-up, a large corporation, and as a freelancer.
              This diverse experience has equipped me with a well-rounded skill set and perspective.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              When I'm not at the computer, I enjoy hiking, reading sci-fi novels, and exploring new coffee shops in the city.
              I'm always interested in new technologies and approaches to solving problems.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 p-3 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;