import { useState, CSSProperties } from 'react';

const plans = [
  {
    total: "₹30,000 / month",
    shootTitle: "Batch Shooting (2 Days)",
    shootDesc: "All content for the month captured during 2 shoot days (₹12,000/day).",
    shootPrice: "₹24,000",
    editTitle: "Video Editing (10 Reels)",
    editDesc: "A balanced mix of High-Quality cinematic reels and Raw/Light reels (₹600/reel).",
    editPrice: "₹6,000",
    staticDesc: "4 Static and 4 Carousel posts provided free of charge.",
    progress: 0
  },
  {
    total: "₹45,000 / month",
    shootTitle: "Batch Shooting (3 Days)",
    shootDesc: "All content for the month captured during 3 shoot days (₹12,000/day).",
    shootPrice: "₹36,000",
    editTitle: "Video Editing (15 Reels)",
    editDesc: "A balanced mix of High-Quality cinematic reels and Raw/Light reels (₹600/reel).",
    editPrice: "₹9,000",
    staticDesc: "6 Static and 6 Carousel posts provided free of charge.",
    progress: 25
  },
  {
    total: "₹60,000 / month",
    shootTitle: "Batch Shooting (4 Days)",
    shootDesc: "All content for the month captured during 4 shoot days (₹12,000/day).",
    shootPrice: "₹48,000",
    editTitle: "Video Editing (20 Reels)",
    editDesc: "A balanced mix of High-Quality cinematic reels and Raw/Light reels (₹600/reel).",
    editPrice: "₹12,000",
    staticDesc: "8 Static and 8 Carousel posts provided free of charge.",
    progress: 50
  },
  {
    total: "₹75,000 / month",
    shootTitle: "Batch Shooting (5 Days)",
    shootDesc: "All content for the month captured during 5 shoot days (₹12,000/day).",
    shootPrice: "₹60,000",
    editTitle: "Video Editing (25 Reels)",
    editDesc: "A balanced mix of High-Quality cinematic reels and Raw/Light reels (₹600/reel).",
    editPrice: "₹15,000",
    staticDesc: "10 Static and 10 Carousel posts provided free of charge.",
    progress: 75
  },
  {
    total: "₹90,000 / month",
    shootTitle: "Batch Shooting (6 Days)",
    shootDesc: "All content for the month captured during 6 shoot days (₹12,000/day).",
    shootPrice: "₹72,000",
    editTitle: "Video Editing (30 Reels)",
    editDesc: "A balanced mix of High-Quality cinematic reels and Raw/Light reels (₹600/reel).",
    editPrice: "₹18,000",
    staticDesc: "12 Static and 12 Carousel posts provided free of charge.",
    progress: 100
  }
];

export default function Pricing() {
  const [idx, setIdx] = useState(0);
  const p = plans[idx];

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
              style={{ '--progress': `${p.progress}%` } as CSSProperties}
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
                <h4 className="font-display text-[0.95rem] font-bold text-[#1A2535] mb-1">{p.shootTitle}</h4>
                <p className="text-[0.8rem] text-gray-500 leading-relaxed m-0">{p.shootDesc}</p>
              </div>
              <div className="font-display text-[1.1rem] font-bold text-purple-600 whitespace-nowrap">{p.shootPrice}</div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:px-8 border-b border-gray-100 hover:bg-gray-50 transition-colors gap-2 md:gap-0">
              <div>
                <h4 className="font-display text-[0.95rem] font-bold text-[#1A2535] mb-1">{p.editTitle}</h4>
                <p className="text-[0.8rem] text-gray-500 leading-relaxed m-0">{p.editDesc}</p>
              </div>
              <div className="font-display text-[1.1rem] font-bold text-purple-600 whitespace-nowrap">{p.editPrice}</div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:px-8 border-b border-gray-100 hover:bg-gray-50 transition-colors gap-2 md:gap-0">
              <div>
                <h4 className="font-display text-[0.95rem] font-bold text-[#1A2535] mb-1">Static & Carousel Posts</h4>
                <p className="text-[0.8rem] text-gray-500 leading-relaxed m-0">{p.staticDesc}</p>
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
              <div className="font-display text-3xl font-extrabold text-white">{p.total}</div>
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
