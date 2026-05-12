'use client';

import { motion } from 'motion/react';
import { Dumbbell, HeartPulse, Zap, Flame, Move, UserCheck, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const programs = [
  {
    title: 'Weight Training',
    description: 'Build serious muscle and increase your strength with our specialized weight lifting programs.',
    icon: Dumbbell,
    color: 'bg-primary',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Cardio Fitness',
    description: 'Improve your cardiovascular health and endurance with high-intensity cardio sessions.',
    icon: HeartPulse,
    color: 'bg-accent',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1974&auto=format&fit=crop'
  },
  {
    title: 'Yoga Classes',
    description: 'Find your inner peace and improve flexibility with our expert-led yoga and mindfulness classes.',
    icon: Move,
    color: 'bg-coral',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop'
  },
  {
    title: 'CrossFit',
    description: 'Push your limits with functional movements performed at high intensity. Competitive and fun.',
    icon: Zap,
    color: 'bg-slate-900',
    image: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=1982&auto=format&fit=crop'
  },
  {
    title: 'Personal Training',
    description: 'Get 1-on-1 attention with a plan tailored specifically to your body and fitness goals.',
    icon: UserCheck,
    color: 'bg-primary',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974&auto=format&fit=crop'
  },
  {
    title: 'Zumba',
    description: 'Dance your way to fitness! High-energy music and movements that keep you burning calories.',
    icon: Flame,
    color: 'bg-coral',
    image: 'https://images.unsplash.com/photo-1527933053326-89d1746b76b9?q=80&w=2070&auto=format&fit=crop'
  },
];

export default function Programs() {
  return (
    <section id="programs" className="section-padding bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-coral/10 blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 inline-block text-accent">Our Programs</span>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.9]">
              PUSH YOUR <br />
              <span className="text-accent underline decoration-coral/50 underline-offset-8">PHYSICAL</span> LIMITS
            </h2>
          </div>
          <p className="text-white/60 max-w-sm font-bold uppercase tracking-tight text-lg">
            Tactical training programs for high-performance results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[480px] rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl glass-dark"
            >
              <Image 
                src={program.image} 
                alt={program.title} 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute inset-x-0 bottom-0 p-10 pb-12">
                <div className={`${program.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-2xl shadow-black/20`}>
                  <program.icon className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">{program.title}</h3>
                <p className="text-white/60 text-sm mb-8 font-medium leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                  {program.description}
                </p>
                <button className="flex items-center gap-2 text-accent font-black text-xs group/btn uppercase tracking-[0.2em] transition-all">
                  Details 
                  <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
            <button className="bg-primary text-white px-12 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-2xl shadow-primary/20">
                View All Programs
            </button>
        </div>
      </div>
    </section>
  );
}
