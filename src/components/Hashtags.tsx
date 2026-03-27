export default function Hashtags() {
  const tags = [
    "#SelfStorage", "#StorageIndia", "#YourSpaceDoctor", "#StoreWithYourSpace", 
    "#MumbaiStorage", "#PuneStorage", "#BengaluruStorage", "#NaviMumbaiStorage", 
    "#DeclutterIndia", "#HomeOrganisation", "#MovingInMumbai", "#SpaceSolutions", 
    "#ClimateControlledStorage", "#3PLIndia", "#Warehousing", "#BusinessStorage", 
    "#IndiaLogistics", "#VehicleStorage", "#ArtStorage", "#PackingAndMoving", 
    "#DocumentStorage", "#SmallBusinessIndia", "#D2CIndia"
  ];

  return (
    <section className="py-20">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 relative z-10">
        <div className="text-[0.72rem] tracking-[0.12em] uppercase text-orange font-semibold mb-3 flex items-center gap-2.5 before:content-[''] before:block before:w-7 before:h-px before:bg-orange">
          05 · Hashtag Strategy
        </div>
        <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.1] mb-4">Hashtag Mix for Maximum Reach</h2>
        <p className="max-w-[620px] text-[0.95rem] text-white/70 leading-relaxed">
          Use a mix of niche, mid-volume, and local hashtags. Place in the first comment — not caption — to keep copy clean. Rotate sets to avoid shadow-banning.
        </p>
        <div className="flex flex-wrap gap-2.5 mt-8">
          {tags.map((tag, i) => (
            <span key={i} className="text-[0.82rem] px-4 py-1.5 rounded-full border border-white/15 text-white/70 bg-white/5 transition-all hover:border-orange hover:text-orange2 hover:bg-orange/10 cursor-default">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
