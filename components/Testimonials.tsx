'use client';

import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Robert Fox',
    role: 'Product Designer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
    content: "The trainers here are absolutely amazing! I've seen better results in 3 months here than 1 year at my previous gym. The atmosphere is top-notch.",
  },
  {
    name: 'Jane Cooper',
    role: 'Fitness Enthusiast',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
    content: "I love the group classes! Yoga and Zumba are my favorites. The community is so supportive and encouraging. I highly recommend ABS Club.",
  },
  {
    name: 'Guy Hawkins',
    role: 'Professional Athlete',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    content: "As an athlete, I need specific equipment and focused training. ABS provides everything I need to stay at the top of my game. Truly elite experience.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20 text-dark">
          <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 inline-block">Pulse</span>
          <h2 className="text-5xl lg:text-7xl font-black leading-[0.9] mb-8 uppercase">
            MEMBER <span className="text-coral">VOICE</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-12 text-primary/5">
            <Quote size={240} />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              className="max-w-4xl glass-card p-12 lg:p-24 rounded-[4rem] relative text-center border-none shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)]"
            >
              <div className="flex justify-center gap-1.5 mb-10">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={20} className="text-accent fill-accent" />
                ))}
              </div>
              
              <blockquote className="text-2xl lg:text-4xl font-black text-dark leading-tight mb-16 uppercase tracking-tighter">
                &ldquo;{testimonials[active].content}&rdquo;
              </blockquote>

              <div className="flex flex-col items-center">
                <div className="relative w-24 h-24 mb-6">
                  <Image 
                    src={testimonials[active].image} 
                    alt={testimonials[active].name} 
                    fill
                    className="rounded-[2.5rem] object-cover ring-4 ring-primary/20 shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-2xl font-black text-dark mb-1 uppercase tracking-tighter">{testimonials[active].name}</h4>
                <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">{testimonials[active].role}</p>
              </div>
            </motion.div>

            {/* Pagination */}
            <div className="flex gap-4 mt-12">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-3 rounded-full transition-all duration-300 ${active === i ? 'w-12 bg-primary' : 'w-3 bg-slate-300 hover:bg-slate-400'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
