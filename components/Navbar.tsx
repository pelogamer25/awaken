import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Destinations', 'Experiences', 'Private Jets', 'Journal'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || mobileMenuOpen
          ? 'bg-background/70 backdrop-blur-xl border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer z-50">
          <Globe className="w-6 h-6 text-accent" />
          <span className="text-xl font-serif font-semibold tracking-wider text-white">
            LUMINA
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-light tracking-widest text-gray-300 hover:text-accent transition-colors duration-300 uppercase"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <Search className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
          <button className="px-6 py-2 rounded-full border border-white/20 hover:bg-white/10 hover:border-accent/50 text-xs uppercase tracking-widest transition-all duration-300">
            Book Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-50" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
        </div>

        {/* Mobile Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-0 left-0 w-full bg-background flex flex-col items-center justify-center gap-8 md:hidden"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * i }}
                  href="#"
                  className="text-2xl font-serif text-white hover:text-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
