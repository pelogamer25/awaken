import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Eleanor Sterling',
    role: 'Art Collector',
    text: "Lumina didn't just book a trip; they orchestrated a masterpiece. Every detail, from the private museum tours to the sunset yacht dinners, was flawless.",
    avatar: 'https://picsum.photos/seed/eleanor/100/100',
  },
  {
    id: '2',
    name: 'James & Sarah Chen',
    role: 'Entrepreneurs',
    text: "The silence of the desert camp was exactly what we needed. A profoundly spiritual disconnect from the noise of our daily lives.",
    avatar: 'https://picsum.photos/seed/chen/100/100',
  },
  {
    id: '3',
    name: 'Marcus Thorne',
    role: 'Architect',
    text: "Visually stunning. The curation of hotels matched my aesthetic perfectly. It felt like living inside a design magazine.",
    avatar: 'https://picsum.photos/seed/marcus/100/100',
  },
];

const Testimonials: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section className="py-32 bg-background relative overflow-hidden">
        {/* Parallax Background Elements */}
        <motion.div style={{ y }} className="absolute top-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-[80px]" />
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Quote className="w-12 h-12 text-accent/50 mb-6 rotate-180" />
                        <h2 className="text-5xl md:text-6xl font-serif text-white leading-tight mb-8">
                            Stories from the <br /> 
                            <span className="text-gray-500">Extraordinary.</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-md mb-8">
                            Our clients don't just travel; they transform. Hear from those who have experienced the Lumina difference.
                        </p>
                        <button className="text-accent hover:text-white transition-colors uppercase tracking-widest text-sm font-semibold flex items-center gap-2">
                            Read Journal <div className="w-8 h-[1px] bg-accent" />
                        </button>
                    </motion.div>
                </div>

                <div className="flex flex-col gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            whileHover={{ scale: 1.02 }}
                            className={`bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl ${i === 1 ? 'lg:-ml-12' : ''}`}
                        >
                            <p className="text-gray-300 font-light italic mb-6 leading-relaxed">"{t.text}"</p>
                            <div className="flex items-center gap-4">
                                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-white/20" />
                                <div>
                                    <h4 className="text-white font-serif">{t.name}</h4>
                                    <span className="text-xs text-accent uppercase tracking-wider">{t.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Testimonials;
