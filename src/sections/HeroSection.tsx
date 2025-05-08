import { useState, useEffect } from "react";
import Button from "../components/Button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Software Engineer • Full Stack Developer • Problem Solver";
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timerId = setTimeout(() => {
        setTypedText((prev) => prev + fullText.charAt(textIndex));
        setTextIndex((prev) => prev + 1);
      }, 80); // typing speed

      return () => clearTimeout(timerId);
    }
  }, [textIndex, fullText]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative bg-gray-50 dark:bg-gray-900"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2 tracking-wider">
              WELCOME TO MY PORTFOLIO
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Hi, I'm{" "}
              <span className="text-indigo-600 dark:text-indigo-400">Zach</span>
            </h1>
            <div className="h-8 mb-6">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                {typedText}
                <span className="inline-block w-[2px] h-5 bg-indigo-500 ml-1 animate-blink"></span>
              </p>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              I create elegant solutions to complex problems with clean,
              maintainable code. Passionate about building innovative web
              applications that deliver exceptional user experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="#projects">View My Work</Button>
              <Button href="#contact" variant="outline">
                Get In Touch
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              {/* Replace with your own image */}
              <div className="w-full h-[420px] bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-xl font-medium">
                Your Profile Image Here
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-yellow-400 dark:bg-yellow-500 rounded-xl -z-10"></div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-teal-400 dark:bg-teal-500 rounded-xl -z-10"></div>
              <div className="absolute top-1/4 -right-8 w-16 h-16 bg-indigo-300 dark:bg-indigo-600 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ChevronDown size={24} className="animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
