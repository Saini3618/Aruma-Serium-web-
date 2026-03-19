export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-8 overflow-hidden"
      style={{ background: 'radial-gradient(circle at 50% 50%, #fcf9f2 0%, #ebe2ce 100%)' }}>

      {/* Ultra premium light overlay */}
      <div className="absolute inset-0"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.02'/%3E%3C/svg%3E\")", zIndex: 1, pointerEvents: 'none' }}>
      </div>

      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px]"
        style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.8) 0%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }}>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center gap-6 mb-12 reveal-up">
          <div className="h-px w-10" style={{ background: 'rgba(189,157,99,0.4)' }}></div>
          <p className="text-[9.5px] tracking-[0.45em] uppercase font-medium" style={{ color: '#bc9e65' }}>Begin Your Journey</p>
          <div className="h-px w-10" style={{ background: 'rgba(189,157,99,0.4)' }}></div>
        </div>

        <div className="relative inline-block text-left mb-8">
          <h2 className="font-serif font-light leading-[1.3] text-center reveal-up"
            style={{ fontSize: 'clamp(3.5rem,7vw,5.5rem)', color: '#332d26', position: 'relative', zIndex: 3 }}>
            Wear the <em style={{ color: '#bc9e65', fontStyle: 'italic' }}>World's</em><br />Finest Scents
          </h2>
        </div>

        <p className="text-[12px] leading-[1.8] mb-14 max-w-md mx-auto reveal-up font-light"
          style={{ color: 'rgba(51, 45, 38, 0.55)', animationDelay: '0.1s', letterSpacing: '0.02em' }}>
          Join thousands who have discovered the transformative power<br />
          of Amor Exotic. Be the first to know about new launches and<br />
          exclusive offers.
        </p>

        {/* Subscribe Form */}
        <div className="reveal-up mx-auto relative group" style={{ animationDelay: '0.2s', maxWidth: '480px' }}>
          <div
            className="absolute inset-0 bg-white rounded-full opacity-60 blur-md transition-all duration-500 group-hover:opacity-100 group-hover:blur-xl"
            style={{ zIndex: 0 }}></div>

          <div className="relative flex items-center"
            style={{ background: '#ffffff', borderRadius: '50px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.04), 0 5px 15px rgba(0,0,0,0.02)', zIndex: 5, border: '1px solid rgba(255,255,255,0.8)' }}>

            <input id="sub-email" type="email" placeholder="Your email address"
              className="flex-1 bg-transparent border-none outline-none font-light"
              style={{ padding: '24px 34px', color: '#332d26', fontSize: '11px', letterSpacing: '0.15em', fontFamily: "'Montserrat', sans-serif" }} />

            <button id="sub-btn" className="transition-all duration-500 ease-out hover:brightness-110"
              style={{ background: '#be9d5c', color: '#fff', border: 'none', padding: '24px 45px', fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', fontWeight: 500, fontFamily: "'Montserrat', sans-serif", cursor: 'none' }}>
              Subscribe
            </button>
          </div>
        </div>

        <p className="text-[8.5px] tracking-[0.25em] mt-8 reveal-up font-light"
          style={{ color: 'rgba(51, 45, 38, 0.35)', animationDelay: '0.3s', textTransform: 'uppercase' }}>
          No spam. Pure luxury, delivered to your inbox.
        </p>
      </div>
    </section>
  );
}
