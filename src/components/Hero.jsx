import { heroContent } from '../data/heroContent';

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="images/Gemini_Generated_Image_xubt20xubt20xubt (1).webp" alt="Amor Exotic Hero" className="w-full h-full object-cover object-center parallax-img" loading="eager" fetchpriority="high" decoding="async" />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(105deg,rgba(22,18,14,0.82) 0%,rgba(22,18,14,0.55) 45%,rgba(22,18,14,0.20) 100%)' }}>
        </div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,rgba(26,22,16,0.85) 0%,transparent 50%)' }}></div>
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
                <img src="images/Gemini_Generated_Image_2bpxxg2bpxxg2bpx.webp" alt="Amor Exotic Luxury Bottle"
                  className="w-full h-full object-cover scale-110" loading="lazy" decoding="async" />
              </div>
            </div>
            <div className="absolute inset-0 rounded-full"
              style={{ boxShadow: '0 0 40px rgba(200,151,58,0.24),0 0 80px rgba(200,151,58,0.10),inset 0 0 30px rgba(0,0,0,0.45)' }}>
            </div>
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap backdrop-blur-sm border border-gold-400/28 px-4 py-1.5 rounded-full"
              style={{ background: 'rgba(26,22,16,0.88)' }}>
              <span className="text-gold-400 text-[9px] tracking-[0.35em] uppercase font-medium">{heroContent.topBadge}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-screen-2xl mx-auto px-5 sm:px-8 pt-28 pb-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <div className="h-px w-12 bg-gold-400"></div>
            <p className="text-[10px] tracking-[0.6em] uppercase text-gold-400 font-medium">{heroContent.eyebrow}</p>
          </div>
          <h1 className="font-serif font-light leading-none opacity-0 animate-fade-up"
            style={{ fontSize: 'clamp(2.6rem,6vw,5.5rem)', animationDelay: '0.7s', animationFillMode: 'forwards' }}>
            <span className="text-white block">{heroContent.heading.line1}</span>
            <span className="gold-shimmer-text block italic">{heroContent.heading.line2}</span>
            <span className="text-white block text-[0.62em] tracking-[0.08em] font-extralight">{heroContent.heading.line3}</span>
          </h1>
          <p className="font-light text-sm leading-loose mt-8 max-w-md opacity-0 animate-fade-up"
            style={{ color: 'rgba(235,230,220,0.95)', animationDelay: '1.1s', animationFillMode: 'forwards' }}>
            {heroContent.description}
          </p>
          <div className="flex flex-wrap gap-3 mt-8 sm:mt-10 opacity-0 animate-fade-up"
            style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}>
            <a href="#collection" className="btn-gold group flex items-center gap-3">
              <span>{heroContent.cta.primary}</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#about" className="btn-outline">{heroContent.cta.secondary}</a>
          </div>
          {/* Stats */}
          <div className="flex flex-wrap gap-6 sm:gap-10 mt-10 sm:mt-16 opacity-0 animate-fade-up"
            style={{ animationDelay: '1.7s', animationFillMode: 'forwards' }}>
            {heroContent.stats.map((stat, index) => (
              <div
                key={stat.label}
                className={index === 0 ? '' : 'pl-5 sm:pl-10'}
                style={index === 0 ? undefined : { borderLeft: '1px solid rgba(255,255,255,0.15)' }}
              >
                <p className="font-serif text-2xl sm:text-3xl text-gold-400 font-light counter" data-target={stat.value}>0</p>
                <p className="text-[8px] sm:text-[9px] tracking-[0.4em] uppercase mt-1" style={{ color: 'rgba(255,255,255,0.28)' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-hint">
        <div className="scroll-dot"></div>
      </div>
    </section>
  );
}
