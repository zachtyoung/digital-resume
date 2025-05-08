import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              dev<span className="text-indigo-400">portfolio</span>
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
              A showcase of my skills, projects, and professional journey as a software engineer.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="flex items-center text-gray-400 mb-2">
              Designed and built with 
              <Heart size={16} className="mx-1 text-red-500" fill="#ef4444" />
              by Your Name
            </p>
            <p className="text-gray-500 text-sm">
              © {currentYear} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;