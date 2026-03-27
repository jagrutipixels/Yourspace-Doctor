export default function Audiences() {
  return (
    <section className="py-20">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 relative z-10">
        <div className="text-[0.72rem] tracking-[0.12em] uppercase text-orange font-semibold mb-3 flex items-center gap-2.5 before:content-[''] before:block before:w-7 before:h-px before:bg-orange">
          02 · Target Audiences
        </div>
        <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.1] mb-4">Who We're Talking To</h2>
        <p className="max-w-[620px] text-[0.95rem] text-white/70 leading-relaxed">
          Your Space serves two distinct customer universes — personal and business. Each needs a different voice, platform, and content type.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          <div className="rounded-xl p-7 border border-white/10 bg-[#388ADD]/10">
            <span className="text-[1.8rem] mb-4 block">🏠</span>
            <h4 className="font-display text-[0.95rem] font-semibold mb-2">Relocating Households</h4>
            <p className="text-[0.82rem] text-white/70 mb-3">Moving cities, downsizing, or between homes. High urgency, emotionally driven. Need reassurance and speed.</p>
            <span className="inline-block mt-auto text-[0.7rem] px-2.5 py-1 rounded-full font-semibold tracking-wider uppercase bg-orange/20 text-orange2">Instagram · WhatsApp</span>
          </div>
          <div className="rounded-xl p-7 border border-white/10 bg-[#1A7A6E]/10">
            <span className="text-[1.8rem] mb-4 block">🏙️</span>
            <h4 className="font-display text-[0.95rem] font-semibold mb-2">Urban Declutterers</h4>
            <p className="text-[0.82rem] text-white/70 mb-3">Mumbai/Pune apartment dwellers running out of space. Aspirational lifestyle angle. Respond to before/after content.</p>
            <span className="inline-block mt-auto text-[0.7rem] px-2.5 py-1 rounded-full font-semibold tracking-wider uppercase bg-orange/20 text-orange2">Instagram Reels</span>
          </div>
          <div className="rounded-xl p-7 border border-white/10 bg-[#7F77DD]/10">
            <span className="text-[1.8rem] mb-4 block">📦</span>
            <h4 className="font-display text-[0.95rem] font-semibold mb-2">SMEs & D2C Brands</h4>
            <p className="text-[0.82rem] text-white/70 mb-3">E-commerce sellers, startups needing 3PL or inventory overflow storage. ROI-driven, want case studies and data.</p>
            <span className="inline-block mt-auto text-[0.7rem] px-2.5 py-1 rounded-full font-semibold tracking-wider uppercase bg-[#7F77DD]/20 text-[#AFA9EC]">LinkedIn Primary</span>
          </div>
          <div className="rounded-xl p-7 border border-white/10 bg-orange/10">
            <span className="text-[1.8rem] mb-4 block">🎨</span>
            <h4 className="font-display text-[0.95rem] font-semibold mb-2">Collectors & Expats</h4>
            <p className="text-[0.82rem] text-white/70 mb-3">Art, luxury goods, vehicles. High-value segment. Climate control is the key feature. Premium positioning.</p>
            <span className="inline-block mt-auto text-[0.7rem] px-2.5 py-1 rounded-full font-semibold tracking-wider uppercase bg-orange/20 text-orange2">Instagram · Ads</span>
          </div>
        </div>
      </div>
    </section>
  );
}
