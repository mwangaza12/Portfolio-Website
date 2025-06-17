import { useEffect,useState,useRef } from "react";
export default function Skills(){
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
    const skills = [
        { 
          category: "Frontend", 
          items: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Redux", "SCSS"] 
        },
        { 
          category: "Backend", 
          items: ["Node.js", "Express", "Drizzle ORM", "REST API", "GraphQL", "Laravel","PHP"] 
        },
        { 
          category: "Database", 
          items: ["MYSQL", "PostgreSQL", "Firebase", "Redis", "SQLite", "Oracle"] 
        },
        { 
          category: "DevOps", 
          items: ["Docker", "AWS", "CI/CD", "Kubernetes", "Git", "Github", "Jest"] 
        }
      ];
    return (
      <section id="skills" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">Skills & Technologies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <AnimatedSection key={index}>  
                <div 
                  className="bg-gray-800 p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-blue-400 mb-4">{skill.category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {skill.items.map((item, i) => (
                      <span 
                        key={i} 
                        className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    );
  };
  