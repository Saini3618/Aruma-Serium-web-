export default function Collection() {
  const products = [
    {
      img: 'images/Floral fresh Aroma1.png',
      alt: 'Floral Fresh Aroma',
      glow: 'rgba(255,182,193,0.28)',
      category: 'floral',
      badge: 'Bestseller',
      badgeClass: '',
      cat: 'Floral · 15ML',
      name: 'Floral Fresh Aroma',
      tagline: '"Aroma Strong Enough to Steal a Kiss"',
      price: '₹799',
      stars: '★★★★★',
      delay: '0.05s',
    },
    {
      img: 'images/floral_fresh_dark.png',
      alt: 'Floral Fresh Dark',
      glow: 'rgba(255,182,193,0.28)',
      category: 'floral',
      badge: 'New Look',
      badgeClass: 'new',
      cat: 'Floral · 15ML',
      name: 'Floral Fresh Aroma',
      tagline: '"Aroma Strong Enough to Steal a Kiss"',
      price: '₹799',
      stars: '★★★★★',
      delay: '0.1s',
    },
    {
      img: 'images/ocean_breeze.png',
      alt: 'Ocean Breeze',
      glow: 'rgba(100,200,255,0.28)',
      category: 'fresh',
      badge: 'Fresh',
      badgeClass: 'fresh-badge',
      cat: 'Fresh · 30ML',
      name: 'Ocean Breeze Aroma',
      tagline: '"Let the Ocean Take You Away"',
      price: '₹1,099',
      stars: '★★★★★',
      delay: '0.15s',
    },
    {
      img: 'images/fruity_exotica.png',
      alt: 'Fruity Exotica',
      glow: 'rgba(255,180,50,0.28)',
      category: 'fresh',
      badge: 'Exotic',
      badgeClass: 'exotic-badge',
      cat: 'Fruity · 30ML',
      name: 'Fruity Exotica',
      tagline: '"A Burst of Tropical Paradise"',
      price: '₹1,099',
      stars: '★★★★★',
      delay: '0.2s',
    },
    {
      img: 'images/aqua_aroma.png',
      alt: 'Aqua Aroma',
      glow: 'rgba(80,220,220,0.28)',
      category: 'fresh',
      badge: null,
      badgeClass: '',
      cat: 'Fresh · 15ML',
      name: 'Aqua Aroma',
      tagline: '"Pure As Morning Dew"',
      price: '₹799',
      stars: '★★★★☆',
      delay: '0.25s',
    },
  ];

  return (
    <section id="collection" className="py-20 px-8 relative overflow-hidden" style={{ background: 'var(--bg-1)' }}>
      <div className="abs-orb"
        style={{ top: '50%', right: 0, width: '550px', height: '550px', background: 'rgba(200,151,58,0.05)', transform: 'translateX(50%) translateY(-50%)' }}>
      </div>
      <div className="max-w-screen-xl mx-auto relative z-10">

        <div className="text-center mb-8 reveal-up">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-14" style={{ background: 'rgba(200,151,58,0.40)' }}></div>
            <p className="text-[9px] tracking-[0.6em] uppercase text-gold-400">Signature Collection</p>
            <div className="h-px w-14" style={{ background: 'rgba(200,151,58,0.40)' }}></div>
          </div>
          <h2 className="font-serif font-light split-text" style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)', color: 'var(--text)' }}>
            Our <em className="text-gold-400">Aromas</em>
          </h2>
        </div>

        <div className="flex justify-center gap-2 mb-14 reveal-up flex-wrap" style={{ animationDelay: '0.1s' }}>
          <button className="filter-btn active magnetic" data-filter="all">All</button>
          <button className="filter-btn magnetic" data-filter="floral">Floral</button>
          <button className="filter-btn magnetic" data-filter="fresh">Fresh</button>
          <button className="filter-btn magnetic" data-filter="oriental">Oriental</button>
        </div>

        <div id="products" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {products.map((p, i) => (
            <div key={i} className="product-card reveal-up" data-category={p.category} style={{ animationDelay: p.delay }}>
              <div className="product-img-wrap">
                <img src={p.img} alt={p.alt} className="product-img" />
                <div className="product-glow" style={{ '--glow-color': p.glow }}></div>
                <div className="product-hover-overlay">
                  <div className="product-actions">
                    <a href="#contact" className="product-buy-btn magnetic">Buy Now</a>
                    <button className="product-wish-btn magnetic" title="Wishlist">♡</button>
                  </div>
                </div>
                {p.badge && <div className={`product-badge ${p.badgeClass}`}>{p.badge}</div>}
              </div>
              <div className="product-info">
                <p className="product-category">{p.cat}</p>
                <h3 className="product-name">{p.name}</h3>
                <p className="product-tagline">{p.tagline}</p>
                <div className="product-footer">
                  <p className="product-price">{p.price}</p>
                  <div className="product-stars">{p.stars}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Black Oudh feature */}
        <div className="mt-10 reveal-up" style={{ animationDelay: '0.35s' }}>
          <div className="oudh-feature-card group">
            <div className="oudh-img-side">
              <img src="images/black_oudh_dark.png" alt="Black Oudh Aroma" className="oudh-img" />
              <div className="oudh-img-fade"></div>
            </div>
            <div className="oudh-content">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-gold-400/55"></div>
                <span className="text-[9px] tracking-[0.5em] uppercase text-gold-400">Limited Edition · Oriental</span>
              </div>
              <h3 className="font-serif text-white mb-3 split-text" style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 300 }}>
                Black Oudh <em className="text-gold-400">Aroma</em>
              </h3>
              <p className="text-sm font-light italic mb-6 max-w-md" style={{ color: 'rgba(255,255,255,0.38)' }}>"Light Me, Love Me, Lose Yourself."</p>
              <p className="text-sm font-light leading-relaxed max-w-lg mb-8" style={{ color: 'rgba(210,205,195,0.60)' }}>
                Distilled from the rarest Agarwood of the Arabian Peninsula. A deep, smouldering oriental fragrance that
                commands attention, ignites desire, and lingers long after you've left the room.
              </p>
              <div className="flex items-center gap-6 flex-wrap">
                <p className="font-serif text-3xl text-gold-400 font-light">₹1,499</p>
                <a href="#contact" className="btn-gold-sm group flex items-center gap-2 magnetic">
                  <span>Buy Now</span>
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.28)' }}>30ML · Oriental</span>
              </div>
            </div>
            <div className="oudh-glow-badge">
              <span className="font-serif text-gold-400 text-xs tracking-widest">SIGNATURE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
