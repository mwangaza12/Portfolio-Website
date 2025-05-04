import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import "./App.css";

export default function App() {
  return (
    <div className="bg-gray-900 text-white">
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #60a5fa }
        }

        .typewriter {
          overflow: hidden;
          border-right: 0.15em solid #60a5fa;
          white-space: nowrap;
          margin: 0 auto;
          letter-spacing: 0.15em;
          animation: typing 3.5s steps(30, end), blink-caret 0.75s step-end infinite;
        }
      `}</style>

      
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}