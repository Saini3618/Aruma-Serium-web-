import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    img: 'images/ocean_breeze.png',
    alt: 'Ocean Breeze Aroma',
    cat: 'Fresh Collection',
    name: 'Ocean Breeze Aroma',
    tagline: 'Cool marine freshness ideal for hotels, spas, and summer gifting kits.',
    variants: ['15ML Counter Display', '30ML Signature Bottle', 'Bulk Tester Packs'],
    waText: 'Hello%20I%20am%20interested%20in%20bulk%20order%20for%20Ocean%20Breeze%20Aroma',
    delay: '0.1s',
  },
  {
    img: 'images/black_oudh_dark.png',
    alt: 'Black Oudh Aroma',
    cat: 'Oriental Signature',
    name: 'Black Oudh Aroma',
    tagline: 'Deep and bold oud profile for premium clientele and festive gift lines.',
    variants: ['30ML Luxury Bottle', 'Limited Edition Sleeve Pack', 'Premium Event Gift Set'],
    waText: 'Hello%20I%20am%20interested%20in%20bulk%20order%20for%20Black%20Oudh%20Aroma',
    delay: '0.15s',
  },
  {
    img: 'images/fruity_exotica.png',
    alt: 'Fruity Exotica Aroma',
    cat: 'Fruity Collection',
    name: 'Fruity Exotica',
    tagline: 'Lively tropical profile that performs exceptionally in youth retail channels.',
    variants: ['15ML Intro Size', '30ML Full Size', 'Festival Combo Pack'],
    waText: 'Hello%20I%20am%20interested%20in%20bulk%20order%20for%20Fruity%20Exotica',
    delay: '0.2s',
  },
  {
    img: 'images/aqua_aroma.png',
    alt: 'Aqua Aroma',
    cat: 'Fresh Collection',
    name: 'Aqua Aroma',
    tagline: 'Clean aquatic profile perfect for hotel amenities and long-term contracts.',
    variants: ['15ML Retail Pack', '30ML Signature Pack', 'Private Label Bulk Fill'],
    waText: 'Hello%20I%20am%20interested%20in%20bulk%20order%20for%20Aqua%20Aroma',
    delay: '0.25s',
  },
];

const benefits = [
  { title: 'Special Pricing', desc: 'Tier-based pricing for larger volumes to maximize partner margins.', delay: '0.05s' },
  { title: 'Custom Packaging', desc: 'Gift-ready packs, event branding, and curated assortment bundles.', delay: '0.1s' },
  { title: 'Delivery Support', desc: 'Assisted logistics for pan-India deliveries, including scheduled dispatches.', delay: '0.15s' },
  { title: 'Minimum Quantities', desc: 'Bulk orders start from practical MOQs with scalable fulfillment options.', delay: '0.2s' },
];

export default function BulkOrders() {
  useEffect(() => {
    /* ========== LOADER ========== */
    const loader = document.getElementById('loader');
    const hideLoader = () => setTimeout(() => loader?.classList.add('hidden'), 1200);
    window.addEventListener('load', hideLoader);
    setTimeout(() => loader?.classList.add('hidden'), 3000);

    /* ========== CUSTOM CURSOR ========== */
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    let mx = 0, my = 0, fx = 0, fy = 0;

    const onMouseMove = e => {
      mx = e.clientX; my = e.clientY;
      if (cursor) cursor.style.transform = `translate(${mx - 5}px,${my - 5}px)`;
    };
    document.addEventListener('mousemove', onMouseMove);

    const animFollower = () => {
      fx += (mx - fx - 18) * 0.13;
      fy += (my - fy - 18) * 0.13;
      if (follower) follower.style.transform = `translate(${fx}px,${fy}px)`;
      requestAnimationFrame(animFollower);
    };
    animFollower();

    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', () => { cursor?.classList.add('expand'); follower?.classList.add('hide'); });
      el.addEventListener('mouseleave', () => { cursor?.classList.remove('expand'); follower?.classList.remove('hide'); });
    });

    /* ========== NAVBAR SCROLL ========== */
    const navbar = document.getElementById('navbar');
    const onScroll = () => navbar?.classList.toggle('scrolled', window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });

    /* ========== MOBILE MENU ========== */
    const menuBtn = document.getElementById('menu-btn');
    const menuClose = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = () => { if (mobileMenu) { mobileMenu.style.display = 'none'; document.body.style.overflow = ''; } };
    menuBtn?.addEventListener('click', () => { if (mobileMenu) { mobileMenu.style.display = 'flex'; document.body.style.overflow = 'hidden'; } });
    menuClose?.addEventListener('click', closeMenu);
    mobileMenu?.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', closeMenu));

    /* ========== SCROLL REVEAL ========== */
    const revealEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseFloat(entry.target.style.animationDelay || '0') * 1000;
          setTimeout(() => entry.target.classList.add('visible'), delay);
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => revealObs.observe(el));

    // Scroll to top on page load
    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener('load', hideLoader);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <div id="cursor"></div>
      <div id="cursor-follower"></div>

      {/* Loader */}
      <div id="loader" className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
        style={{ background: '#FAFAFA' }}>
        <div className="loader-ring"></div>
        <p className="font-serif text-gold-400 text-2xl tracking-[0.6em] uppercase mt-8 animate-pulse">SERIUM</p>
        <p className="text-[10px] tracking-[0.4em] uppercase mt-2" style={{ color: '#707070' }}>Amor Exotic · Aroma of Paris</p>
      </div>

      {/* Navbar */}
      <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
        <div className="max-w-screen-2xl mx-auto px-8 py-5 flex items-center justify-between">
          <Link to="/" className="flex flex-col leading-none">
            <span className="font-serif text-2xl font-light tracking-[0.5em] text-gold-400 uppercase">SERIUM</span>
            <span className="text-[8px] tracking-[0.4em] uppercase mt-0.5" style={{ color: '#707070' }}>Amor Exotic · Paris</span>
          </Link>
          <div className="hidden lg:flex items-center gap-10">
            <Link to="/#about" className="nav-link">Our Story</Link>
            <Link to="/#collection" className="nav-link">Collection</Link>
            <Link to="/#products" className="nav-link">Products</Link>
            <Link to="/#ingredients" className="nav-link">Ingredients</Link>
            <Link to="/#contact" className="nav-link">Contact</Link>
            <a href="#bulk-products" className="nav-link active">Bulk Orders</a>
          </div>
          <a href="#bulk-products"
            className="hidden lg:flex items-center gap-2 border border-gold-400/50 text-gold-400 text-[10px] tracking-[0.3em] uppercase px-6 py-3 hover:bg-gold-400 hover:text-white transition-all duration-300 font-medium group">
            <span>Bulk Enquiry</span>
            <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <button id="menu-btn" className="lg:hidden text-gold-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="fixed inset-0 z-40 flex-col items-center justify-center gap-8 hidden"
        style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(28px)' }}>
        <button id="menu-close" className="absolute top-6 right-8 text-gold-400 text-3xl leading-none">&times;</button>
        <Link to="/#about" className="mobile-link font-serif text-3xl tracking-widest transition-colors" style={{ color: 'rgba(26,26,26,0.8)' }}>Story</Link>
        <Link to="/#collection" className="mobile-link font-serif text-3xl tracking-widest transition-colors" style={{ color: 'rgba(26,26,26,0.8)' }}>Collection</Link>
        <Link to="/#products" className="mobile-link font-serif text-3xl tracking-widest transition-colors" style={{ color: 'rgba(26,26,26,0.8)' }}>Products</Link>
        <Link to="/#ingredients" className="mobile-link font-serif text-3xl tracking-widest transition-colors" style={{ color: 'rgba(26,26,26,0.8)' }}>Ingredients</Link>
        <Link to="/#contact" className="mobile-link font-serif text-3xl tracking-widest transition-colors" style={{ color: 'rgba(26,26,26,0.8)' }}>Contact</Link>
        <a href="#bulk-products" className="mobile-link font-serif text-3xl tracking-widest text-gold-400 transition-colors">Bulk Orders</a>
      </div>

      {/* Hero */}
      <section className="bulk-hero relative pt-44 pb-24 px-8 overflow-hidden">
        <div className="abs-orb" style={{ top: 0, right: 0, width: '560px', height: '560px', background: 'rgba(200,151,58,0.08)', transform: 'translate(33%,-33%)' }}></div>
        <div className="abs-orb" style={{ bottom: 0, left: 0, width: '460px', height: '460px', background: 'rgba(158,116,37,0.06)', transform: 'translate(-33%,33%)' }}></div>
        <div className="max-w-screen-xl mx-auto relative z-10">
          <div className="bulk-hero-panel reveal-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gold-400/70"></div>
              <p className="text-[10px] tracking-[0.6em] uppercase text-gold-400">B2B Enquiries</p>
            </div>
            <h1 className="font-serif font-light text-5xl md:text-6xl xl:text-7xl leading-[1.05]">
              Bulk <em className="text-gold-400">Orders</em>
            </h1>
            <p className="mt-7 text-sm md:text-base leading-loose max-w-2xl" style={{ color: '#E4DED1' }}>
              For businesses, retailers, gifting partners, event organizers, and hospitality teams. Share your quantity
              requirement and preferred variants - our team will craft a custom bulk quotation for you.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <span className="bulk-chip">Retail Supply</span>
              <span className="bulk-chip">Wedding Gifting</span>
              <span className="bulk-chip">Corporate Hampers</span>
              <span className="bulk-chip">Event Fulfillment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="bulk-products" className="py-24 px-8 relative overflow-hidden" style={{ background: '#F9F9F4' }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-14 reveal-up">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-px w-14" style={{ background: 'rgba(200,151,58,0.40)' }}></div>
              <p className="text-[10px] tracking-[0.6em] uppercase text-gold-400">Bulk Catalogue</p>
              <div className="h-px w-14" style={{ background: 'rgba(200,151,58,0.40)' }}></div>
            </div>
            <h2 className="font-serif font-light text-5xl xl:text-6xl">Available <em className="text-gold-400">Aromas</em></h2>
          </div>

          <div className="bulk-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <article key={i} className="product-card bulk-product-card reveal-up" style={{ animationDelay: p.delay }}>
                <div className="bulk-product-media">
                  <img src={p.img} alt={p.alt} className="bulk-product-img" />
                </div>
                <div className="product-info">
                  <p className="product-category">{p.cat}</p>
                  <h3 className="product-name">{p.name}</h3>
                  <p className="product-tagline">{p.tagline}</p>
                  <p className="bulk-variants-title">Available Variants</p>
                  <ul className="bulk-variants">
                    {p.variants.map((v, j) => <li key={j}>{v}</li>)}
                  </ul>
                  <a className="bulk-wa-btn" target="_blank" rel="noopener noreferrer"
                    href={`https://wa.me/8302607949?text=${p.waText}`}>Enquire</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-8 relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-14 reveal-up">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-px w-10" style={{ background: 'rgba(200,151,58,0.40)' }}></div>
              <p className="text-[10px] tracking-[0.6em] uppercase text-gold-400">Bulk Order Benefits</p>
              <div className="h-px w-10" style={{ background: 'rgba(200,151,58,0.40)' }}></div>
            </div>
            <h2 className="font-serif font-light text-5xl">Built for <em className="text-gold-400">B2B Scale</em></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b, i) => (
              <article key={i} className="feature-box bulk-info-box reveal-up" style={{ animationDelay: b.delay }}>
                <h3 className="bulk-info-title">{b.title}</h3>
                <p className="feature-desc">{b.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bulk-cta py-24 px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center reveal-up">
          <p className="text-[10px] tracking-[0.55em] uppercase mb-5 text-gold-300">Ready for Bulk Deals</p>
          <h2 className="font-serif font-light text-5xl xl:text-6xl leading-tight" style={{ color: '#F8F5EE' }}>
            Share Your Quantity and Timeline,<br />We Will Prepare a Priority Quote
          </h2>
          <p className="text-sm leading-relaxed mt-7 max-w-2xl mx-auto" style={{ color: '#D8CFB9' }}>
            Skip checkout flows and connect directly with our business team for volume pricing, lead times, and packaging customization.
          </p>
          <a href="https://wa.me/8302607949?text=Hello%20I%20am%20interested%20in%20bulk%20orders%20for%20SERIUM"
            target="_blank" rel="noopener noreferrer" className="bulk-cta-btn mt-10 inline-flex items-center gap-3">
            <span>Contact on WhatsApp</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#FAFAFA', borderTop: '1px solid #E5E5E5' }} className="pt-16 pb-8 px-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <Link to="/" className="font-serif text-4xl tracking-[0.5em] text-gold-400 uppercase font-light block">SERIUM</Link>
          <p className="text-[10px] tracking-[0.4em] uppercase mt-2" style={{ color: '#707070' }}>Amor Exotic · Aroma of Paris</p>
          <p className="text-xs tracking-wider mt-6" style={{ color: '#707070' }}>© 2026 SERIUM · Amor Exotic. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
