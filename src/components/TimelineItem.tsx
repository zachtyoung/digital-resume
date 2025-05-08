import React from 'react';

export type TimelineItemType = {
  id: number;
  date: string;
  title: string;
  company: string;
  description: string;
  technologies?: string[];
};

type TimelineItemProps = {
  item: TimelineItemType;
  isLast: boolean;
};

const TimelineItem = ({ item, isLast }: TimelineItemProps) => {
  return (
    <div className="relative pl-8 pb-8">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute top-0 left-2 h-full w-0.5 bg-indigo-200 dark:bg-indigo-900"></div>
      )}
      
      {/* Timeline dot */}
      <div className="absolute top-0 left-0 w-5 h-5 rounded-full bg-indigo-500 border-4 border-indigo-100 dark:border-gray-900 z-10"></div>
      
      {/* Content */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow ml-4">
        <div className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mb-1">{item.date}</div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
        <div className="text-gray-700 dark:text-gray-300 font-medium mb-3">{item.company}</div>
        <p className="text-gray-600 dark:text-gray-400 mb-3">{item.description}</p>
        
        {item.technologies && (
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;