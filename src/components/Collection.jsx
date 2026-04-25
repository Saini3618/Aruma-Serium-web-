import { Link } from 'react-router-dom';
import { products } from '../data/products';

export default function Collection() {
  const displayProducts = products.filter(p => p.id !== 'royal-oud-aroma');
  const royalOud = products.find(p => p.id === 'royal-oud-aroma');

  return (
    <section id="collection" className="py-14 sm:py-20 px-5 sm:px-8 relative overflow-hidden" style={{ background: 'var(--bg-1)' }}>
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



        <div id="products" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {displayProducts.map((p, i) => (
            <div key={i} className="product-card reveal-up" data-category={p.category} style={{ animationDelay: p.delay }}>
              <div className="product-img-wrap">
                <img src={p.img} alt={p.alt} className="product-img" loading="lazy" decoding="async" />
                <div className="product-glow" style={{ '--glow-color': p.glow }}></div>
                <div className="product-hover-overlay">
                  <div className="product-actions">
                    <Link to={`/product/${p.slug}`} className="product-buy-btn magnetic">View Details</Link>
                    <button className="product-wish-btn magnetic" title="Wishlist">♡</button>
                  </div>
                </div>
                {p.badge && <div className={`product-badge ${p.badgeClass}`}>{p.badge}</div>}
              </div>
              <div className="product-info">
                <p className="product-category">{p.cat}</p>
                <h3 className="product-name">
                  <Link to={`/product/${p.slug}`} className="hover:text-gold-400 transition-colors">
                    {p.name}
                  </Link>
                </h3>
                <p className="product-tagline">{p.tagline}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Royal Oud feature */}
        {royalOud && (
          <div className="mt-10 reveal-up" style={{ animationDelay: '0.35s' }}>
            <div className="oudh-feature-card group">
              <div className="oudh-img-side">
                <img src={royalOud.img} alt={royalOud.alt} className="oudh-img" loading="lazy" decoding="async" />
                <div className="oudh-img-fade"></div>
              </div>
              <div className="oudh-content">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-gold-400/55"></div>
                  <span className="text-[9px] tracking-[0.5em] uppercase text-gold-400">Limited Edition · Oriental</span>
                </div>
                <h3 className="font-serif text-white mb-3 split-text" style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 300 }}>
                  {royalOud.name.split(' ')[0]} <em className="text-gold-400">{royalOud.name.split(' ').slice(1).join(' ')}</em>
                </h3>
                <p className="text-sm font-light italic mb-6 max-w-md" style={{ color: 'rgba(255,255,255,0.38)' }}>{royalOud.tagline}</p>
                <p className="text-sm font-light leading-relaxed max-w-lg mb-8" style={{ color: 'rgba(210,205,195,0.60)' }}>
                  {royalOud.description}
                </p>
                <div className="flex items-center gap-6 flex-wrap">
                  <Link to={`/product/${royalOud.slug}`} className="btn-gold-sm group flex items-center gap-2 magnetic">
                    <span>Explore Aroma</span>
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.28)' }}>{royalOud.cat}</span>
                </div>
              </div>
              <div className="oudh-glow-badge">
                <span className="font-serif text-gold-400 text-xs tracking-widest">SIGNATURE</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

