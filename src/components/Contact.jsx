import { useState,useEffect,useRef } from "react";
import { Mail } from "lucide-react";
export default function Contact(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };
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

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <p className="text-gray-300 mb-8">
                Feel free to reach out to me for any project inquiries, 
                collaboration opportunities, or just to say hello!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Mail className="text-blue-400 mr-3" size={20} />
                  <span>josephmwangaza1@gmail.com</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection>
            <div>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  ></textarea>
                </div>
                
                <button
                  onClick={handleSubmit}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md font-medium transition-colors w-full"
                >
                  Send Message
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};