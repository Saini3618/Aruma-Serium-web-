import { useEffect } from 'react';
import Layout from '../components/Layout';
import SafeImage from '../components/SafeImage';
import { createWhatsAppLink } from '../data/contactConfig';
import { products as mainProducts } from '../data/products';

const localProducts = [
  // --- PREVIOUS BOTTLES (Restored) ---
  {
    img: 'images/bottel1.webp',
    alt: 'Black Oudh Aroma - Amor Exotic',
    cat: 'Signature Collection',
    name: 'Black Oudh Aroma',
    tagline: 'Light Me, Love Me, Lose Yourself — a deep, smouldering oriental fragrance that commands the space.',
    variants: ['15ML Signature Bottle', '30ML Luxury Pack', 'Bulk Wholesale Supply'],
    waText: 'Hello%20I%20am%20interested%20in%20bulk%20order%20for%20Black%20Oudh%20Aroma',
    delay: '0.1s',
  },
  {
    img: 'images/bottel2.webp',
    alt: 'Aqua Aroma - Amor Exotic',
    cat: 'Aqua Collection',
    name: 'Aqua Aroma',
    tagline: 'Let Desire Linger in the Air — a fresh floral aquatic blend by Amor Exotic, Aroma of Paris.',
    variants: ['15ML Retail Bottle', '1 Ltr. Bulk Supply', 'Wholesale Bulk Pack'],
    waText: 'Hello%20I%20am%20interested%20in%20bulk%20order%20for%20Aqua%20Aroma%20Amor%20Exotic',
    delay: '0.1s',
  },
  {
    img: 'images/aroma_premium_bulk_v2.webp',
    alt: 'Fruity Exotica - Aroma Exotic',
    cat: 'Exotic Collection',
    name: 'Fruity Exotica',
    tagline: 'A burst of tropical paradise — premium botanical ambience oil crafted for luxurious gifting and high-end retail.',
    variants: ['15ML Luxury Pack', '100ML Elite Bottle', 'Bulk Wholesale Supply'],
    waText: 'Hello%20I%20am%20interested%20in%20bulk%20order%20for%20Fruity%20Exotica',
    delay: '0.1s',
  },
  {
    img: 'images/ocean_breeze_premium.webp',
    alt: 'Ocean Breeze - Aruoma Exotic',
    cat: 'Fresh Collection',
    name: 'Ocean Breeze',
    tagline: 'Premium artisanal oil blend — crisp ocean waves and coastal botanicals for serene luxury spaces.',
    variants: ['15ML Retail Bottle', '1 Ltr. Bulk Supply', 'Wholesale Bulk Pack'],
    waText: 'Hello%20I%20am%20interested%20in%20bulk%20order%20for%20Ocean%20Breeze%20Aroma',
    delay: '0.1s',
  },
  {
    img: 'images/aroma_pro_bulk.webp',
    alt: 'Amor Botanical Aroma',
    cat: 'Botanical Collection',
    name: 'Amor Botanical Aroma',
    tagline: 'Precision-crafted lavender and botanical florals — premium ambience oil for consistent luxury scenting in large spaces.',
    variants: ['15ML Performance Pack', '1 Ltr. Bulk Supply', 'Wholesale Bulk Pack'],
    waText: 'Hello%20I%20am%20interested%20in%20bulk%20order%20for%20Amor%20Botanical%20Aroma',
    delay: '0.1s',
  },
  {
    img: 'images/aroma_floral_bulk.webp',
    alt: 'Floral Fresh Aroma - Aroma Exotic',
    cat: 'Botanical Collection',
    name: 'Floral Fresh Aroma',
    tagline: 'Aroma Strong Enough to Steal a Kiss — a vibrant symphony of garden-fresh blooms and meadow air.',
    variants: ['15ML Retail Bottle', '1 Ltr. Bulk Supply', 'Wholesale Bulk Pack'],
    waText: 'Hello%20I%20am%20interested%20in%20bulk%20order%20for%20Floral%20Fresh%20Aroma',
    delay: '0.1s',
  },
  // --- NEW EXOTIC CATALOGUE ---
  {
    img: 'images/aroma_black_oudh_pro.webp',
    alt: 'Black Oudh Aroma - Amor Exotic Aroma of Paris',
    cat: 'Signature Collection',
    name: 'Black Oudh Aroma',
    tagline: 'Light Me, Love Me, Lose Yourself — a deep, smouldering oriental fragrance that commands the space.',
    variants: ['15ML Luxury Pack', '1 Ltr. Bulk Supply', 'Wholesale Bulk Pack'],
    waText: 'Hello%20I%20am%20interested%20in%20bulk%20order%20for%20Black%20Oudh%20Aroma%20Pro',
    delay: '0.15s',
  },
  {
    img: 'images/aroma_cherry_blossom.webp',
    alt: 'Floral Fresh Aroma - Amor Exotic',
    cat: 'Floral Collection',
    name: 'Floral Fresh Aroma',
    tagline: 'Aroma Strong Enough to Steal a Kiss — delicate romantic petals and cherry blossoms in every breath.',
    variants: ['15ML Retail Bottle', '1 Ltr. Bulk Supply', 'Wholesale Bulk Pack'],
    waText: 'Hello%20I%20am%20interested%20in%20bulk%20order%20for%20Floral%20Fresh%20Aroma%20Cherry',
    delay: '0.15s',
  },
  {
    img: 'images/aroma_aqua_signature.webp',
    alt: 'Aqua Aruoma - Aroma Exotic',
    cat: 'Aqua Collection',
    name: 'Aqua Aruoma',
    tagline: 'Sparkling mint and crystalline water notes for a pure, rejuvenating atmosphere.',
    variants: ['15ML Luxury Pack', '1 Ltr. Bulk Supply', 'Wholesale Bulk Pack'],
    waText: 'Hello%20I%20am%20interested%20in%20bulk%20order%20for%20Aqua%20Aruoma',
    delay: '0.15s',
  },
  {
    img: 'images/aroma_deep_aqua.webp',
    alt: 'Aqua Aroma - Amor Exotic Aroma of Paris',
    cat: 'Aqua Collection',
    name: 'Aqua Aroma',
    tagline: 'Let Desire Linger in the Air — a sophisticated blue-floral blend distilled in Paris.',
    variants: ['15ML Retail Bottle', '1 Ltr. Bulk Supply', 'Wholesale Bulk Pack'],
    waText: 'Hello%20I%20am%20interested%20in%20bulk%20order%20for%20Aqua%20Aroma%20Deep',
    delay: '0.15s',
  },
  {
    img: 'images/aroma_tropical_breeze.webp',
    alt: 'Ocean Breeze - Amor Exotic Aroma of Paris',
    cat: 'Fresh Collection',
    name: 'Ocean Breeze',
    tagline: 'Caution: May Cause Unexpected Romance — sun-drenched palms and salt-kissed air.',
    variants: ['15ML Performance Pack', '1 Ltr. Bulk Supply', 'Wholesale Bulk Pack'],
    waText: 'Hello%20I%20am%20interested%20in%20bulk%20order%20for%20Ocean%20Breeze%20Tropical',
    delay: '0.15s',
  },
  {
    img: 'images/aroma_majestic_rose.webp',
    alt: 'Rose Aroma - Aroma Exotic',
    cat: 'Floral Collection',
    name: 'Rose Aroma',
    tagline: 'Let Romance Blossom — a passionate symphony of the world\'s finest crimson roses.',
    variants: ['15ML Luxury Pack', '1 Ltr. Bulk Supply', 'Wholesale Bulk Pack'],
    waText: 'Hello%20I%20am%20interested%20in%20bulk%20order%20for%20Rose%20Aroma',
    delay: '0.15s',
  },
  {
    img: 'images/aroma_island_vista.webp',
    alt: 'Vista Aroma - Aroma Exotic',
    cat: 'Exotic Collection',
    name: 'Vista Aroma',
    tagline: 'Creamy coconut and island breeze — an instant escape to a tropical paradise.',
    variants: ['15ML Retail Bottle', '1 Ltr. Bulk Supply', 'Wholesale Bulk Pack'],
    waText: 'Hello%20I%20am%20interested%20in%20bulk%20order%20for%20Vista%20Aroma',
    delay: '0.15s',
  },
  {
    img: 'images/aroma_exotic_lily.webp',
    alt: 'Tropical Lily Aroma - Aroma Exotic',
    cat: 'Exotic Collection',
    name: 'Tropical Lily Aroma',
    tagline: 'Intoxicating pink lilies and rare botanical blooms for an elite ambience.',
    variants: ['15ML Luxury Pack', '1 Ltr. Bulk Supply', 'Wholesale Bulk Pack'],
    waText: 'Hello%20I%20am%20interested%20in%20bulk%20order%20for%20Tropical%20Lily%20Aroma',
    delay: '0.15s',
  },
  {
    img: 'images/aroma_golden_sandalwood.webp',
    alt: 'Sandalwood Aroma - Aroma Exotic',
    cat: 'Oriental Collection',
    name: 'Sandalwood Aroma',
    tagline: 'Warm, meditative wood notes that ground the soul and elevate the space.',
    variants: ['15ML Retail Bottle', '1 Ltr. Bulk Supply', 'Wholesale Bulk Pack'],
    waText: 'Hello%20I%20am%20interested%20in%20bulk%20order%20for%20Sandalwood%20Aroma',
    delay: '0.15s',
  },
  {
    img: 'images/aroma_royal_nargis.webp',
    alt: 'Nargis Aroma - Aroma Exotic',
    cat: 'Botanical Collection',
    name: 'Nargis Aroma',
    tagline: 'Vibrant spring daffodils and wild narcissus for a cheerful, uplifting aura.',
    variants: ['15ML Luxury Edition', '1 Ltr. Bulk Supply', 'Wholesale Bulk Pack'],
    waText: 'Hello%20I%20am%20interested%20in%20bulk%20order%20for%20Nargis%20Aroma',
    delay: '0.15s',
  },
  {
    img: 'images/aroma_pure_mogra.webp',
    alt: 'Mogra Aroma - Aroma Exotic',
    cat: 'Floral Collection',
    name: 'Mogra Aroma',
    tagline: 'The timeless essence of pure Indian Jasmine, distilled for ultimate luxury.',
    variants: ['15ML Luxury Pack', '1 Ltr. Bulk Supply', 'Wholesale Bulk Pack'],
    waText: 'Hello%20I%20am%20interested%20in%20bulk%20order%20for%20Mogra%20Aroma',
    delay: '0.15s',
  },
  {
    img: 'images/aroma_lemongrass_zest.webp',
    alt: 'Lemongrass Aroma - Aroma Exotic',
    cat: 'Zen Collection',
    name: 'Lemongrass Aroma',
    tagline: 'Energizing citrus herbs to revitalize the mind and cleanse the atmosphere.',
    variants: ['15ML Retail Bottle', '1 Ltr. Bulk Supply', 'Wholesale Bulk Pack'],
    waText: 'Hello%20I%20am%20interested%20in%20bulk%20order%20for%20Lemongrass%20Aroma',
    delay: '0.15s',
  },
  {
    img: 'images/aroma_zen_greentea.webp',
    alt: 'Green Tea Aroma - Aroma Exotic',
    cat: 'Zen Collection',
    name: 'Green Tea Aroma',
    tagline: 'Calming green tea extracts for a balanced, peaceful sanctuary within any room.',
    variants: ['15ML Luxury Edition', '1 Ltr. Bulk Supply', 'Wholesale Bulk Pack'],
    waText: 'Hello%20I%20am%20interested%20in%20bulk%20order%20for%20Green%20Tea%20Aroma',
    delay: '0.15s',
  },
];

// Map main products to bulk format and filter out existing ones by name
const mappedMainProducts = mainProducts
  .filter(mp => !localProducts.some(lp => lp.name.toLowerCase().includes(mp.name.toLowerCase())))
  .map(p => ({
    img: p.img,
    alt: p.alt,
    cat: p.category.charAt(0).toUpperCase() + p.category.slice(1) + ' Collection',
    name: p.name,
    tagline: p.tagline.replace(/"/g, ''),
    variants: ['15ML Luxury Edition', '1 Ltr. Bulk Supply', 'Wholesale Bulk Pack'],
    waText: `Hello%20I%20am%20interested%20in%20total%20bulk%20order%20for%20${p.name.replace(/ /g, '%20')}`,
    delay: p.delay
  }));

const products = [...localProducts, ...mappedMainProducts];

export default function SerumsBulk() {
  useEffect(() => {
    /* ========== PARALLAX HERO ========== */
    const heroImg = document.querySelector('.parallax-img');
    const heroSection = document.getElementById('serum-hero');
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
    const hero = document.getElementById('serum-hero');
    if (hero) {
      for (let i = 0; i < 15; i++) {
        const p = document.createElement('div');
        p.style.cssText = `position:absolute;width:${2 + Math.random() * 3}px;height:${2 + Math.random() * 3}px;border-radius:50%;background:rgba(212,168,66,${0.15 + Math.random() * 0.4});left:${Math.random() * 100}%;top:${Math.random() * 100}%;pointer-events:none;animation:float ${5 + Math.random() * 7}s ease-in-out ${Math.random() * 5}s infinite;z-index:2;`;
        hero.appendChild(p);
      }
    }

    /* ========== PRODUCT CARD 3D TILT ========== */
    document.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width - 0.5) * 12;
        const y = ((e.clientY - r.top) / r.height - 0.5) * 12;
        card.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${-y}deg) translateY(-6px)`;
        card.style.transition = 'transform 0.08s ease';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.transition = 'transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)';
      });
    });

    return () => { if (parallaxRafId) cancelAnimationFrame(parallaxRafId); };
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section id="serum-hero" className="relative w-full min-h-[95vh] flex items-center overflow-hidden bg-[#1a1610]">
        <div className="absolute inset-0 z-0 opacity-40">
          <SafeImage src="images/9328f814-3f9d-4343-ad37-db6b212677ae.webp" alt="Amor Aroma Bulk Hero" className="w-full h-full object-cover object-center parallax-img" loading="eager" />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(105deg,rgba(26,22,16,1) 0%,rgba(26,22,16,0.7) 45%,rgba(26,22,16,0.4) 100%)' }}>
          </div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,#1a1610 0%,transparent 60%)' }}></div>
        </div>

        <div className="abs-orb animate-pulse-glow"
          style={{ top: '25%', left: '15%', width: '500px', height: '500px', background: 'rgba(212,168,66,0.1)' }}></div>
        <div className="abs-orb animate-pulse-glow"
          style={{ bottom: '15%', right: '10%', width: '350px', height: '350px', background: 'rgba(212,168,66,0.06)', animationDelay: '2.5s' }}></div>

        {/* Rotating ring decoration */}
        <div className="absolute right-10 top-[65%] -translate-y-1/2 w-96 h-96 hidden xl:block z-10">
          <div className="absolute inset-0 rounded-full"
            style={{ background: 'radial-gradient(circle,rgba(212,168,66,0.12) 0%,transparent 70%)', animation: 'pulseGlow 4s ease-in-out infinite' }}>
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
              <div className="w-52 h-52 rounded-full p-[3px] shadow-[0_0_50px_rgba(212,168,66,0.2)]"
                style={{ background: 'linear-gradient(135deg,rgba(212,168,66,0.8),rgba(40,30,10,0.2),rgba(212,168,66,0.6))' }}>
                <div className="w-full h-full rounded-full overflow-hidden"
                  style={{ background: 'linear-gradient(160deg,#2e2820 0%,#1a1610 100%)' }}>
                  <img src="/images/bulk hro img.webp" alt="AROMA Oil"
                    className="w-full h-full object-cover scale-110" loading="lazy" decoding="async" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto relative z-10 px-5 sm:px-8 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-10 reveal-up">
              <div className="h-px w-12 bg-gold-400/60"></div>
              <p className="text-[10px] tracking-[0.7em] uppercase text-gold-400 font-bold">Premium B2B Supply</p>
            </div>
            <h1 className="font-serif font-light leading-none reveal-up" style={{ fontSize: 'clamp(4rem,10vw,8.5rem)' }}>
              <span className="text-white block">Aroma</span>
              <span className="gold-shimmer-text block italic">Signature</span>
            </h1>
            <p className="mt-12 text-sm md:text-base leading-loose max-w-xl text-white/60 reveal-up" style={{ animationDelay: '0.3s' }}>
              Rare botanicals. Timeless artistry. Our premium fragrance oils are crafted for the world's most
              extraordinary hospitality and retail brands. Scalable for global demand.
            </p>
            <div className="flex flex-wrap gap-6 mt-14 reveal-up" style={{ animationDelay: '0.4s' }}>
              <a href="#serum-catalogue" className="btn-gold group flex items-center gap-3">
                <span>View Catalogue</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <div className="flex items-center gap-6 pl-8 border-l border-white/10 uppercase tracking-[0.4em] text-[8px] text-white/40">
                <div>
                  <span className="block text-gold-400 text-lg font-serif tracking-normal">100%</span>
                  Pure
                </div>
                <div>
                  <span className="block text-gold-400 text-lg font-serif tracking-normal">PREMIUM</span>
                  Blend
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="serum-catalogue" className="py-16 sm:py-32 px-5 sm:px-8 relative overflow-hidden bg-[#F9F9F4]">
        <div className="abs-orb" style={{ top: '50%', right: '-10%', width: '600px', height: '600px', background: 'rgba(212,168,66,0.03)' }}></div>
        <div className="max-w-screen-xl mx-auto relative z-10">
          <div className="text-center mb-24 reveal-up">
            <h2 className="font-serif text-5xl font-light text-[#1a1610] uppercase tracking-widest">Aroma <span className="italic text-gold-400">Portfolio</span></h2>
            <div className="h-px w-24 bg-gold-400/30 mx-auto mt-10"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map((p, i) => (
              <article key={i} className="product-card reveal-up group bg-white border border-black/5 hover:border-gold-400/20 transition-all duration-700 shadow-sm hover:shadow-2xl rounded-px" style={{ animationDelay: p.delay }}>
                <div className="relative aspect-[4/5] overflow-hidden bg-black/5">
                  <SafeImage src={p.img} alt={p.alt} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gold-400/5 group-hover:bg-transparent transition-colors duration-700"></div>
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-gold-400 text-black text-[8px] tracking-[0.4em] uppercase font-bold rounded-px shadow-lg">{p.cat}</span>
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="font-serif text-2xl mb-3 text-[#1a1610] group-hover:text-gold-400 transition-colors duration-300">{p.name}</h3>
                  <p className="text-xs text-black/40 italic mb-6 leading-relaxed">"{p.tagline}"</p>

                  <div className="space-y-4 mb-10 border-t border-black/5 pt-8">
                    {p.variants.map((v, j) => (
                      <div key={j} className="flex items-center justify-between text-[10px] tracking-[0.3em] text-black/60 uppercase border-b border-black/5 pb-2 last:border-0 last:pb-0">
                        <span>{v}</span>
                        <span className="text-gold-400 font-bold">●</span>
                      </div>
                    ))}
                  </div>

                  <a className="block w-full text-center py-5 bg-[#1a1610] text-white text-[10px] tracking-[0.5em] uppercase font-black hover:bg-gold-400 hover:text-black transition-all duration-500 rounded-px shadow-lg hover:shadow-gold-900/20"
                    target="_blank" rel="noopener noreferrer"
                    href={createWhatsAppLink(p.waText, { isEncoded: true })}>Request Quote</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Aroma? - Ultra Premium Redesign */}
      <section className="py-32 px-4 md:px-8 overflow-hidden relative">
        <div className="absolute inset-0 bg-[#FAF7F2] z-0"></div>
        <div className="max-w-screen-xl mx-auto relative z-10 reveal-up">
          <div className="flex flex-col lg:flex-row bg-[#1a1610] rounded-[30px] shadow-[0_40px_100px_rgba(40,30,20,0.15)] border border-gold-400/20 overflow-hidden relative">

            <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 512 512\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")' }}></div>

            {/* Left Content */}
            <div className="flex-1 p-12 md:p-20 relative z-10 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-10 bg-gradient-to-r from-gold-400 to-transparent"></div>
                <p className="text-[10px] tracking-[0.5em] uppercase text-gold-400 font-bold">The Gold Standard</p>
              </div>

              <h2 className="font-serif text-5xl md:text-7xl font-light text-white leading-tight mb-14">
                Absolute <br />
                <span className="italic text-gold-400 gold-shimmer-text">Artistry</span>
              </h2>

              <div className="space-y-12 relative">
                <div className="absolute left-[3px] top-4 bottom-4 w-px bg-gradient-to-b from-gold-400/30 via-gold-400/5 to-transparent"></div>

                {[
                  { title: 'Premium Formulation', desc: 'Precision-crafted aroma compositions designed for consistent luxury diffusion performance.' },
                  { title: 'High Longevity', desc: 'Masterfully blended with rare organic fixatives to guarantee extraordinary scent retention and projection.' },
                  { title: 'Bespoke White Label', desc: 'Exclusive OEM partnerships offering tailored aromatic signatures and premium packaging solutions.' }
                ].map((item, i) => (
                  <div key={i} className="group relative pl-10 reveal-up" style={{ animationDelay: `${i * 0.15 + 0.2}s` }}>
                    <div className="absolute left-[0px] top-3 w-2 h-2 rounded-full border border-gold-400 bg-[#1a1610] group-hover:bg-gold-400 transition-colors shadow-[0_0_10px_rgba(200,151,58,0.5)]"></div>
                    <h3 className="font-serif text-2xl text-white mb-2 uppercase tracking-widest">{item.title}</h3>
                    <p className="text-[13px] text-white/50 leading-relaxed max-w-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image Full Bleed */}
            <div className="flex-1 relative min-h-[450px] lg:min-h-auto overflow-hidden group">
              <div className="absolute inset-0 bg-black"></div>
              <SafeImage src="images/last immggg.webp" alt="Oudh Quality" className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a1610] via-black/40 to-transparent lg:w-1/2"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1610] via-transparent to-transparent opacity-80 lg:hidden"></div>

              <div className="absolute bottom-10 right-10 backdrop-blur-xl bg-black/40 border border-gold-400/20 p-5 rounded-2xl shadow-2xl reveal-up group-hover:-translate-y-2 transition-transform duration-700 delay-300">
                <p className="font-serif italic text-gold-400 text-3xl mb-1">100%</p>
                <p className="text-[8px] tracking-[0.4em] uppercase text-white/70">Pure Extract</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-40 px-5 sm:px-8 overflow-hidden bg-[#1a1610] text-center border-t border-white/5 relative">
        <div className="abs-orb" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '800px', height: '800px', background: 'rgba(212,168,66,0.03)' }}></div>
        <div className="max-w-4xl mx-auto relative z-10 reveal-up">
          <p className="text-[10px] tracking-[0.8em] uppercase mb-8 text-gold-400 font-bold">Corporate Partnerships</p>
          <h2 className="font-serif font-light text-4xl sm:text-5xl md:text-8xl text-white leading-tight mb-8 sm:mb-14"> Ready to Place a <br /><span className="gold-shimmer-text italic">Bulk Order with Amor Exotic?</span> </h2>
          <div className="flex flex-col items-center gap-10">
            <a href={createWhatsAppLink('Hello I am interested in bulk orders for AROMA OILS')}
              target="_blank" rel="noopener noreferrer" className="btn-gold px-8 sm:px-16 py-5 sm:py-6 text-[11px] font-black group">
              <span>Contact on WhatsApp</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <p className="text-[9px] tracking-[0.5em] uppercase text-white/30">Direct response within 24 business hours</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}


