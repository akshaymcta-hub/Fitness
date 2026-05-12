'use client';

import { Dumbbell, Instagram, Facebook, Twitter, Mail, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white/20 backdrop-blur-md border-t border-white/40 pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Blob */}
      <div className="absolute top-0 left-0 w-full h-full bg-cream -z-20 opacity-30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
          
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <div className="bg-primary p-2 rounded-lg">
                <Dumbbell className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-dark uppercase">
                ABS<span className="text-primary">FITNESS</span>
              </span>
            </Link>
            <p className="text-gray-500 text-lg font-medium leading-relaxed mb-10">
              The premium standard for those who demand excellence from their body and mindset.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <button key={i} className="w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center hover:bg-primary hover:border-primary transition-all active:scale-95 text-gray-400 hover:text-white">
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-black mb-8 uppercase tracking-[0.2em] text-dark">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Programs', 'Trainers', 'Pricing', 'Gallery'].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="text-gray-500 hover:text-primary transition-colors font-bold text-xs uppercase tracking-widest flex items-center gap-1 group">
                    {link}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-black mb-8 uppercase tracking-[0.2em] text-dark">Programs</h4>
            <ul className="space-y-4">
              {['Yoga', 'CrossFit', 'Cardio', 'Zumba', 'Strength', 'Personal'].map((link) => (
                <li key={link}>
                  <Link href="#programs" className="text-gray-500 hover:text-coral transition-colors font-bold text-xs uppercase tracking-widest flex items-center gap-1 group">
                    {link}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-black mb-8 uppercase tracking-[0.2em] text-primary">Newsletter</h4>
            <p className="text-gray-500 mb-8 font-bold uppercase tracking-tight text-sm">Join the inner circle for elite tips.</p>
            <form className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center text-gray-400">
                <Mail size={20} />
              </div>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white border border-gray-100 rounded-2xl py-5 pl-12 pr-32 focus:ring-2 focus:ring-primary/50 focus:outline-none font-black text-sm uppercase tracking-tighter shadow-sm"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-dark text-white px-6 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-primary transition-all">
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 mb-10" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-[10px] font-black tracking-widest uppercase">
            © 2026 ABS FITNESS CLUB. ENGINEERED FOR SUPREMACY.
          </p>
          <div className="flex gap-8 text-gray-400 text-[10px] font-black uppercase tracking-widest">
            <Link href="#" className="hover:text-dark transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-dark transition-colors">Terms</Link>
            <Link href="#" className="hover:text-dark transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
