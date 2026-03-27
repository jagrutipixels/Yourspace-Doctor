export default function Calendar() {
  return (
    <section className="py-20">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 relative z-10">
        <div className="text-[0.72rem] tracking-[0.12em] uppercase text-orange font-semibold mb-3 flex items-center gap-2.5 before:content-[''] before:block before:w-7 before:h-px before:bg-orange">
          05 · Content Calendar
        </div>
        <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.1] mb-4">Instagram Weekly Blueprint</h2>
        <p className="max-w-[620px] text-[0.95rem] text-white/70 leading-relaxed">
          A repeatable weekly posting rhythm that balances education, trust-building, and conversion — without burning out your content team.
        </p>
        <div className="mt-10 flex flex-col gap-[1px] rounded-xl overflow-hidden border border-white/10">
          <div className="grid grid-cols-[100px_1fr] md:grid-cols-[110px_1fr_180px] bg-white/5 p-3 md:px-6 text-[0.7rem] font-semibold tracking-widest uppercase text-slate gap-6">
            <div>Day</div>
            <div>Content</div>
            <div className="hidden md:block">Format(s)</div>
          </div>
          {[
            {
              day: "Monday",
              content: "Space tip or blog repurpose — \"5 items you didn't know you could store\". Educational, high-save content. Link to full blog in bio.",
              formats: [{ label: "Carousel", class: "bg-[#388ADD]/20 text-[#85B7EB]" }]
            },
            {
              day: "Tuesday",
              content: "Interactive Story — Poll \"Are you running out of space?\" or quiz. Swipe-up or DM link directly to quote tool.",
              formats: [{ label: "Story", class: "bg-gold/20 text-gold" }]
            },
            {
              day: "Wednesday",
              content: "Behind-the-scenes Reel — facility tour, packing team in action, or the climate-control vault. Raw and authentic beats polished.",
              formats: [{ label: "Reel", class: "bg-[#7F77DD]/20 text-[#AFA9EC]" }]
            },
            {
              day: "Thursday",
              content: "Customer spotlight — Google review converted to branded quote card or short testimonial clip. Feature customer's name and storage type.",
              formats: [{ label: "UGC", class: "bg-[#1A7A6E]/20 text-[#3BC9BA]" }, { label: "Carousel", class: "bg-[#388ADD]/20 text-[#85B7EB]" }]
            },
            {
              day: "Friday",
              content: "Life moment Reel — \"Moving to Pune? Here's what 3,000 families did with their stuff\". Weekend posts drive higher saves and shares.",
              formats: [{ label: "Reel", class: "bg-[#7F77DD]/20 text-[#AFA9EC]" }]
            },
            {
              day: "Saturday",
              content: "Flash offer Story — 50% first-month deal reminder with countdown sticker. DM CTA or link to WhatsApp. Saturday drives highest impulse decisions.",
              formats: [{ label: "Story", class: "bg-gold/20 text-gold" }]
            },
            {
              day: "LinkedIn",
              content: "1 thought leadership post or B2B case study (2–3×/week). Topics: 3PL ROI, document digitisation, peak season warehousing, D2C case studies.",
              formats: [{ label: "LinkedIn", class: "bg-orange/15 text-orange2" }]
            }
          ].map((row, i) => (
            <div key={i} className="grid grid-cols-[100px_1fr] md:grid-cols-[110px_1fr_180px] bg-white/5 p-4 md:px-6 gap-6 items-center border-t border-white/5 hover:bg-white/10 transition-colors">
              <div className="font-display text-[0.85rem] font-bold">{row.day}</div>
              <div className="text-[0.85rem] text-white/70 leading-relaxed">{row.content}</div>
              <div className="hidden md:flex flex-wrap gap-1.5">
                {row.formats.map((format, j) => (
                  <span key={j} className={`text-[0.68rem] px-2.5 py-1 rounded-full font-semibold tracking-wider uppercase ${format.class}`}>
                    {format.label}
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
