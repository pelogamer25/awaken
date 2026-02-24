import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Destination } from '../types';

const destinations: Destination[] = [
  {
    id: '1',
    name: 'Santorini Heights',
    location: 'Greece',
    image: 'https://picsum.photos/seed/santorini/600/800',
    description: 'Cliffside serenity with volcanic views.',
    tags: ['Island', 'Romance'],
  },
  {
    id: '2',
    name: 'Kyoto Zen Gardens',
    location: 'Japan',
    image: 'https://picsum.photos/seed/kyoto/600/800',
    description: 'Ancient traditions meet modern luxury.',
    tags: ['Culture', 'Peace'],
  },
  {
    id: '3',
    name: 'Amalfi Coast',
    location: 'Italy',
    image: 'https://picsum.photos/seed/amalfi/600/800',
    description: 'La dolce vita in its purest form.',
    tags: ['Coastal', 'Dining'],
  },
  {
    id: '4',
    name: 'Reykjavik Wilds',
    location: 'Iceland',
    image: 'https://picsum.photos/seed/iceland/600/800',
    description: 'Aurora borealis from your private glass lodge.',
    tags: ['Adventure', 'Nature'],
  },
];

const Destinations: React.FC = () => {
  return (
    <section id="destinations" className="py-24 bg-background relative overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:flex justify-between items-end"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">Curated Destinations</h2>
            <p className="text-gray-400 max-w-md">Discover the unseen. We open doors to the world's most exclusive sanctuaries.</p>
          </div>
          <button className="hidden md:block text-accent border-b border-accent/30 pb-1 hover:border-accent transition-all mt-6 md:mt-0">
            View All Locations
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative h-[450px] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 p-6 w-full transform transition-transform duration-500">
                <div className="flex gap-2 mb-3">
                    {dest.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-white/10 backdrop-blur-md rounded text-white/80">
                            {tag}
                        </span>
                    ))}
                </div>
                <h3 className="text-2xl font-serif text-white mb-1 group-hover:text-accent transition-colors">
                  {dest.name}
                </h3>
                <div className="flex items-center gap-2 text-gray-300 text-sm mb-4">
                  <MapPin className="w-3 h-3" />
                  {dest.location}
                </div>
                <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {dest.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
