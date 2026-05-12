'use client';

import { motion } from 'motion/react';
import { Send, MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import Image from 'next/image';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-cream relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Info Side */}
          <div className="lg:col-span-5">
            <span className="text-primary font-black uppercase tracking-widest text-sm mb-4 inline-block">Contact Us</span>
            <h2 className="text-4xl lg:text-6xl font-black text-slate-800 leading-tight mb-8">
              Get In <span className="text-coral">Touch</span> With Us Today
            </h2>
            <p className="text-slate-500 text-lg mb-12 leading-relaxed">
              Have questions about our plans or want to book a free trial? Send us a message and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-[1.5rem] bg-white shadow-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-black text-slate-800 mb-1 leading-none">Our Location</h4>
                  <p className="text-slate-500 font-medium">123 Wellness Ave, Healthy Bay, CA 90210</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-[1.5rem] bg-white shadow-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-black text-slate-800 mb-1 leading-none">Phone Number</h4>
                  <p className="text-slate-500 font-medium">+1 (234) 567-890</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-[1.5rem] bg-white shadow-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-black text-slate-800 mb-1 leading-none">Email Address</h4>
                  <p className="text-slate-500 font-medium">hello@abshealthcare.com</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-[1.5rem] bg-white shadow-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-black text-slate-800 mb-1 leading-none">Gym Hours</h4>
                  <p className="text-slate-500 font-medium whitespace-pre-line">Mon-Fri: 5am - 11pm {"\n"} Sat-Sun: 7am - 8pm</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
               {[Instagram, Facebook, Twitter].map((Icon, i) => (
                 <button key={i} className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center text-slate-800 hover:text-white hover:bg-primary transition-all transition-transform active:scale-95">
                    <Icon size={20} />
                 </button>
               ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="glass-card p-10 lg:p-14 rounded-[4rem] relative z-10"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-cream border-none rounded-2xl p-5 text-slate-800 font-bold focus:ring-2 focus:ring-primary/40 focus:outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full bg-cream border-none rounded-2xl p-5 text-slate-800 font-bold focus:ring-2 focus:ring-primary/40 focus:outline-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">Subject</label>
                  <select className="w-full bg-cream border-none rounded-2xl p-5 text-slate-800 font-bold focus:ring-2 focus:ring-primary/40 focus:outline-none appearance-none">
                    <option>General Inquiry</option>
                    <option>Free Trial Booking</option>
                    <option>Membership Plans</option>
                    <option>Personal Training</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">Message</label>
                  <textarea rows={5} placeholder="How can we help you?" className="w-full bg-cream border-none rounded-2xl p-5 text-slate-800 font-bold focus:ring-2 focus:ring-primary/40 focus:outline-none resize-none" />
                </div>
                <button className="w-full bg-slate-900 text-white py-6 rounded-2xl font-black text-lg transition-all shadow-2xl shadow-slate-900/20 active:scale-95 flex items-center justify-center gap-3">
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Map Placeholder */}
            <div className="mt-8 h-64 rounded-[3.5rem] overflow-hidden grayscale border-4 border-white shadow-2xl bg-slate-200 flex items-center justify-center relative">
               <Image 
                 src="https://picsum.photos/seed/map/1200/600"
                 alt="Map"
                 fill
                 className="object-cover opacity-40"
                 referrerPolicy="no-referrer"
               />
               <div className="relative z-10 flex flex-col items-center">
                  <div className="bg-primary p-4 rounded-full shadow-2xl animate-bounce">
                     <MapPin className="text-white" size={32} />
                  </div>
                  <div className="mt-4 bg-white px-6 py-2 rounded-full text-slate-800 font-black text-sm uppercase tracking-widest shadow-xl">
                     ABS Health Care
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
