import { useEffect, useState, useRef } from "react";
import { Code2, Database, Server, Rocket, Palette,FileCode,Layers,Cpu,Globe,GitBranch,TestTube,Container,Cloud,Settings, Code} from "lucide-react";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

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
        className={`transition-all duration-700 ease-out ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        } ${className || ""}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    );
  };

  const skillsData = {
    frontend: [
      { name: "React", icon: Code2, color: "text-blue-400" },
      { name: "TypeScript", icon: FileCode, color: "text-blue-500" },
      { name: "JavaScript", icon: FileCode, color: "text-yellow-400" },
      { name: "Tailwind CSS", icon: Palette, color: "text-cyan-400" },
      { name: "Redux", icon: Layers, color: "text-purple-400" },
      { name: "SCSS", icon: Palette, color: "text-pink-400" }
    ],
    backend: [
      { name: "Node.js", icon: Server, color: "text-green-400" },
      { name: "Express", icon: Server, color: "text-gray-400" },
      { name: "Drizzle ORM", icon: Database, color: "text-green-500" },
      { name: "REST API", icon: Globe, color: "text-blue-400" },
      { name: "GraphQL", icon: Layers, color: "text-pink-400" },
      { name: "Laravel", icon: Server, color: "text-red-400" },
      { name: "PHP", icon: Code2, color: "text-indigo-400" }
    ],
    database: [
      { name: "MySQL", icon: Database, color: "text-orange-400" },
      { name: "PostgreSQL", icon: Database, color: "text-blue-400" },
      { name: "Firebase", icon: Database, color: "text-yellow-400" },
      { name: "Redis", icon: Database, color: "text-red-400" },
      { name: "SQLite", icon: Database, color: "text-blue-300" },
      { name: "Oracle", icon: Database, color: "text-red-500" }
    ],
    devops: [
      { name: "Docker", icon: Container, color: "text-blue-400" },
      { name: "AWS", icon: Cloud, color: "text-orange-400" },
      { name: "CI/CD", icon: Settings, color: "text-green-400" },
      { name: "Kubernetes", icon: Cpu, color: "text-blue-500" },
      { name: "Git", icon: GitBranch, color: "text-orange-500" },
      { name: "Github", icon: GitBranch, color: "text-gray-400" },
      { name: "Jest", icon: TestTube, color: "text-red-400" }
    ]
  };

  const tabs = [
    { id: "all", label: "All Skills", icon: Code2 },
    { id: "frontend", label: "Frontend", icon: Palette },
    { id: "backend", label: "Backend", icon: Server },
    { id: "database", label: "Database", icon: Database },
    { id: "devops", label: "DevOps", icon: Rocket }
  ];

  const getFilteredSkills = () => {
    if (activeTab === "all") {
      return Object.values(skillsData).flat();
    }
    return skillsData[activeTab] || [];
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-blue-500/20">
            <Code className="w-4 h-4" />
            Skills
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6">
            Skills & Technologies
          </h2>
          <div className="mt-8 h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </AnimatedSection>

        {/* Tabs */}
        <AnimatedSection delay={200} className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative flex items-center space-x-2 px-4 sm:px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105"
                      : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700/50 hover:border-gray-600/50"
                  }`}
                >
                  <IconComponent size={18} />
                  <span className="text-sm sm:text-base">{tab.label}</span>
                  {activeTab === tab.id && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-xl"></div>
                  )}
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Skills Grid */}
        <AnimatedSection delay={400}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
            {filteredSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={`${skill.name}-${index}`}
                  className="group relative bg-gray-800/40 backdrop-blur-sm border border-gray-700/30 rounded-xl p-4 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: activeTab ? 'fadeInUp 0.5s ease-out forwards' : 'none'
                  }}
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className={`p-3 rounded-lg bg-gray-700/50 group-hover:bg-gray-700/70 transition-colors duration-300 ${skill.color}`}>
                      <IconComponent size={24} />
                    </div>
                    <span className="text-white font-medium text-sm text-center leading-tight">
                      {skill.name}
                    </span>
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection delay={600} className="text-center mt-16">
          <div className="inline-flex items-center space-x-6 bg-gray-800/30 backdrop-blur-sm px-8 py-4 rounded-full border border-gray-700/30">
            <div className="flex items-center space-x-2">
              <Code2 size={20} className="text-blue-400" />
              <span className="text-gray-300 font-medium">{Object.values(skillsData).flat().length} Total Skills</span>
            </div>
            <div className="w-1 h-6 bg-gray-600"></div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 font-medium">Always Learning</span>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}