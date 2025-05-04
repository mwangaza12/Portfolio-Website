import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 50);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-white font-bold text-xl">Dev<span className="text-blue-400">Portfolio</span></span>
          </div>
          
          {/* Desktop nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
              <a href="#about" className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
              <a href="#services" className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
              <a href="#projects" className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Projects</a>
              <a href="#skills" className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Skills</a>
              <a href="#testimonials" className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Testimonials</a>
              <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-gray-900`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#home" onClick={() => setIsOpen(false)} className="text-white hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-white hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="text-white hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">Services</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="text-white hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">Projects</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="text-white hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">Skills</a>
          <a href="#testimonials" onClick={() => setIsOpen(false)} className="text-white hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">Testimonials</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="bg-blue-500 hover:bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
}