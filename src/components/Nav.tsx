export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-5 md:px-8 py-4 md:py-5 flex items-center justify-between bg-navy/90 backdrop-blur-md border-b border-white/10">
      <div>
        <div className="font-display font-bold text-sm md:text-base">Your<span className="text-orange">Space</span>Doctor</div>
        <div className="text-[0.65rem] md:text-[0.72rem] text-slate tracking-widest uppercase mt-0.5">Social Media Strategy · 2026</div>
      </div>
      <div className="bg-orange text-white font-display text-[0.65rem] md:text-[0.7rem] font-bold px-3 md:px-3.5 py-1.5 rounded-full tracking-wider uppercase text-center max-w-[100px] md:max-w-none leading-tight">
        Confidential Proposal
      </div>
    </nav>
  );
}
