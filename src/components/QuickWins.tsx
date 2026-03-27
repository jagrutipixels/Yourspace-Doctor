export default function QuickWins() {
  return (
    <section className="py-20">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 relative z-10">
        <div className="text-[0.72rem] tracking-[0.12em] uppercase text-orange font-semibold mb-3 flex items-center gap-2.5 before:content-[''] before:block before:w-7 before:h-px before:bg-orange">
          06 · Quick Wins
        </div>
        <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.1] mb-4">First 30 Days: Immediate Actions</h2>
        <p className="max-w-[620px] text-[0.95rem] text-white/70 leading-relaxed">
          Six actions executable within the first month with minimal resources — with measurable impact before the long-term strategy fully kicks in.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {[
            {
              num: "01",
              title: "Post a Facility Reel",
              desc: "One behind-the-scenes Reel touring your facility. This single format typically drives 3–5× the organic reach of static posts and sets the content benchmark for the channel."
            },
            {
              num: "02",
              title: "Turn 10 Reviews into Carousels",
              desc: "Take top 10 Google reviews and convert them into branded quote cards. Schedule one per week for 10 weeks. Your most powerful trust-building stream — costs almost nothing to produce."
            },
            {
              num: "03",
              title: "Build a Link-in-Bio Tool",
              desc: "Set up Linktree or Beacons connecting followers to: Quote Tool, WhatsApp Chat, city-specific pages, and the 50% offer. Every post CTA should route through this single link."
            },
            {
              num: "04",
              title: "Set Up Instagram Highlights",
              desc: "Create 5 Highlight covers: Our Services, Locations, Reviews, Offers, How It Works. These act as a permanent homepage for new profile visitors — converting curiosity into quote requests."
            },
            {
              num: "05",
              title: "Revamp LinkedIn Company Page",
              desc: "Optimize the existing page, post 3 foundational pieces: company overview, a 3PL case study, and a thought leadership article on India warehousing trends. B2B credibility from day one."
            },
            {
              num: "06",
              title: "Run a Local Instagram Ad",
              desc: "Launch a ₹5,000–10,000 test campaign targeting Mumbai and Pune users searching \"moving\" or \"home renovation\". Promote the 50% first-month offer with a direct quote tool CTA."
            }
          ].map((win, i) => (
            <div key={i} className="flex gap-4 items-start bg-white/5 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors">
              <div className="font-display text-[1.5rem] font-extrabold text-orange shrink-0 leading-none">{win.num}</div>
              <div>
                <div className="font-display text-[0.9rem] font-semibold mb-1">{win.title}</div>
                <div className="text-[0.82rem] text-white/60 leading-relaxed">{win.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
