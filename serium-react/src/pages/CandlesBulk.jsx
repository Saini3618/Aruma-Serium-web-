import { useEffect } from 'react';
import Layout from '../components/Layout';
import SafeImage from '../components/SafeImage';

const products = [
  {
    img: 'images/himudifier.webp',
    alt: 'Luxe Candle Mist',
    cat: 'Aroma Diffusion',
    name: 'CANDALS Premium Mist',
    tagline: 'Silent ultrasonic technology for the most refined candle-like atmosphere.',
    variants: ['400ML Glass Edition', '600ML Ceramic Tank', 'Limited Golden Series'],
    waText: 'Hello%20I%20am%20interested%20in%20bulk%20order%20for%20CANDALS%20Premium%20Mist',
    delay: '0.1s',
  },
  {
    img: 'images/Gemini_Generated_Image_m1j1rrm1j1rrm1j1.webp',
    alt: 'Wood Grain Candle',
    cat: 'Natural Series',
    name: 'CANDALS Wood Edition',
    tagline: 'Organic aesthetics for hotel lobbies and wellness centers.',
    variants: ['Dark Walnut Finish', 'Light Oak Finish', 'Mini Portable USB'],
    waText: 'Hello%20I%20am%20interested%20in%20bulk%20order%20for%20CANDALS%20Wood%20Edition',
    delay: '0.15s',
  },
  {
    img: 'images/Gemini_Generated_Image_k7ooxbk7ooxbk7oo.webp',
    alt: 'Breathe Pro Signature',
    cat: 'Performance Plus',
    name: 'CANDALS Breathe Pro',
    tagline: 'High-capacity aromatic diffusion for large corporate spaces.',
    variants: ['High Velocity', 'HEPA Integrated', 'Dual Port Design'],
    waText: 'Hello%20I%20am%20interested%20in%20bulk%20order%20for%20CANDALS%20Breathe%20Pro',
    delay: '0.2s',
  },
];

export default function CandlesBulk() {
  useEffect(() => {
    /* ========== PARALLAX HERO ========== */
    const heroImg = document.querySelector('.parallax-img');
    const heroSection = document.getElementById('candle-hero');
    let currentY = 0, targetY = 0;
    let parallaxRafId = null;
    let heroVisible = true;
    if (heroImg && heroSection) {
      const lerp = (start, end, factor) => start + (end - start) * factor;
      const animateParallax = () => {
        if (heroVisible && !document.hidden) {
          targetY = window.scrollY;
          currentY = lerp(currentY, targetY, 0.08);
          if (currentY < window.innerHeight * 1.5) {
            heroImg.style.transform = `translate3d(0, ${currentY * 0.35}px, 0) scale(${1.05 + currentY * 0.0001})`;
          }
        }
        parallaxRafId = requestAnimationFrame(animateParallax);
      };
      const heroObs = new IntersectionObserver(([e]) => { heroVisible = e.isIntersecting; }, { threshold: 0 });
      heroObs.observe(heroSection);
      parallaxRafId = requestAnimationFrame(animateParallax);
    }

    /* ========== FLOATING PARTICLES ========== */
    const hero = document.getElementById('candle-hero');
    if (hero) {
      for (let i = 0; i < 20; i++) {
        const p = document.createElement('div');
        p.style.cssText = `position:absolute;width:${1 + Math.random() * 2}px;height:${1 + Math.random() * 2}px;border-radius:50%;background:rgba(212,168,66,${0.2 + Math.random() * 0.3});left:${Math.random() * 100}%;top:${Math.random() * 100}%;pointer-events:none;animation:float ${6 + Math.random() * 8}s ease-in-out ${Math.random() * 5}s infinite;z-index:2;`;
        hero.appendChild(p);
      }
    }

    /* ========== PRODUCT CARD 3D TILT ========== */
    document.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width - 0.5) * 12;
        const y = ((e.clientY - r.top) / r.height - 0.5) * 12;
        card.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${-y}deg) translateY(-8px)`;
        card.style.transition = 'transform 0.1s ease';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.320, 1)';
      });
    });

    return () => { if (parallaxRafId) cancelAnimationFrame(parallaxRafId); };
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section id="candle-hero" className="relative w-full min-h-[95vh] flex items-center overflow-hidden bg-[#1a1610]">
        <div className="absolute inset-0 z-0 opacity-50">
          <SafeImage src="images/himudifier.webp" alt="Candals Lux" className="w-full h-full object-cover object-center parallax-img" loading="eager" />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(105deg,rgba(26,22,16,1) 0%,rgba(26,22,16,0.6) 45%,rgba(26,22,16,0.3) 100%)' }}>
          </div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,#1a1610 0%,transparent 70%)' }}></div>
        </div>

        <div className="abs-orb animate-pulse-glow"
          style={{ top: '20%', left: '10%', width: '550px', height: '550px', background: 'rgba(212,168,66,0.08)' }}></div>
        <div className="abs-orb animate-pulse-glow"
          style={{ bottom: '20%', right: '15%', width: '400px', height: '400px', background: 'rgba(212,168,66,0.05)', animationDelay: '3s' }}></div>

        {/* Rotating ring decoration */}
        <div className="absolute right-10 top-[60%] -translate-y-1/2 w-96 h-96 hidden xl:block z-10">
          <div className="absolute inset-0 rounded-full"
            style={{ background: 'radial-gradient(circle,rgba(212,168,66,0.1) 0%,transparent 70%)', animation: 'pulseGlow 4s ease-in-out infinite' }}>
          </div>
          <div className="absolute inset-0 rounded-full border border-gold-400/20 animate-rotate-slow"></div>
          <div className="absolute inset-6 rounded-full border border-gold-400/10"
            style={{ animation: 'rotateSlow 18s linear infinite reverse' }}></div>
          <div className="absolute inset-12 rounded-full border border-gold-400/22 animate-rotate-slow"
            style={{ animationDuration: '12s' }}></div>
          <div className="absolute inset-0 animate-rotate-slow">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gold-400/60 shadow-[0_0_10px_rgba(212,168,66,0.5)]"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gold-400/40"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative animate-float">
              <div className="w-52 h-52 rounded-full p-[3px] shadow-[0_0_60px_rgba(212,168,66,0.15)]"
                style={{ background: 'linear-gradient(135deg,rgba(212,168,66,0.7),rgba(30,25,15,0.3),rgba(212,168,66,0.5))' }}>
                <div className="w-full h-full rounded-full overflow-hidden"
                  style={{ background: 'linear-gradient(160deg,#2e2820 0%,#1a1610 100%)' }}>
                  <img src="/images/luxury_diffuser.png" alt="Candals Floating Tech"
                    className="w-full h-full object-cover scale-110" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-8 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-10 reveal-up">
              <div className="h-px w-12 bg-gold-400/50"></div>
              <p className="text-[10px] tracking-[0.8em] uppercase text-gold-400 font-bold">Atmospheric Mastery</p>
            </div>
            <h1 className="font-serif font-light leading-none reveal-up"
              style={{ fontSize: 'clamp(4rem,10vw,8.5rem)', color: 'white' }}>
              <span className="block">Pure</span>
              <span className="block italic gold-shimmer-text">CANDALS</span>
              <span className="block text-[0.4em] tracking-[0.15em] mt-4 uppercase font-extralight not-italic opacity-30">Collection</span>
            </h1>
            <p className="font-light text-sm md:text-base leading-loose mt-12 max-w-xl text-white/50 reveal-up" style={{ animationDelay: '0.2s' }}>
              Engineered for absolute serenity. Our CANDALS collection integrates advanced ultrasonic
              technology with high-couture design for the ultimate sanctuary in any environment.
            </p>
            <div className="flex flex-wrap items-center gap-10 mt-14 reveal-up" style={{ animationDelay: '0.3s' }}>
              <a href="#pro-candles" className="btn-gold group px-14 py-6 text-[11px]">
                <span>Explore Bulk Portfolio</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="flex flex-col gap-1">
                <span className="text-gold-400 font-serif text-2xl tracking-normal">5000+</span>
                <span className="text-[8px] tracking-[0.4em] uppercase text-white/30">Units Delivered</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section id="pro-candles" className="py-40 px-8 bg-[#F9F9F4] relative overflow-hidden">
        <div className="abs-orb" style={{ bottom: '-10%', left: '-5%', width: '500px', height: '500px', background: 'rgba(212,168,66,0.04)' }}></div>
        <div className="max-w-screen-xl mx-auto relative z-10">
          <div className="mb-32 text-center reveal-up">
            <h2 className="font-serif text-5xl md:text-6xl font-light text-[#1a1610] tracking-widest uppercase">The <span className="italic text-gold-400">Portfolio</span></h2>
            <div className="h-px w-24 bg-gold-400/40 mx-auto mt-12"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {products.map((p, i) => (
              <div key={i} className="product-card group/card reveal-up bg-white border border-black/5 hover:border-gold-400/20 transition-all duration-700 shadow-sm hover:shadow-2xl rounded-px overflow-hidden" style={{ animationDelay: p.delay }}>
                <div className="relative aspect-square overflow-hidden bg-black/5">
                  <SafeImage src={p.img} alt={p.alt} className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110" />
                  <div className="absolute inset-0 bg-gold-400/5 group-hover/card:bg-transparent transition-colors duration-700"></div>
                  <div className="absolute top-8 left-8">
                    <span className="px-5 py-2 bg-gold-400 text-black text-[9px] tracking-[0.5em] uppercase font-bold rounded-px shadow-xl">{p.cat}</span>
                  </div>
                </div>
                <div className="p-12">
                  <h3 className="font-serif text-2xl mb-3 group-hover/card:text-gold-400 transition-colors duration-300 text-[#1a1610]">{p.name}</h3>
                  <p className="text-xs mb-8 text-black/40 italic leading-relaxed">"{p.tagline}"</p>

                  <div className="space-y-5 mb-12 border-t border-black/5 pt-10">
                    {p.variants.map((v, j) => (
                      <div key={j} className="flex items-center justify-between text-[10px] tracking-widest text-black/60 uppercase border-b border-black/5 pb-3 last:border-0 last:pb-0">
                        <span>{v}</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></div>
                      </div>
                    ))}
                  </div>

                  <a href={`https://wa.me/8302607949?text=${p.waText}`}
                    target="_blank" rel="noopener noreferrer"
                    className="block w-full text-center py-6 bg-[#1a1610] text-white text-[10px] tracking-[0.6em] uppercase font-black hover:bg-gold-400 hover:text-black transition-all duration-500 rounded-px shadow-lg hover:shadow-gold-900/20">
                    Request Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Section */}
      <section className="py-40 bg-[#1a1610] overflow-hidden relative border-t border-white/5">
        <div className="abs-orb" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '1000px', height: '1000px', background: 'rgba(212,168,66,0.02)' }}></div>
        <div className="max-w-screen-xl mx-auto px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-32">
            <div className="flex-1 reveal-up">
              <h2 className="font-serif text-5xl md:text-8xl text-white font-light leading-tight mb-12">Absolute <br /><span className="italic gold-shimmer-text">Ambience</span></h2>
              <div className="space-y-12">
                {[
                  { title: 'Zero Moisture Damage', desc: 'Engineered for fine mist dispersal that protects premium surfaces and artworks.' },
                  { title: 'High Velocity Scents', desc: 'Powerful enough to maintain consistent aroma across large hotel lobbies and malls.' },
                  { title: 'Bespoke Branding', desc: 'Full OEM integration available for custom colors, logos, and materials.' }
                ].map((f, i) => (
                  <div key={i} className="group border-l border-gold-400/20 hover:border-gold-400 px-10 py-2 transition-colors duration-500">
                    <h3 className="font-serif text-2xl text-white/90 mb-4 uppercase tracking-[0.2em]">{f.title}</h3>
                    <p className="text-white/30 text-[11px] leading-loose tracking-[0.1em]">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 reveal-up" style={{ animationDelay: '0.4s' }}>
              <div className="relative aspect-[4/5] rounded-[30px] border border-gold-400/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
                <SafeImage src="images/absolute_ambience.png" alt="Absolute Ambience" className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1610] via-black/20 to-transparent opacity-90"></div>
                <div className="absolute bottom-12 left-12 right-12 p-8 border border-white/10 backdrop-blur-xl bg-black/40 rounded-2xl shadow-2xl">
                  <p className="text-[9px] tracking-[0.6em] uppercase text-gold-400 mb-2">Technical Standard</p>
                  <p className="text-white/80 text-xs leading-relaxed italic">"The benchmark in precision aroma engineering for luxury commercial spaces."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra Pro Max CTA Section */}
      <section className="py-40 relative flex items-center justify-center overflow-hidden min-h-[70vh] bg-[#FDFBF7]">
        {/* Dynamic Glowing Background Orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gold-400/20 rounded-full blur-[120px] mix-blend-multiply animate-pulse-glow"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[100px] mix-blend-multiply animate-float" style={{ animationDuration: '10s' }}></div>
        
        {/* Overlay subtle texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 512 512\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")' }}></div>

        <div className="max-w-5xl mx-auto px-8 relative z-10 w-full reveal-up">
          <div className="relative p-16 md:p-24 rounded-[40px] border border-white/60 shadow-[0_40px_100px_rgba(26,22,16,0.08)] overflow-hidden group">
            {/* Glass effect background */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-2xl"></div>
            
            {/* Inner border glow */}
            <div className="absolute inset-0 rounded-[40px] border border-white transition-colors duration-1000 group-hover:border-gold-400/40"></div>
            
            <div className="relative z-10 text-center flex flex-col items-center">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
                <p className="text-[11px] tracking-[0.6em] uppercase text-gold-600 font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold-500 to-gold-800">Premium Partnership</p>
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
              </div>
              
              <h2 className="font-serif font-light text-5xl md:text-7xl lg:text-8xl text-[#1a1610] leading-[1.1] mb-12 relative">
                Define Your <br />
                <span className="relative inline-block mt-2">
                  <span className="absolute -inset-2 bg-gold-400/10 blur-xl rounded-full"></span>
                  <span className="relative italic bg-clip-text text-transparent bg-gradient-to-r from-[#B0891D] via-[#D4AF37] to-[#8C6008] drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]">Signature Atmosphere</span>
                </span>
              </h2>
              
              <p className="text-[#1a1610]/50 text-xs tracking-[0.4em] uppercase mb-14 font-light mix-blend-multiply">Bulk Gifting · Retail Supply · Hospitality Contracts</p>
              
              <a href="https://wa.me/8302607949?text=Hello%20I%20am%20interested%20in%20bulk%20orders%20for%20CANDALS"
                target="_blank" rel="noopener noreferrer" 
                className="relative overflow-hidden rounded-full p-[2px] group/btn transition-transform hover:scale-105 duration-500 shadow-xl shadow-gold-900/10 hover:shadow-gold-900/20">
                <span className="absolute inset-0 bg-gradient-to-r from-gold-400 via-gold-200 to-gold-400 rounded-full opacity-70 group-hover/btn:opacity-100 animate-pulse-glow"></span>
                <div className="relative bg-[#FAF9F6] px-16 py-6 rounded-full flex items-center gap-4 transition-colors group-hover/btn:bg-transparent">
                  <span className="text-[12px] tracking-[0.4em] uppercase font-bold text-[#1a1610] transition-colors duration-500">Contact Business Team</span>
                  <svg className="w-5 h-5 text-gold-600 group-hover/btn:text-[#1a1610] group-hover/btn:translate-x-2 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
