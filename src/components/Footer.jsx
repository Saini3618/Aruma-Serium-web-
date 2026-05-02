import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const { pathname } = useLocation();

  const handleScroll = (e, id) => {
    if (pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', '/#' + id);
      }
    }
  };

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
              { label: '🖤 Black Oudh Aroma', to: '/product/royal-oud-aroma' },
            ].map((item, i) => (
              <Link key={i} to={item.to}
                className="block text-[13px] font-light transition-all duration-300 hover:text-[#c8973a] hover:translate-x-2"
                style={{ color: 'var(--text-70)' }}>{item.label}</Link>
            ))}
          </div>

          {/* Company Links */}
          <div className="md:col-span-2 space-y-5">
            <h4 className="text-[9.5px] tracking-[0.4em] uppercase font-semibold mb-6" style={{ color: 'var(--text)' }}>Company</h4>
            <Link to="/#about" onClick={(e) => handleScroll(e, 'about')} className="block text-[13px] font-light transition-all duration-300 hover:text-[#c8973a] hover:translate-x-2" style={{ color: 'var(--text-70)' }}>Our Story</Link>
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
          
          {/* Social Media Icons */}
          <div className="flex items-center gap-6">
            <a 
              href="https://www.instagram.com/theamorexotic/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:text-gold-400 hover:scale-110"
              style={{ color: 'var(--text-70)' }}
              title="Follow us on Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110 2.881 1.44 1.44 0 010-2.881z"/>
              </svg>
            </a>
            
            <a 
              href="https://www.facebook.com/profile.php?id=61586168873822" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:text-gold-400 hover:scale-110"
              style={{ color: 'var(--text-70)' }}
              title="Follow us on Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
