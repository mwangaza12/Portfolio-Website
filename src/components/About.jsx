import { useRef, useState, useEffect } from "react";
import pic from "../assets/mine.JPG";
export default function About() {
    const useInView = (ref) => {
        const [isInView, setIsInView] = useState(false);
      
        useEffect(() => {
          if (!ref.current) return;
          
          const observer = new IntersectionObserver(([entry]) => {
            setIsInView(entry.isIntersecting);
          }, { threshold: 0.1 });
          
          observer.observe(ref.current);
          
          return () => {
            if (ref.current) {
              observer.unobserve(ref.current);
            }
          };
        }, [ref]);
      
        return isInView;
      };
    // AnimatedSection component for fade-in animations
    const AnimatedSection = ({ children, className }) => {
        const ref = useRef(null);
        const isInView = useInView(ref);
        
        return (
        <div 
            ref={ref}
            className={`transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'} ${className || ''}`}
        >
            {children}
        </div>
        );
    };
    return (
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">About Me</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src={pic}
                  alt="Developer Profile"
                  className="w-full h-96 object-cover"
                />
              </div>
            </AnimatedSection>
            
            <AnimatedSection>
              <div>
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Joseph Mwangaza Mokoli</h3>
                <p className="text-gray-300 mb-6">
                    I don’t just write code — I design systems, solve problems, and bring ideas to life. With over 3 years in software development, I’ve shipped products that power startups, streamline businesses, and delight users.
                </p>
                <p className="text-gray-300 mb-6">
                    My roots in Information Technology gave me a solid foundation, but curiosity took me further. Whether it’s building sleek frontend interfaces, architecting APIs, or automating workflows, I thrive where code meets creativity.
                </p>
                <p className="text-gray-300 mb-8">
                    Off-screen, I find clarity on hiking trails, inspiration in open-source communities, and energy in collaboration. I’m always up for building something impactful — or tearing down bugs at 2 AM with good coffee and better ideas.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#" 
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium transition-colors flex items-center justify-center"
                  >
                    Download Resume
                  </a>
                  <a 
                    href="#contact" 
                    className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-2 rounded-md font-medium transition-colors flex items-center justify-center"
                  >
                    Let's Talk
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    );
  };
  