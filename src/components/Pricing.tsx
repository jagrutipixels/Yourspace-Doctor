import { CSSProperties } from 'react';
import { usePlan } from '../context/PlanContext';
import { motion, AnimatePresence } from 'motion/react';

export default function Pricing() {
  const { idx, setIdx, plan } = usePlan();

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 relative z-10">
        <div className="text-[0.72rem] tracking-[0.12em] uppercase text-orange font-semibold mb-3 flex items-center gap-2.5 before:content-[''] before:block before:w-7 before:h-px before:bg-orange">
          10 · Investment Summary
        </div>
        <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.1] mb-4">Transparent Monthly Pricing</h2>
        <p className="max-w-[620px] text-[0.95rem] text-white/70 leading-relaxed">
          Choose the plan that fits your goals and budget. All plans include complimentary static & carousel posts and weekly stories management. Drag the slider to explore each tier.
        </p>

        <div className="bg-[#F0F4F8] rounded-3xl p-6 sm:p-8 md:p-12 mt-10 text-[#1A2535]">
          <div className="bg-white rounded-2xl p-6 sm:p-8 md:px-10 mb-8 shadow-[0_2px_16px_rgba(0,0,0,0.06)]">
            <div className="font-display text-[0.72rem] font-bold tracking-[0.12em] uppercase text-purple-600 mb-6 text-center">
              Customize Your Monthly Content Plan
            </div>
            <input 
              type="range" 
              className="custom-slider" 
              min="0" max="4" 
              value={idx} 
              step="1"
              onChange={(e) => setIdx(parseInt(e.target.value))}
              style={{ '--progress': `${plan.progress}%` } as CSSProperties}
            />
            <div className="flex justify-between mt-2.5">
              {["₹30k", "₹45k", "₹60k", "₹75k", "₹90k"].map((label, i) => (
                <span key={i} className={`text-[0.78rem] transition-colors ${i === idx ? 'text-purple-600 font-bold' : 'text-gray-400 font-medium'}`}>
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-[0_2px_16px_rgba(0,0,0,0.06)] overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:px-8 border-b border-gray-100 hover:bg-gray-50 transition-colors gap-2 md:gap-0">
              <div>
                <h4 className="font-display text-[0.95rem] font-bold text-[#1A2535] mb-1">
                  Batch Shooting (<motion.span key={plan.shootDays} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{plan.shootDays}</motion.span> Days)
                </h4>
                <p className="text-[0.8rem] text-gray-500 leading-relaxed m-0">
                  All content for the month captured during <motion.span key={plan.shootDays} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{plan.shootDays}</motion.span> shoot days (₹12,000/day).
                </p>
              </div>
              <motion.div key={plan.shootDays} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="font-display text-[1.1rem] font-bold text-purple-600 whitespace-nowrap">
                ₹{(plan.shootDays * 12000).toLocaleString('en-IN')}
              </motion.div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:px-8 border-b border-gray-100 hover:bg-gray-50 transition-colors gap-2 md:gap-0">
              <div>
                <h4 className="font-display text-[0.95rem] font-bold text-[#1A2535] mb-1">
                  Video Editing (<motion.span key={plan.reels} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{plan.reels}</motion.span> Reels)
                </h4>
                <p className="text-[0.8rem] text-gray-500 leading-relaxed m-0">A balanced mix of High-Quality cinematic reels and Raw/Light reels (₹600/reel).</p>
              </div>
              <motion.div key={plan.reels} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="font-display text-[1.1rem] font-bold text-purple-600 whitespace-nowrap">
                ₹{(plan.reels * 600).toLocaleString('en-IN')}
              </motion.div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:px-8 border-b border-gray-100 hover:bg-gray-50 transition-colors gap-2 md:gap-0">
              <div>
                <h4 className="font-display text-[0.95rem] font-bold text-[#1A2535] mb-1">Static & Carousel Posts</h4>
                <p className="text-[0.8rem] text-gray-500 leading-relaxed m-0">
                  <motion.span key={plan.static} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{plan.static / 2}</motion.span> Static and <motion.span key={plan.static} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{plan.static / 2}</motion.span> Carousel posts provided free of charge.
                </p>
              </div>
              <div className="font-display text-[1.1rem] font-bold text-purple-600 whitespace-nowrap">Complimentary</div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:px-8 border-b border-gray-100 hover:bg-gray-50 transition-colors gap-2 md:gap-0">
              <div>
                <h4 className="font-display text-[0.95rem] font-bold text-[#1A2535] mb-1">Weekly Stories Management</h4>
                <p className="text-[0.8rem] text-gray-500 leading-relaxed m-0">4-5 weekly stories using behind-the-scenes content and engagement polls.</p>
              </div>
              <div className="font-display text-[1.1rem] font-bold text-purple-600 whitespace-nowrap">Complimentary</div>
            </div>
            <div className="p-5 md:px-8 bg-gray-50 border-t border-gray-100">
              <div className="text-[0.68rem] tracking-[0.1em] uppercase font-bold text-gray-400 mb-1">Payment Terms</div>
              <p className="text-[0.8rem] text-gray-500 m-0">50% advance payment required to confirm booking and initiate execution. Remaining 50% to be completed as per the agreed cycle.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center p-7 md:px-8 bg-[#1A1F36] rounded-xl mt-6 gap-4 sm:gap-0 text-center sm:text-left">
            <div>
              <div className="text-[0.72rem] tracking-[0.1em] uppercase text-white/50 mb-1">Total Monthly Investment</div>
              <AnimatePresence mode="wait">
                <motion.div 
                  key={plan.total}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="font-display text-3xl font-extrabold text-white"
                >
                  {plan.total}
                </motion.div>
              </AnimatePresence>
            </div>
            <a href="mailto:abhishek.gujar1202@gmail.com" className="bg-purple-600 hover:bg-purple-500 text-white font-display font-bold text-[0.85rem] px-6 py-3 rounded-lg tracking-wide transition-all hover:-translate-y-[1px] whitespace-nowrap">
              Contact Us →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
