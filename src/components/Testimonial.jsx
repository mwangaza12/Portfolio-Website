import { useState,useEffect,useRef } from "react";
export default function Testimonials(){
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
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO at TechCorp",
      text: "Working with this developer was a game-changer for our project. They delivered high-quality code on time and provided innovative solutions to complex problems."
    },
    {
      name: "Michael Chang",
      role: "Product Manager",
      text: "Exceptional technical skills paired with great communication. Always goes the extra mile to ensure the project exceeds expectations."
    },
    {
      name: "Emily Roberts",
      role: "Startup Founder",
      text: "Transformed our concept into a fully-functional application. The attention to detail and user experience considerations were outstanding."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">Testimonials</h2>
        
        <AnimatedSection>
          <div className="relative max-w-3xl mx-auto">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500" 
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="min-w-full px-4">
                    <div className="bg-gray-900 p-8 rounded-lg shadow-lg text-center">
                      <div className="mb-6">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-2xl">★</span>
                        ))}
                      </div>
                      <p className="text-gray-300 text-lg italic mb-6">"{testimonial.text}"</p>
                      <div>
                        <p className="text-white font-semibold">{testimonial.name}</p>
                        <p className="text-blue-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-blue-400' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};