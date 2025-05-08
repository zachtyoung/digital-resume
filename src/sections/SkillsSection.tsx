import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import SkillBar from '../components/SkillBar';

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('technical');
  
  const technicalSkills = [
    { name: 'JavaScript/TypeScript', percentage: 95, color: 'indigo' },
    { name: 'React.js', percentage: 92, color: 'blue' },
    { name: 'Node.js', percentage: 88, color: 'teal' },
    { name: 'HTML/CSS', percentage: 90, color: 'purple' },
    { name: 'SQL/NoSQL', percentage: 85, color: 'indigo' },
    { name: 'AWS/Cloud Services', percentage: 80, color: 'red' },
  ];
  
  const softSkills = [
    { name: 'Problem Solving', percentage: 95, color: 'teal' },
    { name: 'Communication', percentage: 90, color: 'indigo' },
    { name: 'Team Collaboration', percentage: 92, color: 'purple' },
    { name: 'Project Management', percentage: 85, color: 'blue' },
    { name: 'Adaptability', percentage: 88, color: 'red' },
    { name: 'Time Management', percentage: 86, color: 'indigo' },
  ];
  
  const tools = [
    { name: 'Git/GitHub', percentage: 92, color: 'purple' },
    { name: 'VS Code', percentage: 95, color: 'blue' },
    { name: 'Docker', percentage: 85, color: 'teal' },
    { name: 'Figma/Adobe XD', percentage: 80, color: 'indigo' },
    { name: 'Jira/Asana', percentage: 88, color: 'red' },
    { name: 'CI/CD Pipelines', percentage: 82, color: 'indigo' },
  ];
  
  const renderSkills = () => {
    switch (activeTab) {
      case 'technical':
        return technicalSkills.map((skill, index) => (
          <SkillBar 
            key={index}
            name={skill.name}
            percentage={skill.percentage}
            color={skill.color}
          />
        ));
      case 'soft':
        return softSkills.map((skill, index) => (
          <SkillBar 
            key={index}
            name={skill.name}
            percentage={skill.percentage}
            color={skill.color}
          />
        ));
      case 'tools':
        return tools.map((skill, index) => (
          <SkillBar 
            key={index}
            name={skill.name}
            percentage={skill.percentage}
            color={skill.color}
          />
        ));
      default:
        return null;
    }
  };
  
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="My Skills" 
          subtitle="A comprehensive overview of my technical expertise and personal strengths"
        />
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden mb-8">
            <div className="flex">
              <button
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeTab === 'technical'
                    ? 'bg-indigo-500 text-white'
                    : 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
                onClick={() => setActiveTab('technical')}
              >
                Technical Skills
              </button>
              <button
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeTab === 'soft'
                    ? 'bg-indigo-500 text-white'
                    : 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
                onClick={() => setActiveTab('soft')}
              >
                Soft Skills
              </button>
              <button
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeTab === 'tools'
                    ? 'bg-indigo-500 text-white'
                    : 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
                onClick={() => setActiveTab('tools')}
              >
                Tools & Software
              </button>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              {renderSkills()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;