export default function About() {
  return (
    <section id="about" className="py-14 sm:py-20 px-5 sm:px-8 relative overflow-hidden" style={{ background: 'var(--bg-0)' }}>
      <div className="abs-orb"
        style={{ top: 0, left: 0, width: '600px', height: '600px', background: 'rgba(200,151,58,0.04)', transform: 'translate(-50%,-50%)' }}>
      </div>
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

        <div className="reveal-left relative">
          <div className="absolute -top-5 -left-5 font-serif leading-none select-none pointer-events-none font-light"
            style={{ fontSize: '160px', color: 'rgba(42,33,24,0.04)' }}>S</div>
          <div className="image-frame group">
            <img src="images/home bottel.webp" alt="About Aroma Oils" className="image-frame-img" loading="lazy" decoding="async" />
            <div className="image-frame-overlay"></div>
            <div className="corner-tl"></div>
            <div className="corner-br"></div>
            <div className="absolute bottom-6 right-6 p-5 shadow-[0_20px_40px_rgba(200,151,58,0.15)] floating-badge"
              style={{ background: 'linear-gradient(135deg, rgba(30, 26, 20, 0.95), rgba(20, 15, 12, 0.98))', border: '1px solid rgba(200,151,58,0.4)', backdropFilter: 'blur(12px)', boxShadow: 'inset 0 0 20px rgba(200,151,58,0.05)' }}>
              <p className="font-serif text-3xl font-light text-gold-400">15+</p>
              <p className="text-[10px] tracking-widest uppercase mt-1" style={{ color: 'rgba(200,151,58,0.75)' }}>Years of Mastery</p>
            </div>
          </div>
        </div>

        <div className="reveal-right space-y-7">
          <div className="flex items-center gap-4">
            <div className="h-px w-10" style={{ background: 'rgba(200,151,58,0.55)' }}></div>
            <p className="text-[10px] tracking-[0.5em] uppercase text-gold-400">Our Philosophy</p>
          </div>
          <h2 className="font-serif font-light leading-tight split-text"
            style={{ fontSize: 'clamp(2.4rem,4vw,3.6rem)', color: 'var(--text)' }}>
            Born in <em className="text-gold-400">Paris</em>,<br />Made for the <em className="text-gold-400">World</em>
          </h2>
          <div className="w-14 h-px" style={{ background: 'linear-gradient(to right,var(--gold),transparent)' }}></div>
          <p className="leading-[2] text-sm font-light" style={{ color: 'rgba(42,33,24,0.62)' }}>
            AMOR EXOTIC was forged from a singular obsession — to capture the soul of the world's most extraordinary
            aromas and distill them into pure, wearable poetry. Each scent is a chapter in a story of wanderlust, desire
            and the relentless pursuit of the extraordinary.
          </p>
          <p className="leading-[2] text-sm font-light" style={{ color: 'rgba(42,33,24,0.45)' }}>
            We journey to the rose valleys of Bulgaria, the oud forests of Arabia, and the orchards of Southeast Asia —
            sourcing only ingredients potent enough to leave a lasting impression.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-0" style={{ border: '1px solid rgba(178,168,148,0.32)' }}>
            <div className="text-center py-4 sm:py-5 px-2 sm:px-4" style={{ borderRight: '1px solid rgba(178,168,148,0.28)' }}>
              <p className="font-serif text-3xl sm:text-4xl font-light text-gold-400 counter" data-target="50">0</p>
              <p className="text-[7.5px] sm:text-[8.5px] tracking-widest uppercase mt-1.5" style={{ color: 'rgba(42,33,24,0.38)' }}>Signature Scents</p>
            </div>
            <div className="text-center py-4 sm:py-5 px-2 sm:px-4" style={{ borderRight: '1px solid rgba(178,168,148,0.28)' }}>
              <p className="font-serif text-3xl sm:text-4xl font-light text-gold-400">100%</p>
              <p className="text-[7.5px] sm:text-[8.5px] tracking-widest uppercase mt-1.5" style={{ color: 'rgba(42,33,24,0.38)' }}>Natural Oils</p>
            </div>
            <div className="text-center py-4 sm:py-5 px-2 sm:px-4">
              <p className="font-serif text-3xl sm:text-4xl font-light text-gold-400 counter" data-target="50">0</p>
              <p className="text-[7.5px] sm:text-[8.5px] tracking-widest uppercase mt-1.5" style={{ color: 'rgba(42,33,24,0.38)' }}>Countries</p>
            </div>
          </div>
          <a href="#collection" className="btn-gold inline-flex items-center gap-3 group magnetic">
            <span>Discover Collection</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
