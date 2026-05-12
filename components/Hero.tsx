'use client';

import { motion } from 'motion/react';
import { ChevronRight, Play, Dumbbell } from 'lucide-react';
import Image from 'next/image';

const stats = [
  { value: '5000+', label: 'Members' },
  { value: '25+', label: 'Trainers' },
  { value: '10+', label: 'Years Exp' },
];

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="Gym Background"
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-coral/10 text-coral rounded-full w-fit mb-8 border border-coral/20"
            >
              <span className="w-2 h-2 bg-coral rounded-full animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Premium Gym Experience</span>
            </motion.div>
            
            <h1 className="text-6xl lg:text-[7rem] font-black leading-[0.9] text-white underline-offset-8 mb-8 text-shadow">
              TRANSFORM<br />
              YOUR <span className="text-primary">BODY</span>,<br />
              <span className="relative">
                YOUR LIFE
                <div className="absolute bottom-2 left-0 w-full h-4 bg-accent/40 -z-10 blur-[2px]"></div>
              </span>
            </h1>
            
            <p className="text-white/70 text-lg lg:text-xl max-w-xl mb-10 leading-relaxed font-light">
              Experience the pinnacle of fitness training with world-class facilities, 
              certified personal trainers, and a community dedicated to excellence. 
              Your journey to a healthier, stronger you starts right here.
            </p>
            
            <div className="flex flex-wrap gap-5 mt-10">
              <button className="px-12 py-5 bg-dark text-white rounded-2xl font-black uppercase tracking-tighter flex items-center gap-3 shadow-2xl transition-all hover:scale-105 active:scale-95">
                Join Now <ChevronRight size={20} />
              </button>
              <button className="px-12 py-5 bg-white/10 backdrop-blur-md border-2 border-primary text-white rounded-2xl font-black uppercase tracking-tighter transition-all hover:bg-primary/20 active:scale-95 shadow-lg shadow-primary/10">
                Free Trial
              </button>
            </div>

            <div className="mt-20 flex gap-12 items-center">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + (i * 0.1) }}
                    className="flex flex-col"
                  >
                    <span className="text-4xl font-black text-white leading-none">{stat.value}</span>
                    <span className="text-[10px] uppercase font-bold text-white/40 tracking-[0.1em] mt-1">{stat.label}</span>
                  </motion.div>
                  {i < stats.length - 1 && (
                    <div className="w-px h-10 bg-white/10 mx-6 lg:mx-8 hidden sm:block" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Floating Element - Optional */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
              <div className="w-[450px] aspect-[4/5] rounded-[4rem] border-8 border-white/10 shadow-2xl relative z-10 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1541534741688-6078c64b52d2?q=80&w=2070&auto=format&fit=crop" 
                  alt="Fitness" 
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 glass p-8 rounded-[2.5rem] shadow-2xl z-20 flex items-center gap-5">
                <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center text-dark shadow-xl shadow-accent/30">
                  <Dumbbell size={28} />
                </div>
                <div>
                  <div className="text-xl font-black text-dark mb-0.5 uppercase tracking-tighter">Elite Coaching</div>
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">Advanced Roadmap</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
