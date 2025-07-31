import { useRef, useState, useEffect } from "react";
import { ExternalLink, Github, Code, Database, Globe } from "lucide-react";
import restaurant from "../assets/restaurant.png";
import medical from "../assets/medical.png";

export default function Projects() {
  const useInView = (ref) => {
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
      if (!ref.current) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsInView(entry.isIntersecting);
        },
        { threshold: 0.1 }
      );

      observer.observe(ref.current);

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [ref]);

    return isInView;
  };

  const AnimatedSection = ({ children, className, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        } ${className || ""}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    );
  };

  const projects = [
    {
      id: 1,
      title: "Medical Appointment Booking System",
      description:
        "A comprehensive web platform for booking medical appointments with real-time availability and intelligent scheduling system.",
      technologies: ["React", "Node.js", "Azure", "Express"],
      image: medical,
      github: "https://github.com/mwangaza12/meditime_frontend",
      live: "https://white-sea-09d82b110.2.azurestaticapps.net/",
      category: "Healthcare",
      status: "Live",
    },
    {
      id: 2,
      title: "Restaurant Management System",
      description:
        "Full-stack backend system for managing restaurant operations including reservations, orders, menu items, and staff coordination.",
      technologies: ["Node.js", "Express", "Redux", "PostgreSQL"],
      image: restaurant,
      github:
        "https://github.com/mwangaza12/restaurant_management_system_backend/",
      live: "#",
      category: "Business",
      status: "Development",
    },
    {
      id: 3,
      title: "School Management System",
      description:
        "Comprehensive educational platform to manage students, staff, classes, finances and academic records with advanced reporting.",
      technologies: ["Node.js", "Express", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop&crop=center",
      github: "https://github.com/mwangaza12/school-management-system",
      live: "#",
      category: "Education",
      status: "Completed",
    },
  ];

  const getIcon = (tech) => {
    if (tech.includes("React") || tech.includes("Node"))
      return <Code className="w-3 h-3" />;
    if (tech.includes("MongoDB") || tech.includes("PostgreSQL"))
      return <Database className="w-3 h-3" />;
    return <Globe className="w-3 h-3" />;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Live":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Development":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Completed":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-blue-500/20">
            <Code className="w-4 h-4" />
            Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in full-stack development and system architecture
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 200}>
              <div className="group relative">
                {/* Gradient Border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-700/50 group-hover:border-gray-600/50">
                  {/* Image */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>

                    {/* Status */}
                    <div
                      className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                        project.status
                      )}`}
                    >
                      {project.status}
                    </div>

                    {/* Category */}
                    <div className="absolute top-4 right-4 bg-gray-800/80 backdrop-blur-sm text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </div>

                    {/* Action Buttons */}
                    <div
                      className="absolute bottom-4 right-4 flex gap-2 transition-all duration-300
                        opacity-100 md:opacity-0 md:group-hover:opacity-100 
                        translate-y-0 md:translate-y-2 md:group-hover:translate-y-0"
                    >
                      {project.live && project.live !== "#" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-500 hover:bg-blue-600 text-white p-2.5 rounded-lg transition-colors shadow-lg backdrop-blur-sm"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-700/80 hover:bg-gray-600 text-white p-2.5 rounded-lg transition-colors shadow-lg backdrop-blur-sm"
                          aria-label="GitHub Repo"
                        >
                          <Github size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1.5 bg-gray-800/60 text-blue-400 text-xs px-3 py-1.5 rounded-lg border border-gray-700/50 hover:border-blue-500/30 transition-colors"
                        >
                          {getIcon(tech)}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Call to Action */}
        <AnimatedSection delay={600} className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in collaborating?
            </h3>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              I'm always open to discussing new opportunities and innovative projects
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Get In Touch
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
