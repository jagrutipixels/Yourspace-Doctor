export default function Situation() {
  return (
    <section id="situation" className="py-20">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 relative z-10">
        <div className="text-[0.72rem] tracking-[0.12em] uppercase text-orange font-semibold mb-3 flex items-center gap-2.5 before:content-[''] before:block before:w-7 before:h-px before:bg-orange">
          01 · Situation Analysis
        </div>
        <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.1] mb-4">Where You Stand Today</h2>
        <p className="max-w-[620px] text-[0.95rem] text-white/70 leading-relaxed">
          Before we prescribe, we diagnose. An honest look at Your Space Doctor's current social media health — and the opportunities waiting to be unlocked.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8">
            <h3 className="text-[#3BC9BA] font-display text-[1.2rem] font-semibold mb-4">✦ Strengths to Amplify</h3>
            <ul className="flex flex-col gap-2.5">
              {[
                "4.9 Google rating from 377+ reviews — an extraordinary trust signal in a low-trust category",
                "Named staff (Nita, Vijay, Mahesh) praised in reviews — human brand DNA ready for content",
                "Diverse services (vehicles, art, 3PL, climate control) create rich, varied content opportunities",
                "Active weekly blog — SEO content immediately repurposable as carousels and Reels",
                "Instant quote tool + 50% first-month offer — powerful conversion hooks for CTAs",
                "SSAA membership and media features — credibility signals underused on social"
              ].map((item, i) => (
                <li key={i} className="text-[0.88rem] text-white/70 flex gap-2.5 items-start leading-relaxed before:content-[''] before:block before:w-1.5 before:h-1.5 before:rounded-full before:shrink-0 before:mt-1.5 before:bg-[#3BC9BA]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8">
            <h3 className="text-orange2 font-display text-[1.2rem] font-semibold mb-4">✦ Gaps Holding You Back</h3>
            <ul className="flex flex-col gap-2.5">
              {[
                "No Reels or short-form video strategy — highest organic reach format on Instagram",
                "No LinkedIn presence for B2B segment (3PL, document, business storage)",
                "377 Google reviews not converted into social proof content — untapped gold mine",
                "5 city locations have no individual local targeting or city-specific content",
                "No link-in-bio strategy directing followers to quote tool or WhatsApp",
                "Instagram bio and highlights not optimised for lead capture"
              ].map((item, i) => (
                <li key={i} className="text-[0.88rem] text-white/70 flex gap-2.5 items-start leading-relaxed before:content-[''] before:block before:w-1.5 before:h-1.5 before:rounded-full before:shrink-0 before:mt-1.5 before:bg-orange">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
