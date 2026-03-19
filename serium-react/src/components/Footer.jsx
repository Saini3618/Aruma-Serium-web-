export default function Footer() {
  return (
    <footer className="relative pt-16 pb-6 px-8 overflow-hidden"
      style={{ background: 'rgba(250, 247, 242, 0.95)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', borderTop: '1px solid rgba(178, 168, 148, 0.25)' }}>

      {/* Subtle Animated Background Glow */}
      <div className="absolute inset-x-0 bottom-0 h-[250px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom, rgba(200,151,58,0.06) 0%, transparent 80%)' }}></div>

      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-10 reveal-up">

          {/* Brand Info */}
          <div className="md:col-span-5 space-y-6">
            <div>
              <a href="#hero"
                className="font-serif text-5xl tracking-[0.4em] text-gold-400 uppercase font-light block transition-transform duration-700 hover:scale-105 origin-left">
                SERIUM
              </a>
              <p className="text-[9px] tracking-[0.5em] uppercase mt-3 font-medium" style={{ color: 'var(--text-50)' }}>
                Amor Exotic · Aroma of Paris
              </p>
            </div>
            <p className="text-[13px] leading-[1.9] font-light max-w-sm" style={{ color: 'var(--text-70)' }}>
              The pinnacle of aroma artistry. Crafted for those who believe that the finest luxury is the one you wear on your skin.
            </p>
            <div className="flex gap-4 pt-2">
              {['in', 'ig', '𝕏', 'yt'].map((s, i) => (
                <a key={i} href="#"
                  className="w-10 h-10 rounded-full border flex items-center justify-center text-[11px] transition-all duration-500 hover:-translate-y-2 hover:bg-[#c8973a] hover:text-white hover:border-[#c8973a] hover:shadow-[0_10px_20px_rgba(200,151,58,0.3)]"
                  style={{ borderColor: 'rgba(200,151,58,0.3)', color: 'var(--text-70)' }}>{s}</a>
              ))}
            </div>
          </div>

          {/* Collection Links */}
          <div className="md:col-span-3 space-y-5 lg:ml-8">
            <h4 className="text-[9.5px] tracking-[0.4em] uppercase font-semibold mb-6" style={{ color: 'var(--text)' }}>Collection</h4>
            {['🌸 Floral Fresh Aroma', '🌊 Ocean Breeze', '🍊 Fruity Exotica', '💧 Aqua Aroma', '🖤 Black Oudh Aroma'].map((item, i) => (
              <a key={i} href="#collection"
                className="block text-[13px] font-light transition-all duration-300 hover:text-[#c8973a] hover:translate-x-2"
                style={{ color: 'var(--text-70)' }}>{item}</a>
            ))}
          </div>

          {/* Company Links */}
          <div className="md:col-span-4 space-y-5 lg:ml-auto">
            <h4 className="text-[9.5px] tracking-[0.4em] uppercase font-semibold mb-6" style={{ color: 'var(--text)' }}>Company</h4>
            <a href="#about" className="block text-[13px] font-light transition-all duration-300 hover:text-[#c8973a] hover:translate-x-2" style={{ color: 'var(--text-70)' }}>Our Story</a>
            <a href="#ingredients" className="block text-[13px] font-light transition-all duration-300 hover:text-[#c8973a] hover:translate-x-2" style={{ color: 'var(--text-70)' }}>Ingredients</a>
            <a href="#contact" className="block text-[13px] font-light transition-all duration-300 hover:text-[#c8973a] hover:translate-x-2" style={{ color: 'var(--text-70)' }}>Contact Us</a>
            <a href="#" className="block text-[13px] font-light transition-all duration-300 hover:text-[#c8973a] hover:translate-x-2" style={{ color: 'var(--text-70)' }}>Shipping &amp; Returns</a>
            <a href="#" className="block text-[13px] font-light transition-all duration-300 hover:text-[#c8973a] hover:translate-x-2" style={{ color: 'var(--text-70)' }}>Privacy Policy</a>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
          style={{ borderTop: '1px solid rgba(178, 168, 148, 0.25)', animationDelay: '0.2s' }}>
          <p className="text-[10px] tracking-widest uppercase font-medium" style={{ color: 'var(--text-35)' }}>
            © 2026 SERIUM · Amor Exotic. All rights reserved.
          </p>
          <p className="font-serif italic text-[15px]" style={{ color: 'var(--text-50)' }}>
            Where Scent Becomes Soul
          </p>
        </div>
      </div>
    </footer>
  );
}
