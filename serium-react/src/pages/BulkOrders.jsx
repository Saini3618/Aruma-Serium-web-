import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const benefits = [
  { title: 'Special Pricing', desc: 'Tier-based pricing for larger volumes to maximize partner margins.', delay: '0.05s' },
  { title: 'Custom Packaging', desc: 'Gift-ready packs, event branding, and curated assortment bundles.', delay: '0.1s' },
  { title: 'Delivery Support', desc: 'Assisted logistics for pan-India deliveries, including scheduled dispatches.', delay: '0.15s' },
  { title: 'Minimum Quantities', desc: 'Bulk orders start from practical MOQs with scalable fulfillment options.', delay: '0.2s' },
];

export default function BulkOrders() {
  useEffect(() => {
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
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-44 pb-24 px-8 overflow-hidden bg-[#1a1610]">
        <div className="abs-orb" style={{ top: 0, right: 0, width: '560px', height: '560px', background: 'rgba(212,168,66,0.08)', transform: 'translate(33%,-33%)' }}></div>
        <div className="abs-orb" style={{ bottom: 0, left: 0, width: '460px', height: '460px', background: 'rgba(212,168,66,0.06)', transform: 'translate(-33%,33%)' }}></div>
        
        <div className="max-w-screen-xl mx-auto relative z-10">
          <div className="reveal-up">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-gold-400"></div>
              <p className="text-[10px] tracking-[0.6em] uppercase text-gold-400 font-medium">B2B Enquiries</p>
            </div>
            <h1 className="font-serif font-light leading-none" style={{ fontSize: 'clamp(3rem,8vw,6rem)' }}>
              <span className="text-white block">Bulk</span>
              <span className="gold-shimmer-text block italic">Inquiries</span>
            </h1>
            <p className="mt-8 text-sm md:text-base leading-loose max-w-2xl" style={{ color: 'rgba(210,205,195,0.72)' }}>
              For businesses, retailers, and hospitality partners. Select your category below to explore our bulk offerings and request a custom quotation.
            </p>
            <div className="flex flex-wrap gap-3 mt-10">
              <span className="px-5 py-2 border border-gold-400/20 text-gold-400 text-[9px] tracking-[0.3em] uppercase bg-gold-400/5 backdrop-blur-sm uppercase">Retail Supply</span>
              <span className="px-5 py-2 border border-gold-400/20 text-gold-400 text-[9px] tracking-[0.3em] uppercase bg-gold-400/5 backdrop-blur-sm uppercase">Wedding Gifting</span>
              <span className="px-5 py-2 border border-gold-400/20 text-gold-400 text-[9px] tracking-[0.3em] uppercase bg-gold-400/5 backdrop-blur-sm uppercase">Corporate Hampers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 px-8 bg-white relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16 reveal-up">
             <p className="text-[10px] tracking-[0.5em] uppercase text-gold-400 font-bold mb-4">Specialized Bulk</p>
             <h2 className="font-serif text-4xl md:text-5xl font-light text-[#1a1610]">Partner <span className="italic">Collections</span></h2>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <Link to="/bulk/serums" className="flex-1 group relative h-[550px] overflow-hidden reveal-up border border-black/5 shadow-2xl rounded-px">
              <img src="images/Gemini_Generated_Image_pzcqnbpzcqnbpzcq.webp" 
                   alt="Serums" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <p className="text-[10px] tracking-[0.6em] uppercase text-gold-400 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-700 decoration-gold-400 underline underline-offset-8">Aruoma Series</p>
                <h3 className="font-serif text-5xl text-white mb-6 tracking-wide uppercase">Signature <br/><span className="text-gold-400 italic">Serums</span></h3>
                <div className="h-px w-12 bg-gold-400 mb-8 transition-all duration-700 group-hover:w-24"></div>
                <span className="px-10 py-4 bg-gold-400 text-black text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-white transition-all duration-500 rounded-px">Explore Serums</span>
              </div>
            </Link>
            <Link to="/bulk/candles" className="flex-1 group relative h-[550px] overflow-hidden reveal-up border border-black/5 shadow-2xl rounded-px" style={{ animationDelay: '0.1s' }}>
              <img src="images/himudifier.webp" 
                   alt="Candals" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <p className="text-[10px] tracking-[0.6em] uppercase text-gold-300 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-700 decoration-gold-300 underline underline-offset-8">Atmosphere Pro</p>
                <h3 className="font-serif text-5xl text-white mb-6 tracking-wide uppercase">Pure <br/><span className="text-gold-300 italic">CANDALS</span></h3>
                <div className="h-px w-12 bg-gold-300 mb-8 transition-all duration-700 group-hover:w-24"></div>
                <span className="px-10 py-4 bg-[#1a1610] text-[#d4a842] border border-[#d4a842]/30 text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-gold-400 hover:text-black transition-all duration-500 rounded-px">View Candals</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-32 px-8 relative overflow-hidden bg-[#F9F9F4] border-y border-black/5">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-[10px] tracking-[0.6em] uppercase text-gold-400 mb-4 font-bold">The Serium Advantage</p>
            <h2 className="font-serif font-light text-5xl text-[#1a1610]">Built for <em className="text-gold-400 italic">B2B Scale</em></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <article key={i} className="p-10 bg-white border border-black/5 hover:border-gold-400/30 transition-all duration-500 reveal-up group rounded-px shadow-sm hover:shadow-xl" style={{ animationDelay: b.delay }}>
                <h3 className="font-serif text-2xl text-[#1a1610] mb-4 group-hover:text-gold-400 transition-colors uppercase tracking-wider">{b.title}</h3>
                <p className="text-sm text-black/40 leading-loose">{b.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-8 overflow-hidden bg-[#1a1610] text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto reveal-up">
          <p className="text-[10px] tracking-[0.6em] uppercase mb-6 text-gold-300 font-bold">Priority Support</p>
          <h2 className="font-serif font-light text-5xl md:text-7xl leading-tight text-white">
            Custom Quotations <br/> <span className="gold-shimmer-text italic">Within 24 Hours</span>
          </h2>
          <a href="https://wa.me/8302607949?text=Hello%20I%20am%20interested%20in%20bulk%20orders"
            target="_blank" rel="noopener noreferrer" className="mt-12 inline-flex items-center gap-4 bg-gold-400 text-black px-12 py-5 text-[10px] tracking-[0.5em] uppercase font-black hover:bg-white transition-all duration-500 rounded-px">
            <span>Contact on WhatsApp</span>
          </a>
        </div>
      </section>
    </Layout>
  );
}
