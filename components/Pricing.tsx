'use client';

import { motion } from 'motion/react';
import { Check, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '29',
    description: 'Perfect for starters who want to explore fitness.',
    features: ['Access to Gym Equipment', 'Locker Room Access', 'Free Consultation', 'Standard Gym Hours', '2 Group Classes/Month'],
    popular: false,
    color: 'slate-800'
  },
  {
    name: 'Premium',
    price: '59',
    description: 'Best value for consistent fitness enthusiasts.',
    features: ['All Basic Features', '24/7 Gym Access', 'Unlimited Group Classes', '1 Personal Training Session', 'Nutrition Guide', 'Sauna & Pool Access'],
    popular: true,
    color: 'primary'
  },
  {
    name: 'Elite',
    price: '99',
    description: 'Everything you need for peak performance.',
    features: ['All Premium Features', 'Daily Personal Training', 'Custom Nutrition Plan', 'Physiotherapy Sessions', 'Priority Bookings', 'Exclusive Lounge Access'],
    popular: false,
    color: 'coral'
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-slate-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 inline-block text-accent">Membership</span>
          <h2 className="text-5xl lg:text-7xl font-black leading-[0.9] mb-8">
            CHOOSE YOUR <br />
            <span className="text-accent underline underline-offset-8">PLAN</span>
          </h2>
          <p className="text-white/60 text-lg font-bold uppercase tracking-tight">
            No long-term contracts. Pure performance.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-12 rounded-[3.5rem] border transition-all duration-500 group ${
                plan.popular 
                  ? 'bg-primary border-primary scale-105 shadow-[0_40px_80px_-20px_rgba(89,178,146,0.4)] z-10' 
                  : 'glass-dark border-white/10 hover:border-white/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-accent text-slate-900 px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-xl flex items-center gap-2">
                  <Zap size={14} fill="currentColor" />
                  Most Popular
                </div>
              )}
              
              <div className="mb-12">
                <h3 className="text-3xl font-black mb-3 uppercase tracking-tighter">{plan.name}</h3>
                <p className={`text-sm font-bold uppercase tracking-widest ${plan.popular ? 'text-white/80' : 'text-white/40'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="flex items-baseline gap-1 mb-10">
                <span className="text-5xl font-black">$</span>
                <span className="text-7xl font-black">{plan.price}</span>
                <span className={`text-lg font-bold ${plan.popular ? 'text-white/70' : 'text-white/30'}`}>/month</span>
              </div>

              <ul className="space-y-4 mb-12">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${
                      plan.popular ? 'bg-white/20 text-white' : 'bg-primary/20 text-primary'
                    }`}>
                      <Check size={14} strokeWidth={4} />
                    </div>
                    <span className="text-sm font-bold opacity-90">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-6 rounded-2xl font-black text-lg transition-all transform active:scale-95 uppercase tracking-widest ${
                plan.popular 
                  ? 'bg-white text-primary hover:shadow-xl' 
                  : 'bg-primary text-white hover:bg-primary/90'
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
