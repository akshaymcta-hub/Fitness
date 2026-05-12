'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Info, Volume2 } from 'lucide-react';

export default function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [status, setStatus] = useState('');

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    if (weight && height) {
      const hInMeters = parseFloat(height) / 100;
      const wInKg = parseFloat(weight);
      const bmiVal = wInKg / (hInMeters * hInMeters);
      setBmi(parseFloat(bmiVal.toFixed(1)));

      if (bmiVal < 18.5) setStatus('Underweight');
      else if (bmiVal < 25) setStatus('Normal Weight');
      else if (bmiVal < 30) setStatus('Overweight');
      else setStatus('Obese');
    }
  };

  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-[80px]" />
      
      <div className="max-w-7xl mx-auto glass-card rounded-[4rem] overflow-hidden relative border-none">
        <div className="grid lg:grid-cols-2">
          {/* Content Left */}
          <div className="p-12 lg:p-20">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 inline-block">Metrics</span>
            <h2 className="text-5xl lg:text-6xl font-black text-dark leading-[0.9] mb-8">
              BMI <br />
              <span className="text-coral">ANALYSIS</span>
            </h2>
            <p className="text-gray-600 mb-10 text-lg font-bold leading-relaxed">
              Track your body composition with our enterprise-grade calculator.
            </p>

            <form onSubmit={calculateBMI} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] px-1">Height (cm)</label>
                <input
                  type="number"
                  placeholder="180"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-2xl p-5 text-dark focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all font-black text-lg"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] px-1">Weight (kg)</label>
                <input
                  type="number"
                  placeholder="75"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-2xl p-5 text-dark focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all font-black text-lg"
                />
              </div>
              <button className="md:col-span-2 bg-dark text-white py-6 rounded-2xl font-black text-lg transition-all transform active:scale-95 shadow-2xl shadow-dark/20 flex items-center justify-center gap-3 uppercase tracking-widest">
                <Calculator size={20} />
                Calculate
              </button>
            </form>
          </div>

          {/* Result Right */}
          <div className="bg-primary/10 p-12 lg:p-20 flex flex-col items-center justify-center text-center relative overflow-hidden">
            {bmi ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative z-10"
              >
                <div className="text-dark/40 font-black uppercase tracking-[0.4em] mb-4 text-[10px]">Body Mass Index</div>
                <div className="text-[120px] font-black text-primary leading-none mb-4">{bmi}</div>
                <div className="inline-block px-12 py-5 bg-white rounded-[2rem] shadow-xl border border-white/50">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Status</div>
                  <div className="text-3xl font-black text-dark uppercase tracking-tighter">{status}</div>
                </div>
              </motion.div>
            ) : (
              <div className="text-center opacity-40">
                <div className="bg-white/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  <Info size={40} />
                </div>
                <p className="text-white font-bold text-lg max-w-[250px]">Enter your stats to see your BMI result right here.</p>
              </div>
            )}
            
            {/* Visual Decoration */}
            <div className="absolute bottom-0 right-0 p-10 opacity-5">
               <Calculator size={300} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
