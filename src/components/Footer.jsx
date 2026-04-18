import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="footer-address" className="relative pt-16 pb-6 px-8 overflow-hidden"
      style={{ background: 'rgba(250, 247, 242, 0.95)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', borderTop: '1px solid rgba(178, 168, 148, 0.25)' }}>

      {/* Subtle Animated Background Glow */}
      <div className="absolute inset-x-0 bottom-0 h-[250px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom, rgba(200,151,58,0.06) 0%, transparent 80%)' }}></div>

      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-10 reveal-up">

          {/* Brand Info */}
          <div className="md:col-span-6 space-y-6">
            <div>
              <Link to="/#hero"
                className="font-serif text-5xl tracking-[0.4em] text-gold-400 uppercase font-light block transition-transform duration-700 hover:scale-105 origin-left">
                Amor Exotic
              </Link>
              <p className="text-[10px] tracking-[0.5em] uppercase mt-3 font-medium" style={{ color: 'var(--text-50)' }}>
                Aroma Of Paris
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
          <div className="md:col-span-4 space-y-5">
            <h4 className="text-[9.5px] tracking-[0.4em] uppercase font-semibold mb-6" style={{ color: 'var(--text)' }}>Collection</h4>
            {[
              { label: '🌸 Floral Fresh Aroma', to: '/product/floral-fresh-aroma' },
              { label: '🌿 Lavender Aroma', to: '/product/lavender-aroma' },
              { label: '🌊 Ocean Breeze Aroma', to: '/product/ocean-breeze-aroma' },
              { label: '🍊 Fruity Exotica Aroma', to: '/product/fruity-exotica' },
              { label: '💧 Aqua Aroma', to: '/product/aqua-aroma' },
              { label: '🖤 Black Oudh Aroma', to: '/product/black-oudh-aroma' },
            ].map((item, i) => (
              <Link key={i} to={item.to}
                className="block text-[13px] font-light transition-all duration-300 hover:text-[#c8973a] hover:translate-x-2"
                style={{ color: 'var(--text-70)' }}>{item.label}</Link>
            ))}
          </div>

          {/* Company Links */}
          <div className="md:col-span-2 space-y-5">
            <h4 className="text-[9.5px] tracking-[0.4em] uppercase font-semibold mb-6" style={{ color: 'var(--text)' }}>Company</h4>
            <Link to="/#about" className="block text-[13px] font-light transition-all duration-300 hover:text-[#c8973a] hover:translate-x-2" style={{ color: 'var(--text-70)' }}>Our Story</Link>
            <Link to="/ingredients" className="block text-[13px] font-light transition-all duration-300 hover:text-[#c8973a] hover:translate-x-2" style={{ color: 'var(--text-70)' }}>Ingredients</Link>
            <Link to="/contact" className="block text-[13px] font-light transition-all duration-300 hover:text-[#c8973a] hover:translate-x-2" style={{ color: 'var(--text-70)' }}>Contact Us</Link>
            <Link to="/privacy-policy" className="block text-[13px] font-light transition-all duration-300 hover:text-[#c8973a] hover:translate-x-2" style={{ color: 'var(--text-70)' }}>Privacy Policy</Link>
            <Link to="/disclaimer" className="block text-[13px] font-light transition-all duration-300 hover:text-[#c8973a] hover:translate-x-2" style={{ color: 'var(--text-70)' }}>Disclaimer</Link>
            <Link to="/terms-and-conditions" className="block text-[13px] font-light transition-all duration-300 hover:text-[#c8973a] hover:translate-x-2" style={{ color: 'var(--text-70)' }}>Terms & Conditions</Link>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
          style={{ borderTop: '1px solid rgba(178, 168, 148, 0.25)', animationDelay: '0.2s' }}>
          <p className="text-[10px] tracking-widest uppercase font-medium" style={{ color: 'var(--text-35)' }}>
            © 2020 Amor Exotic · Aroma Of Paris. All rights reserved.
          </p>
          <p className="font-serif italic text-[15px]" style={{ color: 'var(--text-50)' }}>
            Where Fragrance Feels Personal
          </p>
        </div>
      </div>
    </footer>
  );
}
