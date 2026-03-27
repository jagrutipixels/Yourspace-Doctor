export default function Roadmap() {
  return (
    <section className="py-20">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 relative z-10">
        <div className="text-[0.72rem] tracking-[0.12em] uppercase text-orange font-semibold mb-3 flex items-center gap-2.5 before:content-[''] before:block before:w-7 before:h-px before:bg-orange">
          08 · Execution Roadmap
        </div>
        <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.1] mb-4">90-Day Plan of Action</h2>
        <p className="max-w-[620px] text-[0.95rem] text-white/70 leading-relaxed">
          A phased rollout — from foundation-building in Month 1 to full-throttle growth and conversion by Month 3.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 mt-14 relative">
          <div className="hidden md:block absolute top-[28px] left-[16.6%] right-[16.6%] h-px bg-gradient-to-r from-orange via-white/15 to-orange"></div>
          
          <div className="px-0 md:px-6 text-center flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-full flex items-center justify-center font-display font-extrabold text-base relative z-10 bg-orange text-white">M1</div>
            <div className="font-display text-[0.7rem] font-bold tracking-widest uppercase text-slate">Month 1 · Foundation</div>
            <h3 className="text-base mb-1">Build & Launch</h3>
            <ul className="list-none text-center">
              {["Optimise Instagram bio & highlights", "Set up link-in-bio (Linktree)", "Launch LinkedIn company page", "Produce first 4 Reels", "Convert 10 reviews to carousels", "Start YouTube Shorts repurposing"].map((item, i) => (
                <li key={i} className="text-[0.8rem] text-white/55 py-1">{item}</li>
              ))}
            </ul>
          </div>

          <div className="px-0 md:px-6 text-center flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-full flex items-center justify-center font-display font-extrabold text-base relative z-10 bg-orange/20 text-orange2 border border-orange">M2</div>
            <div className="font-display text-[0.7rem] font-bold tracking-widest uppercase text-slate">Month 2 · Growth</div>
            <h3 className="text-base mb-1">Scale & Test</h3>
            <ul className="list-none text-center">
              {["Run first paid Instagram campaign", "City-specific content per location", "3 LinkedIn B2B case studies", "WhatsApp Status campaign launch", "Track KPIs, double down on top format", "Collaborate with local lifestyle creator"].map((item, i) => (
                <li key={i} className="text-[0.8rem] text-white/55 py-1">{item}</li>
              ))}
            </ul>
          </div>

          <div className="px-0 md:px-6 text-center flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-full flex items-center justify-center font-display font-extrabold text-base relative z-10 bg-white/5 text-white/40 border border-white/15">M3</div>
            <div className="font-display text-[0.7rem] font-bold tracking-widest uppercase text-slate">Month 3 · Optimise</div>
            <h3 className="text-base mb-1">Convert & Retain</h3>
            <ul className="list-none text-center">
              {["Retargeting ads to warm audiences", "Seasonal campaign (Diwali / Moving)", "Customer video testimonial series", "LinkedIn lead generation campaign", "Full 90-day performance review", "Q4 strategy planning"].map((item, i) => (
                <li key={i} className="text-[0.8rem] text-white/55 py-1">{item}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
