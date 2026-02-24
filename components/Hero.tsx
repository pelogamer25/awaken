import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const yBackground = useTransform(scrollY, [0, 1000], [0, 400]);
  const yText = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacityText = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      
      {/* Background Layer - Image/Video Mock */}
      <motion.div 
        style={{ y: yBackground }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background z-10" />
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Darkening overlay */}
        <img 
          src="https://picsum.photos/seed/travel_hero/1920/1080" 
          alt="Luxury Destination" 
          className="w-full h-full object-cover scale-110"
        />
      </motion.div>

      {/* Cinematic Lighting/Bloom Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px] z-10" />

      {/* Content */}
      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="relative z-20 container mx-auto px-6 text-center flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 flex items-center gap-4"
        >
          <div className="h-[1px] w-12 bg-accent/60" />
          <span className="text-accent tracking-[0.3em] uppercase text-xs md:text-sm font-semibold">
            Beyond the Horizon
          </span>
          <div className="h-[1px] w-12 bg-accent/60" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} // Custom cubic bezier
          className="text-5xl md:text-7xl lg:text-9xl font-serif text-white mb-8 tracking-tight leading-tight"
        >
          Awaken Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400 italic pr-2">
            Wanderlust
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-xl text-gray-300 text-sm md:text-lg mb-10 leading-relaxed font-light mix-blend-screen"
        >
          Curated journeys for the modern connoisseur. Experience the world's most 
          breathtaking destinations with unparalleled luxury and privacy.
        </motion.p>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center gap-3 text-sm tracking-widest uppercase">
              Plan Your Journey <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
          
          <motion.button
             whileHover={{ scale: 1.05 }}
             className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors uppercase tracking-widest"
          >
            <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white/10">
              <Play className="w-3 h-3 ml-0.5 fill-current" />
            </div>
            Watch Film
          </motion.button>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-60"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </div>
  );
};

export default Hero;
