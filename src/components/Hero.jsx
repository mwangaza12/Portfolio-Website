import { Mail, ChevronDown } from "lucide-react";
export default function Hero() {
    return (
      <section id="home" className="relative h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-gray-900"></div>
          <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-10 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-teal-500/20 rounded-full blur-3xl"></div>
        </div>
  
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="inline-block animate-bounce">Hi,</span> I'm <span className="text-blue-400">Joseph Mwangaza</span>
            </h1>
            <div className="text-xl sm:text-2xl text-gray-300 mb-8">
              <span className="typewriter">Software Developer</span>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto mb-12">
              I create reliable, fast, and maintainable solutions through logic, structure, and intent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#projects" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md font-medium transition-colors">View My Work</a>
              <a href="#contact" className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-md font-medium transition-colors">Contact Me</a>
            </div>
            <div className="mt-12 flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white">
            <ChevronDown size={28} />
          </a>
        </div>
      </section>
    );
  };
  