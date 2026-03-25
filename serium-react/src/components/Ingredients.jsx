export default function Ingredients() {
  const ingredients = [
    { icon: '🌹', name: 'Bulgarian Rose Otto', desc: "Sunrise-harvested Damask Roses from Bulgaria's Rose Valley. Luxurious floral warmth with a hint of honey." },
    { icon: '🌳', name: 'Arabian Oud (Agarwood)', desc: 'Rare agarwood resin prized for millennia. Deep, smoky-sweet and hypnotically masculine.' },
    { icon: '🌊', name: 'Marine Accords', desc: 'A proprietary blend recreating the crisp, ozone-fresh scent of the open sea after a storm.' },
    { icon: '🍑', name: 'Tropical Fruit Absolutes', desc: 'Cold-pressed extracts from mango, passion fruit, and lychee — vibrant, juicy and irresistible.' },
    { icon: '💧', name: 'Arctic Spring Water Essence', desc: 'Mineral-pure water essence from Nordic glacial springs for crisp, weightless aqua freshness.' },
  ];

  return (
    <section id="ingredients" className="py-20 px-8 relative overflow-hidden" style={{ background: 'var(--bg-2)' }}>
      <div className="abs-orb"
        style={{ bottom: 0, left: '50%', width: '460px', height: '460px', background: 'rgba(200,151,58,0.05)', transform: 'translateX(-50%) translateY(35%)' }}>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-20 reveal-up">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10" style={{ background: 'rgba(200,151,58,0.40)' }}></div>
            <p className="text-[9px] tracking-[0.6em] uppercase text-gold-400">Nature's Finest</p>
            <div className="h-px w-10" style={{ background: 'rgba(200,151,58,0.40)' }}></div>
          </div>
          <h2 className="font-serif font-light split-text" style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)', color: 'var(--text)' }}>
            Sacred <em className="text-gold-400">Ingredients</em>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <div className="image-frame group">
              <img src="images/ingredient.png" alt="Ingredients" className="image-frame-img" loading="lazy" decoding="async" />
              <div className="image-frame-overlay"></div>
              <div className="corner-tl"></div>
              <div className="corner-br"></div>
              <div className="absolute bottom-8 left-8 right-8 p-5 shadow-2xl"
                style={{ background: 'rgba(20,16,12,0.75)', border: '1px solid rgba(200,151,58,0.4)', backdropFilter: 'blur(12px)' }}>
                <p className="font-serif italic text-gold-400 text-lg drop-shadow-md">"In every drop, a story of the earth."</p>
                <p className="text-[10px] tracking-widest uppercase mt-2" style={{ color: 'rgba(255,255,255,0.6)' }}>— Amor Exotic</p>
              </div>
            </div>
          </div>
          <div className="reveal-right space-y-0"
            style={{ background: 'rgba(255,252,246,0.60)', border: '1px solid rgba(178,168,148,0.28)', backdropFilter: 'blur(8px)' }}>
            {ingredients.map((ing, i) => (
              <div key={i} className="ing-item">
                <div className="ing-icon">{ing.icon}</div>
                <div>
                  <h4 className="ing-name">{ing.name}</h4>
                  <p className="ing-desc">{ing.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
