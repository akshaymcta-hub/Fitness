'use client';

import { motion } from 'motion/react';
import { Maximize2 } from 'lucide-react';
import Image from 'next/image';

const images = [
  { url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop', size: 'large' },
  { url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop', size: 'small' },
  { url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop', size: 'medium' },
  { url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1740&auto=format&fit=crop', size: 'tall' },
  { url: 'https://images.unsplash.com/photo-1574673130244-c707aa2295fd?q=80&w=2070&auto=format&fit=crop', size: 'small' },
  { url: 'https://images.unsplash.com/photo-1593079831268-3381b0fbd42e?q=80&w=2070&auto=format&fit=crop', size: 'medium' },
];

export default function Gallery() {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 inline-block">Visuals</span>
            <h2 className="text-5xl lg:text-7xl font-black text-dark leading-[0.9]">
              THE <span className="text-coral">SANCTUARY</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm font-bold uppercase tracking-tight text-lg">
            A premium atmosphere engineered for deep focus and high performance.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative rounded-3xl overflow-hidden shadow-lg ${
                img.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                img.size === 'tall' ? 'row-span-2' : ''
              }`}
            >
              <Image 
                src={img.url} 
                alt="Gym Gallery" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex items-center justify-center">
                 <div className="bg-white p-4 rounded-full text-primary scale-50 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
                    <Maximize2 size={24} />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
