'use client';

import { motion } from 'motion/react';
import { Instagram, Twitter, Facebook, Award } from 'lucide-react';
import Image from 'next/image';

const trainers = [
  {
    name: 'Marcus Thorne',
    role: 'Bodybuilding Expert',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fe?q=80&w=1974&auto=format&fit=crop',
    experience: '12 Years'
  },
  {
    name: 'Sarah Jenkins',
    role: 'Yoga & Pilates Coach',
    image: 'https://images.unsplash.com/photo-1518611012118-2969c6370238?q=80&w=2070&auto=format&fit=crop',
    experience: '8 Years'
  },
  {
    name: 'David Vane',
    role: 'CrossFit Specialist',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
    experience: '10 Years'
  },
  {
    name: 'Elena Rossi',
    role: 'Nutrition Specialist',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d17a4d?q=80&w=1974&auto=format&fit=crop',
    experience: '6 Years'
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 inline-block">Mentors</span>
          <h2 className="text-5xl lg:text-7xl font-black text-dark leading-[0.9] mb-8 uppercase">
            ELITE <span className="text-coral">MASTERS</span>
          </h2>
          <p className="text-gray-500 text-lg font-bold uppercase tracking-tight">
            Certified specialists engineered for your results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-20">
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative mb-10">
                <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="relative w-full aspect-[4/5] rounded-[3.5rem] overflow-hidden glass-card p-2 shadow-2xl transition-transform duration-500 group-hover:-translate-y-4">
                  <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
                    <Image 
                      src={trainer.image} 
                      alt={trainer.name} 
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                {/* Years Badge */}
                <div className="absolute -bottom-6 -right-4 glass px-6 py-3 rounded-2xl font-black text-[10px] shadow-2xl z-20 flex items-center gap-2 border border-white/50 uppercase tracking-[0.2em] text-dark shadow-primary/20">
                  <Award size={16} className="text-primary" />
                  {trainer.experience}
                </div>
              </div>

              <div className="px-2">
                <h3 className="text-3xl font-black text-dark mb-1 transition-colors group-hover:text-primary uppercase tracking-tighter leading-none">{trainer.name}</h3>
                <p className="text-gray-400 font-black mb-6 text-[10px] uppercase tracking-[0.3em]">{trainer.role}</p>

                <div className="flex gap-3">
                  {[Instagram, Twitter, Facebook].map((Icon, idx) => (
                    <button key={idx} className="w-10 h-10 rounded-xl glass border border-gray-100 text-gray-400 flex items-center justify-center hover:bg-dark hover:text-white transition-all shadow-sm active:scale-95">
                      <Icon size={16} />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
