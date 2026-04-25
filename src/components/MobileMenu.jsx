import { Link, useLocation } from 'react-router-dom';

export default function MobileMenu() {
  const { pathname } = useLocation();

  const handleScroll = (e, id) => {
    if (pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', '/#' + id);
        
        // Close mobile menu if clicked
        const menu = document.getElementById('mobile-menu');
        if (menu) menu.classList.add('hidden');
        document.body.style.overflow = '';
      }
    }
  };

  return (
    <div id="mobile-menu" className="fixed inset-0 z-[70] flex-col items-center justify-center gap-8 hidden">
      <button id="menu-close" className="absolute top-6 right-6 text-gold-400 text-3xl leading-none">&times;</button>
      <Link to="/#about" onClick={(e) => handleScroll(e, 'about')} className="mobile-link font-serif text-3xl tracking-widest transition-colors"
        style={{ color: 'rgba(42,33,24,0.65)' }}>Story</Link>
      <Link to="/#products" onClick={(e) => handleScroll(e, 'products')} className="mobile-link font-serif text-3xl tracking-widest transition-colors"
        style={{ color: 'rgba(42,33,24,0.65)' }}>Products</Link>
      <Link to="/ingredients" className="mobile-link font-serif text-3xl tracking-widest transition-colors"
        style={{ color: 'rgba(42,33,24,0.65)' }}>Ingredients</Link>
      <Link to="/contact" className="mobile-link font-serif text-3xl tracking-widest transition-colors"
        style={{ color: 'rgba(42,33,24,0.65)' }}>Contact</Link>
      <div className="flex flex-col items-center gap-4 py-4">
        <span className="text-[10px] tracking-[0.4em] text-gold-400/50 uppercase pb-2">Bulk Orders</span>
        <Link to="/bulk/oils" className="mobile-link font-serif text-2xl tracking-widest transition-colors text-gold-400">Aroma Oils</Link>
        <Link to="/bulk/candles" className="mobile-link font-serif text-2xl tracking-widest transition-colors text-gold-400">Candles</Link>
      </div>
    </div>
  );
}
