'use client';

import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const progressBars = [
  { label: 'Strength', value: 92, color: 'bg-primary' },
  { label: 'Cardio', value: 85, color: 'bg-accent' },
  { label: 'Flexibility', value: 78, color: 'bg-coral' },
  { label: 'Weight Loss', value: 96, color: 'bg-slate-800' },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Images Grid */}
          <div className="relative group">
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                whileInView={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="space-y-4"
              >
                <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
                  <Image 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop" 
                    alt="Training" 
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="bg-primary p-8 rounded-3xl text-white">
                  <h4 className="text-4xl font-black mb-1">10+</h4>
                  <p className="text-sm font-bold uppercase tracking-widest opacity-80">Years Experience</p>
                </div>
              </motion.div>
              <div className="pt-12 space-y-4">
                <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
                  <Image 
                    src="https://images.unsplash.com/photo-1593079831268-3381b0fbd42e?q=80&w=2070&auto=format&fit=crop" 
                    alt="Gym" 
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-xl">
                  <Image 
                    src="https://images.unsplash.com/photo-1574673130244-c707aa2295fd?q=80&w=2070&auto=format&fit=crop" 
                    alt="Fit" 
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
            {/* Absolute element */}
            <div className="absolute -bottom-10 -right-10 bg-white rounded-full p-10 shadow-2xl hidden lg:block border border-slate-100">
               <div className="text-center">
                 <div className="text-5xl font-black text-primary">ABS</div>
                 <div className="text-xs font-bold text-slate-400 tracking-[0.2em]">HEALTH</div>
               </div>
            </div>
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 inline-block">The Foundation</span>
            <h2 className="text-5xl lg:text-7xl font-black text-dark leading-[0.9] mb-8">
              ELITE <span className="text-coral">HEALTH</span> <br />
              STANDARDS
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed font-medium">
              At ABS Health Care, we dismantle limitations through scientific training, 
              elite-grade nutrition, and a facility that breathes motivation.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {['Certified Expert Trainers', 'Modern Gym Equipment', 'Personalized Workout Plans', 'Nutrition & Lifestyle Coaching'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="text-primary w-4 h-4 shrink-0" />
                  </div>
                  <span className="text-dark font-black uppercase tracking-tighter text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Progress Bars */}
            <div className="space-y-6">
              {progressBars.map((bar) => (
                <div key={bar.label}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-black text-slate-800 text-sm uppercase">{bar.label}</span>
                    <span className="font-bold text-primary text-sm">{bar.value}%</span>
                  </div>
                  <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${bar.value}%` }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                      className={`h-full ${bar.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-12 bg-dark border-2 border-dark text-white px-10 py-5 rounded-2xl font-black uppercase tracking-tighter hover:bg-transparent hover:text-dark transition-all flex items-center gap-3 group shadow-2xl active:scale-95">
              Explore Our Vision
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
