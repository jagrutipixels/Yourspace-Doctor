export default function CTA() {
  return (
    <section className="text-center py-24 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(232,93,36,0.12)_0%,transparent_70%)]">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 relative z-10">
        <div className="text-[0.72rem] tracking-[0.12em] uppercase text-orange font-semibold mb-3 flex items-center justify-center gap-2.5 before:content-[''] before:block before:w-7 before:h-px before:bg-orange">
          Ready to Begin
        </div>
        <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.1] mb-4">
          Let's Make Your Space<br/>Impossible to Ignore.
        </h2>
        <p className="max-w-[560px] mx-auto mb-10 text-[1rem] text-white/70 leading-relaxed">
          Your Space Doctor already has everything needed to dominate the storage category on social media — the trust, the team, the reviews, and the service range. This strategy is the ignition.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="mailto:abhishek.gujar1202@gmail.com" className="bg-orange hover:bg-orange2 text-white font-display font-semibold text-sm px-7 py-3.5 rounded-md tracking-wide transition-all hover:-translate-y-[1px] inline-block">
            Email Us →
          </a>
          <a href="https://wa.me/917400310443" target="_blank" rel="noreferrer" className="border border-white/30 hover:border-white hover:bg-white/5 text-white font-display font-semibold text-sm px-7 py-3.5 rounded-md tracking-wide transition-all inline-block">
            WhatsApp Us
          </a>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 max-w-[480px] mx-auto mt-12 text-left">
          <div className="flex items-center gap-4 py-3 border-b border-white/10">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-base shrink-0 bg-orange/15">📧</div>
            <div className="flex-1">
              <div className="text-[0.7rem] text-slate uppercase tracking-widest mb-0.5">Email</div>
              <div className="text-[0.9rem] font-medium text-white"><a href="mailto:abhishek.gujar1202@gmail.com" className="text-orange2 hover:underline">abhishek.gujar1202@gmail.com</a></div>
            </div>
          </div>
          <div className="flex items-center gap-4 py-3 border-b border-white/10">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-base shrink-0 bg-[#1A7A6E]/15">📞</div>
            <div className="flex-1">
              <div className="text-[0.7rem] text-slate uppercase tracking-widest mb-0.5">Phone / WhatsApp</div>
              <div className="text-[0.9rem] font-medium text-white"><a href="tel:+917400310443" className="text-orange2 hover:underline">+91 7400310443</a></div>
            </div>
          </div>
          <div className="flex items-center gap-4 py-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-base shrink-0 bg-[#7F77DD]/15">🌐</div>
            <div className="flex-1">
              <div className="text-[0.7rem] text-slate uppercase tracking-widest mb-0.5">Website</div>
              <div className="text-[0.9rem] font-medium text-white"><a href="https://www.icreatepixels.in" target="_blank" rel="noreferrer" className="text-orange2 hover:underline">www.icreatepixels.in</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
