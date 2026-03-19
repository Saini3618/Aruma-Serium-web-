export default function Gallery() {
  const items = [
    { img: 'images/gallery_floral_hero.png', alt: 'Floral Fresh', cat: 'Floral Collection', title: 'Floral Fresh Aroma', sub: '15ML · ₹799', extraClass: 'gal-tall', delay: '0s' },
    { img: 'images/ChatGPT Image Mar 14, 2026, 04_36_37 PM.png', alt: 'Floral Atmospheric', cat: 'Floral Collection', title: 'Floral Fresh — Atmospheric', sub: 'Dark · Captivating', extraClass: '', imgClass: 'object-top', delay: '0.08s' },
    { img: 'images/black_oudh_dark.png', alt: 'Black Oudh', cat: 'Oriental · Signature', title: 'Black Oudh Aroma', sub: '30ML · ₹1,499', extraClass: '', delay: '0.12s' },
    { img: 'images/ocean_breeze.png', alt: 'Ocean Breeze', cat: 'Fresh Collection', title: 'Ocean Breeze Aroma', sub: '30ML · ₹1,099', extraClass: '', delay: '0.16s' },
    { img: 'images/gallery_floral_marble.png', alt: 'Serium Luxury', cat: 'Amor Exotic · Paris', title: 'The Art of Serium', sub: 'Luxury · Timeless', extraClass: '', delay: '0.20s' },
  ];

  return (
    <section className="py-24 px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #fefdf9 0%, #f6f1e6 50%, #eee6d6 100%)' }}>

      {/* Texture overlay */}
      <div className="absolute inset-0"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8973a' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\"), opacity: 0.8" }}>
      </div>

      {/* Illuminating orbs */}
      <div className="abs-orb"
        style={{ top: '-10%', left: '-10%', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)' }}>
      </div>
      <div className="abs-orb"
        style={{ bottom: '-20%', right: '-10%', width: '1000px', height: '1000px', background: 'radial-gradient(circle, rgba(200,151,58,0.1) 0%, transparent 60%)' }}>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 100%)' }}></div>

      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="text-center mb-16 reveal-up">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-14" style={{ background: 'rgba(200,151,58,0.45)' }}></div>
            <p className="text-[9px] tracking-[0.6em] uppercase text-gold-400 font-medium">Visual World</p>
            <div className="h-px w-14" style={{ background: 'rgba(200,151,58,0.45)' }}></div>
          </div>
          <h2 className="font-serif font-light" style={{ fontSize: 'clamp(3rem,6vw,4.5rem)', color: 'var(--text)' }}>
            The <em className="text-gold-400">Gallery</em>
          </h2>
          <p className="text-[10px] tracking-widest mt-4 uppercase" style={{ color: 'var(--text-35)' }}>Hover to explore each scent's world</p>
        </div>

        <div className="gallery-premium-wrapper relative mx-auto" style={{ maxWidth: '100%' }}>
          <div className="gallery-premium-grid">
            {items.map((item, i) => (
              <div key={i} className={`gal-premium-item ${item.extraClass} reveal-up`} style={{ animationDelay: item.delay }}>
                <img src={item.img} alt={item.alt} className={`gal-premium-img ${item.imgClass || ''}`} />
                <div className="gal-premium-dark"></div>
                <div className="gal-shimmer"></div>
                <div className="gal-glow"></div>
                <div className="gal-premium-overlay">
                  <div className="gal-premium-content">
                    <p className="gal-premium-cat">{item.cat}</p>
                    <h4 className="gal-premium-title">{item.title}</h4>
                    <div className="gal-premium-line"></div>
                    <p className="gal-premium-sub">{item.sub}</p>
                  </div>
                </div>
                <div className="gal-premium-border"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
