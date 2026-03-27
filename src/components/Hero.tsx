export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_50%,rgba(232,93,36,0.12)_0%,transparent_70%),radial-gradient(ellipse_60%_80%_at_10%_80%,rgba(26,122,110,0.1)_0%,transparent_60%)]"></div>
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-orange/15 border border-orange/40 text-orange2 text-xs font-medium px-3.5 py-1.5 rounded-full tracking-wider uppercase mb-6 before:content-['●'] before:text-[0.5rem]">
              Social Media Strategy Proposal
            </div>
            <h1 className="font-display text-[clamp(2.8rem,6vw,5rem)] font-extrabold leading-[1.1] mb-6">
              Turning Storage into <em className="not-italic text-orange">Stories.</em>
            </h1>
            <p className="text-[1.05rem] max-w-[480px] mb-10 text-white/70 leading-relaxed">
              A full-stack social media plan of action for Your Space Doctor — designed to convert 12,000+ happy customers, a 4.9-star reputation, and 5 city locations into India's most trusted storage brand online.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#situation" className="bg-orange hover:bg-orange2 text-white font-display font-semibold text-sm px-7 py-3.5 rounded-md tracking-wide transition-all hover:-translate-y-[1px] inline-block">
                View Strategy →
              </a>
              <a href="#pricing" className="border border-white/30 hover:border-white hover:bg-white/5 text-white font-display font-semibold text-sm px-7 py-3.5 rounded-md tracking-wide transition-all inline-block">
                See Pricing
              </a>
            </div>
          </div>
          <div className="hidden md:block animate-fade-up delay-300">
            <div className="grid grid-cols-2 gap-[1px] bg-white/10 rounded-2xl overflow-hidden border border-white/10">
              <div className="bg-white/5 hover:bg-white/10 p-8 flex flex-col gap-1 transition-colors">
                <div className="font-display text-4xl font-extrabold text-orange">4.9★</div>
                <div className="text-[0.78rem] text-slate uppercase tracking-wider">Google Rating</div>
              </div>
              <div className="bg-white/5 hover:bg-white/10 p-8 flex flex-col gap-1 transition-colors">
                <div className="font-display text-4xl font-extrabold text-white">12K+</div>
                <div className="text-[0.78rem] text-slate uppercase tracking-wider">Happy Customers</div>
              </div>
              <div className="bg-white/5 hover:bg-white/10 p-8 flex flex-col gap-1 transition-colors">
                <div className="font-display text-4xl font-extrabold text-[#3BC9BA]">5</div>
                <div className="text-[0.78rem] text-slate uppercase tracking-wider">Active Cities</div>
              </div>
              <div className="bg-white/5 hover:bg-white/10 p-8 flex flex-col gap-1 transition-colors">
                <div className="font-display text-4xl font-extrabold text-gold">377+</div>
                <div className="text-[0.78rem] text-slate uppercase tracking-wider">Google Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
