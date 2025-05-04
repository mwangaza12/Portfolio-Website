import { useRef,useState, useEffect } from "react";
import { Monitor, Code, Database } from "lucide-react";
export default function  Services(){
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
    const services = [
        {
          icon: <Monitor size={24} />,
          title: "Web Development",
          description: "Building responsive, performant websites and web applications optimized for all devices."
        },
        {
          icon: <Code size={24} />,
          title: "Software Architecture",
          description: "Designing scalable solutions that meet your business requirements and technical constraints."
        },
        {
          icon: <Database size={24} />,
          title: "Database Design",
          description: "Creating optimized data models and database structures for your mobile and web applications."
        }
      ];
    return (
      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index}>
                <div 
                  className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-700 transition-all"
                >
                  <div className="text-blue-400 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    );
  };