import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { createWhatsAppLink } from '../data/contactConfig';
import Layout from '../components/Layout';
import SafeImage from '../components/SafeImage';
import NotFound from './NotFound';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug || p.aliases?.includes(slug));

  useEffect(() => {
    document.title = product ? `${product.name} | Amor Exotic` : 'Product Not Found | Amor Exotic';

    window.scrollTo(0, 0);
    
    // Product Image Parallax
    const prlxImg = document.querySelector('.product-parallax-img');
    const handleScroll = () => {
      if (prlxImg) {
        const speed = 0.4;
        const rect = prlxImg.parentElement.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          prlxImg.style.transform = `translateY(${(window.scrollY - rect.top) * speed * 0.1}px) scale(1.1)`;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    
    // 3D Tilt for info card
    const infoCard = document.querySelector('.info-glass-card');
    if (infoCard) {
      infoCard.addEventListener('mousemove', e => {
        const r = infoCard.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width - 0.5) * 6;
        const y = ((e.clientY - r.top) / r.height - 0.5) * 6;
        infoCard.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg) translateY(-5px)`;
      });
      infoCard.addEventListener('mouseleave', () => {
        infoCard.style.transform = '';
      });
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [slug, product]);

  if (!product) {
    return <NotFound />; // 👈 THIS is required
  }

  return (
    <Layout>
      <div className="min-h-screen bg-[#FBF9F4] overflow-hidden pt-24 md:pt-32">
        {/* Dynamic Background Auras */}
        <div className="abs-orb" style={{ top: '10%', right: '5%', width: '600px', height: '600px', background: product.glow || 'rgba(212,168,66,0.1)' }}></div>
        <div className="abs-orb" style={{ bottom: '10%', left: '5%', width: '500px', height: '500px', background: 'rgba(212,168,66,0.05)' }}></div>

        <div className="max-w-screen-xl mx-auto px-8 relative z-10 pb-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-4 mb-12 reveal-up text-[10px] tracking-[0.4em] uppercase text-black/30">
            <Link to="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <span className="w-1 h-1 rounded-full bg-gold-400/50"></span>
            <span className="text-black/60">{product.category}</span>
            <span className="w-1 h-1 rounded-full bg-gold-400/50"></span>
            <span className="text-gold-600 font-bold">{product.name}</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">
            {/* Left: Product Image */}
            <div className="flex-1 reveal-up">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[30px] shadow-2xl group">
                <SafeImage 
                  src={product.img} 
                  alt={product.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 product-parallax-img scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                
                {/* Floating Badge */}
                {product.badge && (
                  <div className={`absolute top-10 left-10 py-3 px-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full shadow-2xl z-20`}>
                    <span className="text-[10px] tracking-[0.5em] uppercase font-black text-white">{product.badge}</span>
                  </div>
                )}
                
                {/* Decorative Elements */}
                <div className="absolute inset-8 border border-white/10 pointer-events-none group-hover:inset-10 transition-all duration-500 rounded-[20px]"></div>
              </div>
            </div>

            {/* Right: Product Details */}
            <div className="flex-1 flex flex-col justify-center reveal-up" style={{ animationDelay: '0.2s' }}>
              <div className="info-glass-card p-10 md:p-14 bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[40px] shadow-[0_40px_100px_rgba(26,22,16,0.05)] relative overflow-hidden transition-all duration-500">
                {/* Subtle Inner Glow */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold-400/10 blur-[80px] rounded-full"></div>
                
                <p className="text-gold-600 text-[11px] tracking-[0.6em] uppercase font-bold mb-4">{product.cat}</p>
                <h1 className="font-serif text-5xl md:text-7xl text-[#1a1610] leading-tight mb-6">
                  {product.name}
                </h1>
                
                <p className="text-[#1a1610]/40 text-sm md:text-lg italic font-light mb-12 border-l-2 border-gold-400/30 pl-6">
                  {product.tagline}
                </p>

                <div className="min-h-[120px] mb-12">
                  <p className="text-[#1a1610]/60 text-sm leading-relaxed font-light">
                    {product.description}
                  </p>
                </div>

                <div className="flex flex-col items-center gap-10">
                  <a 
                    href={createWhatsAppLink(product.waText, { isEncoded: true })}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full relative group overflow-hidden rounded-full p-[1px]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-gold-600 via-gold-200 to-gold-600 animate-shimmer"></span>
                    <div className="relative bg-[#1a1610] hover:bg-transparent group-hover:text-[#1a1610] text-white px-12 py-6 rounded-full flex items-center justify-center gap-4 transition-all duration-500">
                      <span className="text-[12px] tracking-[0.4em] uppercase font-black">Order via WhatsApp</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <section className="py-24 bg-white/30 backdrop-blur-xl border-t border-black/5">
          <div className="max-w-screen-xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: '✦', title: 'Quality Assured', desc: 'Carefully developed blends with consistency in every drop.' },
              { icon: '✺', title: 'Artisan Crafted', desc: 'Small batch distillation for unmatched olfactory depth.' },
              { icon: '☾', title: 'Timeless Projection', desc: 'Engineered to linger and evolve beautifully over time.' }
            ].map((feat, i) => (
              <div key={i} className="text-center reveal-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <span className="text-4xl text-gold-400 mb-6 block">{feat.icon}</span>
                <h3 className="font-serif text-2xl text-[#1a1610] mb-3 uppercase tracking-widest">{feat.title}</h3>
                <p className="text-[11px] text-[#1a1610]/40 uppercase tracking-[0.2em]">{feat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related / Back */}
        <div className="py-24 bg-[#1a1610] text-center relative overflow-hidden">
           <div className="abs-orb" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '800px', height: '800px', background: 'rgba(212,168,66,0.03)' }}></div>
           <div className="relative z-10 max-w-2xl mx-auto px-8 reveal-up">
              <h2 className="font-serif text-4xl md:text-6xl text-white mb-10 leading-tight">Explore More <br/><span className="italic gold-shimmer-text">Remarkable</span> Aromas</h2>
                <Link to="/#collection" className="btn-gold px-12 py-5">View Full Collection</Link>
           </div>
        </div>
      </div>
    </Layout>
  );
}
