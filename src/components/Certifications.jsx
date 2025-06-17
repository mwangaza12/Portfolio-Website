import { useState,useEffect,useRef } from "react";
import cyber from "../assets/google_cyber_sec.png"
import oracle from "../assets/oracle.png"
import itSupport from "../assets/IT.png"

export default function Certications(){
  const [activeIndex, setActiveIndex] = useState(0);
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
  
//   useEffect(() => {
//   const interval = setInterval(() => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % certifications.length);
//   }, 5000);
  
//   return () => clearInterval(interval);
// }, []);

  const certifications = [
  {
    title: "Google Cybersecurity Professional Certificate",
    badge: cyber,
    link: "https://www.coursera.org/account/accomplishments/specialization/FMFGJIC23XDQ"
  },
  {
    title: "Google IT Support Professional Certificate",
    badge: itSupport,
    link: "https://www.coursera.org/account/accomplishments/specialization/UMGULF9BWD5C"
  },
  {
    title: "Oracle SQL Explorer",
    badge: oracle,
    link: ""
  }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          <span className="inline-block mr-2">🎓</span>
          Badges & Certification
          <span className="inline-block ml-2">📜</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <AnimatedSection key={index} className="text-center">
              <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                <div className="text-2xl text-yellow-300 font-bold mb-4">
                  <img
                    src={cert.badge}
                    alt={cert.title}
                    className="mx-auto mb-4 object-contain max-h-32 max-w-full"
                  />
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">
                  {cert.title}
                </h3>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-2 text-sm text-green-400 border border-green-400 rounded-full hover:bg-green-400 hover:text-black transition"
                >
                  Verify
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};