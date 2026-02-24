import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Use a ref for custom cursor if desired, but sticking to CSS/Components for simplicity
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple custom cursor follower
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="relative bg-background text-white min-h-screen selection:bg-accent selection:text-black">
      {/* Custom Cursor Element - Subtle Glow */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 hidden md:block mix-blend-difference"
      >
         <div className="w-full h-full bg-white rounded-full opacity-50 blur-[2px]" />
      </div>
      
      {/* Noise Texture Overlay for film grain effect */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-[90] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <Navbar />
      
      <main>
        <Hero />
        <Destinations />
        <Packages />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
};

export default App;
