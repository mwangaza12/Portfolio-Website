import { useRef, useState, useEffect } from "react";
import { GraduationCap, Code, Users, Trophy, Calendar, MapPin } from "lucide-react";

export default function Experience() {
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

  const AnimatedSection = ({ children, className, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
      <div
        ref={ref}
        className={`transition-all duration-1000 transform ${
          isInView
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-8 scale-95"
        } ${className || ""}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    );
  };

  const experiences = [
    {
      icon: <GraduationCap size={28} />,
      title: "Teach2give Bootcamp",
      subtitle: "Software Engineering Trainee",
      period: "2025",
      location: "On-Site",
      description:
        "Completed an immersive software engineering bootcamp focused on full-stack development. Gained hands-on experience building web applications, mastering modern frameworks, and working on collaborative projects.",
      skills: ["React", "Node.js", "Typescript", "Full-Stack Development"],
      achievements: [
        "Built 5+ full-stack applications",
        "Collaborated with cross-functional teams",
        "Mastered modern development workflows",
      ],
    },
    {
      icon: <Code size={28} />,
      title: "Freelance Developer",
      subtitle: "Web Developer",
      period: "2024",
      location: "On-Site",
      description:
        "Worked with clients on a variety of projects, from landing pages to complex dashboards. Delivered solutions that are fast, scalable, and responsive.",
      skills: ["Laravel", "Tailwind CSS", "MySQL", "API Integration", "Filament"],
      achievements: [
        "Developed and deployed School Management System",
        "Implemented secure authentication flows",
        "Improved site performance by 40% through optimization",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-500/20">
            <Trophy size={16} />
            Professional Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6">
            Experience & Growth
          </h2>
        </AnimatedSection>

        {/* Grid with 2 cards in a row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <AnimatedSection key={index} delay={index * 200}>
              <div className="group relative">
                {/* Hover Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative bg-gray-800/80 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:transform hover:scale-[1.02]">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
                    <div className="flex items-start gap-4 mb-4 md:mb-0">
                      <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                        <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                          {exp.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-100 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-blue-400 font-semibold mb-2">
                          {exp.subtitle}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-8">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-8">
                    <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <Code size={18} />
                      Technologies & Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-blue-500/10 text-blue-300 text-sm rounded-full border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <Trophy size={18} />
                      Key Achievements
                    </h4>
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-pink-500/50 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Call to Action */}
        <AnimatedSection delay={400} className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer group">
            <Users size={20} />
            <span className="text-lg">
              Ready to collaborate and build amazing things together
            </span>
            <div className="w-0 group-hover:w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300"></div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
