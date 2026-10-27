import { useRef, useState, useEffect } from "react";
import me from "../assets/professional.jpeg";
import cv from "../assets/cv.pdf"

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

// Classes are written out in full so Tailwind can detect them
const hiddenFrom = {
  left: "-translate-x-10",
  right: "translate-x-10",
  up: "translate-y-10",
};

const AnimatedSection = ({ children, className, from = "up" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${
        isInView
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${hiddenFrom[from]}`
      } ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-gray-800 overflow-hidden">
      {/* Grid background, fading out toward the edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148, 163, 184, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.12) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 85%)",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 85%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-16">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-stretch">
          <AnimatedSection from="left" className="h-full">
            <div className="relative rounded-lg overflow-hidden shadow-xl mx-auto w-full max-w-md h-96 lg:h-full lg:min-h-[24rem]">
              <img
                src={me}
                alt="Developer Profile"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection from="right">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-4">
                Joseph Mwangaza Mokoli
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
                I don’t just write code — I design systems, solve problems, and bring ideas to life. With over 1 year in software development, I’ve shipped products that power startups, streamline businesses, and delight users.
              </p>
              <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
                My roots in Information Technology gave me a solid foundation, but curiosity took me further. Whether it’s building sleek frontend interfaces, architecting APIs, or automating workflows, I thrive where code meets creativity.
              </p>
              <p className="text-sm sm:text-base text-gray-300 mb-8 leading-relaxed">
                Off-screen, I find clarity on hiking trails, inspiration in open-source communities, and energy in collaboration. I’m always up for building something impactful — or tearing down bugs at 2 AM with good coffee and better ideas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={cv}
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
}