import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Package } from '../types';

const packages: Package[] = [
  {
    id: 'p1',
    title: 'The Signature',
    duration: '7 Days',
    price: 8500,
    features: ['Private Villa Stay', 'Personal Concierge', 'Chauffeur Service', 'Michelin Dining Experience'],
  },
  {
    id: 'p2',
    title: 'The Odyssey',
    duration: '14 Days',
    price: 15000,
    isPopular: true,
    features: ['Private Jet Transfer', 'Multi-Destination', 'Exclusive Access Tours', '24/7 Butler', 'Spa Treatments'],
  },
  {
    id: 'p3',
    title: 'The Retreat',
    duration: '5 Days',
    price: 5200,
    features: ['Wellness Consultation', 'Secluded Island', 'Organic Cuisine', 'Yoga Sessions'],
  },
];

const Packages: React.FC = () => {
  return (
    <section className="py-24 relative bg-slate-950">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-background to-transparent z-10" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />

      <div className="container mx-auto px-6 relative z-20">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-white mb-4"
          >
            Signature Journeys
          </motion.h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full opacity-60" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className={`relative p-8 rounded-3xl backdrop-blur-xl border transition-all duration-300 ${
                pkg.isPopular 
                  ? 'bg-white/10 border-accent/50 shadow-[0_0_50px_rgba(212,175,55,0.15)] z-10' 
                  : 'bg-white/5 border-white/10 hover:border-white/30'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-black text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" /> Most Desired
                </div>
              )}

              <h3 className="text-2xl font-serif text-white mb-2">{pkg.title}</h3>
              <p className="text-gray-400 text-sm mb-6 uppercase tracking-wider">{pkg.duration}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-light text-white">${pkg.price.toLocaleString()}</span>
                <span className="text-gray-500 text-sm"> / person</span>
              </div>

              <div className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl text-sm uppercase tracking-widest font-medium transition-all ${
                pkg.isPopular 
                  ? 'bg-accent text-black hover:bg-yellow-400' 
                  : 'border border-white/20 text-white hover:bg-white/10'
              }`}>
                Inquire
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
