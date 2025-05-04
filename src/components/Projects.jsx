import { useRef,useState,useEffect } from "react";
import { ExternalLink } from "lucide-react";
import Ecommerce from "../assets/ecommerce.jfif";
import AI from "../assets/cloud.jfif";
import IoT from "../assets/IoT.jfif";

export default function Projects(){
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
    const projects = [
        {
          id: 1,
          title: "E-Commerce Platform",
          description: "A full-stack e-commerce solution with payment processing, user authentication, and inventory management.",
          technologies: ["React", "Node.js", "MongoDB", "Stripe"],
          image: Ecommerce,
          github: "#",
          live: "#"
        },
        {
          id: 2,
          title: "AI Content Generator",
          description: "A tool that leverages machine learning to generate blog posts, product descriptions, and social media content.",
          technologies: ["Python", "TensorFlow", "Flask", "React"],
          image: AI,
          github: "#",
          live: "#"
        },
        {
          id: 3,
          title: "Task Management App",
          description: "A collaborative task management system with real-time updates and workspace features.",
          technologies: ["React", "Redux", "Firebase", "Material UI"],
          image: IoT,
          github: "#",
          live: "#"
        }
      ];
    return (
      <section id="projects" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <AnimatedSection key={project.id}>
                <div 
                  className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                      <div className="flex gap-4">
                        <a 
                          href={project.live} 
                          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="bg-gray-800 text-blue-400 text-xs px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="#" 
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>
    );
  };
  