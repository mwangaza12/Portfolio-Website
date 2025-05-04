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
                  I'm a passionate software developer with over 5 years of experience building web applications 
                  and digital products. I specialize in creating engaging, high-performance applications 
                  that solve real-world problems.
                </p>
                <p className="text-gray-300 mb-6">
                  My journey began with an Information Technology degree, followed by work at tech startups 
                  and established companies, where I honed my skills in full-stack development. 
                  I love learning new technologies and applying them to create innovative solutions.
                </p>
                <p className="text-gray-300 mb-8">
                  When I'm not coding, you'll find me hiking, reading tech blogs, or contributing 
                  to open-source projects. I'm always open to new opportunities and collaborations.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#" 
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium transition-colors flex items-center justify-center"
                  >
                    Download CV
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
  