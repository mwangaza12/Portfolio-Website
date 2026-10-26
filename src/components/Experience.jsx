import { useRef, useState, useEffect } from "react";

const useInView = (ref) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(node);

    return () => observer.unobserve(node);
  }, [ref]);

  return isInView;
};

const AnimatedSection = ({ children, className, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      } ${className || ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Edit the role title and dates for Kilifi County to match your actual details.
const experiences = [
  {
    tab: "Kilifi County",
    role: "Software Developer",
    company: "Kilifi County Government",
    period: "2026 — Present",
    location: "Kilifi, Kenya",
    points: [
      "Built an Assets Management System for recording, tracking, and reporting on all the county government assets",
      "Developed a Staff Training Needs Assessment Portal for capturing and reviewing staff training needs",
    ],
    skills: ["React", "Django", "Laravel", "Grafana", "Prometheus"],
  },
  {
    tab: "Teach2give",
    role: "Software Engineering Trainee",
    company: "Teach2give Bootcamp",
    period: "2025",
    location: "On-Site",
    points: [
      "Completed an immersive full-stack bootcamp, building web applications with modern frameworks",
      "Built 5+ full-stack applications in collaborative, cross-functional teams",
      "Mastered modern development workflows across the stack",
    ],
    skills: ["React", "Node.js", "TypeScript", "Full-Stack Development"],
  },
  {
    tab: "Freelance",
    role: "Web Developer",
    company: "Freelance",
    period: "2024",
    location: "On-Site",
    points: [
      "Developed and deployed a School Management System for a client",
      "Implemented secure authentication flows across client projects",
      "Improved site performance by 40% through optimization",
    ],
    skills: ["Laravel", "Tailwind CSS", "MySQL", "API Integration", "Filament"],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);

  const handleKeyDown = (e) => {
    const last = experiences.length - 1;
    let next = null;

    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      next = active === last ? 0 : active + 1;
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      next = active === 0 ? last : active - 1;
    } else if (e.key === "Home") {
      next = 0;
    } else if (e.key === "End") {
      next = last;
    }

    if (next !== null) {
      e.preventDefault();
      setActive(next);
      tabRefs.current[next]?.focus();
    }
  };

  const exp = experiences[active];

  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
      <style>{`
        @keyframes expFade {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: none; }
        }
        .exp-panel { animation: expFade 0.35s ease-out; }
        @media (prefers-reduced-motion: reduce) {
          .exp-panel { animation: none; }
        }
      `}</style>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap">
              Where I've Worked
            </h2>
            <div className="h-px flex-1 max-w-xs bg-gray-700" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            {/* Tabs: horizontal scroll on mobile, vertical list on desktop */}
            <div
              role="tablist"
              aria-label="Work experience"
              onKeyDown={handleKeyDown}
              className="flex md:flex-col overflow-x-auto md:overflow-visible border-b border-gray-700 md:border-b-0 md:border-l md:w-44 shrink-0"
            >
              {experiences.map((item, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={item.tab}
                    ref={(el) => (tabRefs.current[i] = el)}
                    role="tab"
                    id={`exp-tab-${i}`}
                    aria-selected={isActive}
                    aria-controls="exp-panel"
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActive(i)}
                    className={`whitespace-nowrap text-left text-sm sm:text-base px-5 py-3 transition-colors border-b-2 -mb-px md:mb-0 md:border-b-0 md:border-l-2 md:-ml-px focus-visible:outline focus-visible:outline-blue-400 ${
                      isActive
                        ? "border-blue-400 bg-blue-500/10 text-blue-400"
                        : "border-transparent text-gray-400 hover:bg-gray-800 hover:text-blue-400"
                    }`}
                  >
                    {item.tab}
                  </button>
                );
              })}
            </div>

            {/* Panel */}
            <div
              key={active}
              id="exp-panel"
              role="tabpanel"
              aria-labelledby={`exp-tab-${active}`}
              className="exp-panel flex-1 min-w-0"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                {exp.role}{" "}
                <span className="text-base font-semibold text-blue-400">
                  @ {exp.company}
                </span>
              </h3>

              <p className="text-sm text-gray-400 mt-2 mb-6">
                {exp.period} · {exp.location}
              </p>

              <ul className="space-y-4">
                {exp.points.map((point) => (
                  <li key={point} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="w-2 h-2 mt-2.5 rounded-full bg-blue-400 shrink-0"
                    />
                    <span className="text-gray-300 text-base leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              {exp.skills && (
                <ul className="flex flex-wrap gap-2 mt-8">
                  {exp.skills.map((skill) => (
                    <li
                      key={skill}
                      className="px-3 py-1 bg-blue-500/10 text-blue-300 text-sm rounded-full border border-blue-500/20"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}