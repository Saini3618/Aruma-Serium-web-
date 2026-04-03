export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="images/Gemini_Generated_Image_xubt20xubt20xubt (1).webp" alt="Serium Hero" className="w-full h-full object-cover object-center parallax-img" loading="eager" fetchpriority="high" decoding="async" />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(105deg,rgba(22,18,14,0.94) 0%,rgba(22,18,14,0.66) 45%,rgba(22,18,14,0.32) 100%)' }}>
        </div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,#1a1610 0%,transparent 40%)' }}></div>
      </div>

      <div className="abs-orb animate-pulse-glow"
        style={{ top: '30%', right: '18%', width: '480px', height: '480px', background: 'rgba(200,151,58,0.06)' }}></div>
      <div className="abs-orb animate-pulse-glow"
        style={{ bottom: '22%', right: '32%', width: '280px', height: '280px', background: 'rgba(200,151,58,0.04)', animationDelay: '2s' }}></div>

      {/* Rotating ring decoration */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-96 h-96 hidden xl:block">
        <div className="absolute inset-0 rounded-full"
          style={{ background: 'radial-gradient(circle,rgba(200,151,58,0.08) 0%,transparent 70%)', animation: 'pulseGlow 4s ease-in-out infinite' }}>
        </div>
        <div className="absolute inset-0 rounded-full border border-gold-400/20 animate-rotate-slow"></div>
        <div className="absolute inset-6 rounded-full border border-gold-400/10"
          style={{ animation: 'rotateSlow 18s linear infinite reverse' }}></div>
        <div className="absolute inset-12 rounded-full border border-gold-400/22 animate-rotate-slow"
          style={{ animationDuration: '12s' }}></div>
        <div className="absolute inset-0 animate-rotate-slow">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gold-400/55"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1 h-1 rounded-full bg-gold-400/38"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative animate-float">
            <div className="w-52 h-52 rounded-full p-[2px]"
              style={{ background: 'linear-gradient(135deg,rgba(200,151,58,0.80),rgba(120,90,20,0.28),rgba(200,151,58,0.60))' }}>
              <div className="w-full h-full rounded-full overflow-hidden"
                style={{ background: 'linear-gradient(160deg,#2e2820 0%,#3a3228 100%)' }}>
                <img src="images/Gemini_Generated_Image_2bpxxg2bpxxg2bpx.webp" alt="Serium Luxury Bottle"
                  className="w-full h-full object-cover scale-110" loading="lazy" decoding="async" />
              </div>
            </div>
            <div className="absolute inset-0 rounded-full"
              style={{ boxShadow: '0 0 40px rgba(200,151,58,0.24),0 0 80px rgba(200,151,58,0.10),inset 0 0 30px rgba(0,0,0,0.45)' }}>
            </div>
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap backdrop-blur-sm border border-gold-400/28 px-4 py-1.5 rounded-full"
              style={{ background: 'rgba(26,22,16,0.88)' }}>
              <span className="text-gold-400 text-[9px] tracking-[0.35em] uppercase font-medium">Serium · Amor Exotic</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-screen-2xl mx-auto px-8 pt-28 pb-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <div className="h-px w-12 bg-gold-400"></div>
            <p className="text-[10px] tracking-[0.6em] uppercase text-gold-400 font-medium">Amor Exotic · Aroma of Paris</p>
          </div>
          <h1 className="font-serif font-light leading-none opacity-0 animate-fade-up"
            style={{ fontSize: 'clamp(4rem,10vw,8.5rem)', animationDelay: '0.7s', animationFillMode: 'forwards' }}>
            <span className="text-white block">Where</span>
            <span className="gold-shimmer-text block italic">Scent</span>
            <span className="text-white block">Becomes</span>
            <span className="gold-shimmer-text block text-[0.58em] tracking-[0.10em] font-extralight not-italic">Soul</span>
          </h1>
          <p className="font-light text-sm leading-loose mt-8 max-w-md opacity-0 animate-fade-up"
            style={{ color: 'rgba(210,205,195,0.72)', animationDelay: '1.1s', animationFillMode: 'forwards' }}>
            Rare botanicals. Timeless artistry. Every drop of SERIUM is a journey through the world's most extraordinary
            aromas — crafted for those who demand nothing less.
          </p>
          <div className="flex flex-wrap gap-4 mt-10 opacity-0 animate-fade-up"
            style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}>
            <a href="#collection" className="btn-gold group flex items-center gap-3">
              <span>Explore Collection</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#about" className="btn-outline">Our Story</a>
          </div>
          {/* Stats */}
          <div className="flex gap-10 mt-16 opacity-0 animate-fade-up"
            style={{ animationDelay: '1.7s', animationFillMode: 'forwards' }}>
            <div>
              <p className="font-serif text-3xl text-gold-400 font-light counter" data-target="5">0</p>
              <p className="text-[9px] tracking-[0.4em] uppercase mt-1" style={{ color: 'rgba(255,255,255,0.28)' }}>Scents</p>
            </div>
            <div className="pl-10" style={{ borderLeft: '1px solid rgba(255,255,255,0.15)' }}>
              <p className="font-serif text-3xl text-gold-400 font-light counter" data-target="100">0</p>
              <p className="text-[9px] tracking-[0.4em] uppercase mt-1" style={{ color: 'rgba(255,255,255,0.28)' }}>% Natural</p>
            </div>
            <div className="pl-10" style={{ borderLeft: '1px solid rgba(255,255,255,0.15)' }}>
              <p className="font-serif text-3xl text-gold-400 font-light counter" data-target="50000">0</p>
              <p className="text-[9px] tracking-[0.4em] uppercase mt-1" style={{ color: 'rgba(255,255,255,0.28)' }}>Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-hint">
        <div className="scroll-dot"></div>
      </div>
    </section>
  );
}
