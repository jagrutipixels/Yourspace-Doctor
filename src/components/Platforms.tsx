import { usePlan } from '../context/PlanContext';
import { motion } from 'motion/react';

export default function Platforms() {
  const { plan } = usePlan();

  return (
    <section className="py-20">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 relative z-10">
        <div className="text-[0.72rem] tracking-[0.12em] uppercase text-orange font-semibold mb-3 flex items-center gap-2.5 before:content-[''] before:block before:w-7 before:h-px before:bg-orange">
          03 · Platform Strategy
        </div>
        <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.1] mb-4">Where to Show Up & How Often</h2>
        <p className="max-w-[620px] text-[0.95rem] text-white/70 leading-relaxed">
          Not every platform is equal. We focus energy where your audiences actually live and where your content type performs best.
        </p>
        <div className="flex flex-col gap-6 mt-10">
          {[
            {
              icon: "📸",
              name: "Instagram",
              sub: "Primary Growth Channel",
              desc: "Your highest ROI channel. Reels drive 47% faster follower growth. Carousels earn highest saves and shares. Target households, urban professionals, and collectors via city-specific location tags, geo-targeting, and moving season hooks across all 5 cities.",
              freq: plan.igFreq
            },
            {
              icon: "💼",
              name: "LinkedIn",
              sub: "B2B Growth Engine — Untapped",
              desc: "Zero presence, massive opportunity. Position Your Space as India's leading flexible warehousing partner. Publish thought leadership on supply chain, 3PL trends, document digitisation ROI. Share B2B case studies to build pipeline with logistics heads and founders.",
              freq: plan.liFreq
            },
            {
              icon: "▶️",
              name: "YouTube Shorts",
              sub: "SEO & Discovery Layer",
              desc: "Repurpose every Instagram Reel to YouTube Shorts — zero additional production cost, significant search discoverability. \"Storage solutions Mumbai\" ranking on YouTube converts high-intent searchers at a far lower cost than Google Ads.",
              freq: plan.ytFreq
            },
            {
              icon: "💬",
              name: "WhatsApp Status",
              sub: "Re-engagement & Conversion",
              desc: "WhatsApp Status has 70%+ open rates in India — far higher than email. Use for flash offers, 50% first-month reminders, facility photos, and seasonal promotions. Existing customer list is your most valuable warm audience for conversion.",
              freq: "3×/week"
            }
          ].map((platform, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-[200px_1fr_auto] items-center gap-8 bg-white/5 border border-white/10 rounded-xl p-6 md:px-8 hover:border-white/20 transition-colors">
              <div>
                <div className="font-display text-[1.1rem] font-bold">{platform.icon} {platform.name}</div>
                <div className="text-[0.78rem] text-slate mt-0.5">{platform.sub}</div>
              </div>
              <div className="text-[0.85rem] text-white/65 leading-relaxed">{platform.desc}</div>
              <motion.div 
                key={platform.freq} 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                className="font-display text-[0.8rem] font-bold whitespace-nowrap text-orange2 bg-orange/10 border border-orange/30 px-3.5 py-1.5 rounded-full text-center"
              >
                {platform.freq}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
