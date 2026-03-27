export default function Pillars() {
  return (
    <section className="py-20">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 relative z-10">
        <div className="text-[0.72rem] tracking-[0.12em] uppercase text-orange font-semibold mb-3 flex items-center gap-2.5 before:content-[''] before:block before:w-7 before:h-px before:bg-orange">
          04 · Content Pillars
        </div>
        <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.1] mb-4">The Six Content Pillars</h2>
        <p className="max-w-[620px] text-[0.95rem] text-white/70 leading-relaxed">
          Every post maps to one of these pillars. This creates consistency, prevents content fatigue, and covers both educational and commercial goals.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {[
            {
              num: "01",
              title: "Space Hacks & Tips",
              desc: "Quick, shareable, high-save content. Positions Your Space as the authority on smart living and decluttering in Indian cities.",
              eg: "\"5 things Mumbai flat owners can store that they don't realise they can\"",
              tags: [{ label: "Carousel", class: "bg-[#388ADD]/20 text-[#85B7EB]" }, { label: "Reel", class: "bg-[#7F77DD]/20 text-[#AFA9EC]" }]
            },
            {
              num: "02",
              title: "Behind The Scenes",
              desc: "Facility tours, packing team in action, climate control rooms, vehicle bays. Transparency builds trust in a category where customers worry about safety.",
              eg: "\"Inside our climate-controlled vault in Bhiwandi — where rare collectibles live\"",
              tags: [{ label: "Reel", class: "bg-[#7F77DD]/20 text-[#AFA9EC]" }, { label: "Story", class: "bg-gold/20 text-gold" }]
            },
            {
              num: "03",
              title: "Customer Stories",
              desc: "Convert 377+ Google reviews into content gold. Short video testimonials, quote carousels, named customer spotlights. Social proof is your most powerful asset.",
              eg: "\"How Bhrigu stored his entire apartment in 60 minutes — without stress\"",
              tags: [{ label: "UGC", class: "bg-[#1A7A6E]/20 text-[#3BC9BA]" }, { label: "Carousel", class: "bg-[#388ADD]/20 text-[#85B7EB]" }]
            },
            {
              num: "04",
              title: "Life Moment Hooks",
              desc: "Relate to real-life events: moving, renovating, going abroad, expanding a business. Emotional storytelling drives the highest share rates and saves.",
              eg: "\"Moving to Bengaluru? Here's what 3,000 families did with their furniture\"",
              tags: [{ label: "Reel", class: "bg-[#7F77DD]/20 text-[#AFA9EC]" }, { label: "Story", class: "bg-gold/20 text-gold" }]
            },
            {
              num: "05",
              title: "B2B & 3PL Education",
              desc: "For LinkedIn: how D2C brands reduce overhead with 3PL, India warehousing trends, document digitisation ROI, business case studies that build pipeline.",
              eg: "\"How a Pune D2C brand cut warehouse costs 40% using on-demand 3PL\"",
              tags: [{ label: "LinkedIn", class: "bg-orange/20 text-orange2" }, { label: "Carousel", class: "bg-[#388ADD]/20 text-[#85B7EB]" }]
            },
            {
              num: "06",
              title: "Offers & Seasonal CTAs",
              desc: "50% first-month deal, instant quote, Diwali relocation campaigns, summer moving season. Every post must include a clear, single CTA with a direct link.",
              eg: "\"Diwali declutter: Store everything before guests arrive — 50% off first month\"",
              tags: [{ label: "Story", class: "bg-gold/20 text-gold" }, { label: "Reel", class: "bg-[#7F77DD]/20 text-[#AFA9EC]" }]
            }
          ].map((pillar, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 relative transition-all hover:-translate-y-1 hover:border-white/20">
              <div className="font-display text-[3rem] font-extrabold text-white/5 absolute top-4 right-5 leading-none">{pillar.num}</div>
              <div className="font-display text-[1rem] font-bold mb-3">{pillar.title}</div>
              <p className="text-[0.83rem] text-white/70 mb-4">{pillar.desc}</p>
              <div className="text-[0.78rem] text-slate italic p-2.5 bg-white/5 rounded-md border-l-2 border-orange mb-4">
                {pillar.eg}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {pillar.tags.map((tag, j) => (
                  <span key={j} className={`text-[0.7rem] px-2.5 py-1 rounded-full font-semibold tracking-wider uppercase ${tag.class}`}>
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
