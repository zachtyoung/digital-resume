import { useState, useEffect, useRef } from 'react';

type SkillBarProps = {
  name: string;
  percentage: number;
  color?: string;
};

const SkillBar = ({ name, percentage, color = 'indigo' }: SkillBarProps) => {
  const [visible, setVisible] = useState(false);
  const skillRef = useRef<HTMLDivElement>(null);

  const colorVariants: Record<string, string> = {
    indigo: 'bg-indigo-500',
    purple: 'bg-purple-500',
    blue: 'bg-blue-500',
    teal: 'bg-teal-500',
    red: 'bg-red-500',
  };

  const bgColor = colorVariants[color] || colorVariants.indigo;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={skillRef} className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-gray-800 dark:text-gray-200 font-medium">{name}</span>
        <span className="text-gray-600 dark:text-gray-400">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className={`h-2.5 rounded-full ${bgColor} transition-all duration-1000 ease-out`}
          style={{ width: visible ? `${percentage}%` : '0%' }}
        />
      </div>
    </div>
  );
};

export default SkillBar;