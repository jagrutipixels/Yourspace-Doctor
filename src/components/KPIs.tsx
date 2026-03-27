import { usePlan } from '../context/PlanContext';
import { motion } from 'motion/react';

export default function KPIs() {
  const { plan } = usePlan();

  return (
    <section className="py-20">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 relative z-10">
        <div className="text-[0.72rem] tracking-[0.12em] uppercase text-orange font-semibold mb-3 flex items-center gap-2.5 before:content-[''] before:block before:w-7 before:h-px before:bg-orange">
          07 · KPIs & Measurement
        </div>
        <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.1] mb-4">How We Measure Success</h2>
        <p className="max-w-[620px] text-[0.95rem] text-white/70 leading-relaxed">
          Every strategy needs a scoreboard. These metrics are tracked monthly to ensure the plan is working — and to iterate fast if it isn't.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {[
            { metric: "Est. 2%+", label: "Instagram Engagement Rate", desc: "Industry average is 0.6%. We aim to build toward 2%+ to signal strong audience resonance.", color: "text-orange" },
            { metric: "Est. 2–5%", label: "Monthly Follower Growth", desc: "Targeted monthly organic growth. Highly dependent on algorithm reach and consistency.", color: "text-[#3BC9BA]" },
            { metric: "Track", label: "Profile Visits → Quote Clicks", desc: "A key intent metric — tracking how many social visitors are interested enough to explore pricing.", color: "text-gold" },
            { metric: plan.views, label: "Reel Views per Month", desc: "Estimated average reach after 60-90 days of consistent publishing. Organic reach varies by algorithm.", color: "text-white" },
            { metric: "Est. 500+", label: "LinkedIn Impressions / Month", desc: "B2B reach metric. We aim to establish a baseline of 500+ impressions and grow steadily.", color: "text-[#AFA9EC]" },
            { metric: "Monitor", label: "WhatsApp Link Clicks", desc: "Track how often users click the WhatsApp link to gauge audience intent and content effectiveness.", color: "text-[#3BC9BA]" }
          ].map((kpi, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
              <motion.div 
                key={kpi.metric} 
                initial={{ opacity: 0, y: 5 }} 
                animate={{ opacity: 1, y: 0 }} 
                className={`font-display text-[1.8rem] font-extrabold mb-0.5 ${kpi.color}`}
              >
                {kpi.metric}
              </motion.div>
              <div className="text-[0.78rem] text-slate uppercase tracking-wider">{kpi.label}</div>
              <div className="text-[0.8rem] mt-2 text-white/50">{kpi.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
