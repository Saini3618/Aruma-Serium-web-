import { Link } from 'react-router-dom';

export default function MobileMenu() {
  return (
    <div id="mobile-menu" className="fixed inset-0 z-40 flex-col items-center justify-center gap-8 hidden">
      <button id="menu-close" className="absolute top-6 right-8 text-gold-400 text-3xl leading-none">&times;</button>
      <Link to="/#about" className="mobile-link font-serif text-3xl tracking-widest transition-colors"
        style={{ color: 'rgba(42,33,24,0.65)' }}>Story</Link>
      <Link to="/#collection" className="mobile-link font-serif text-3xl tracking-widest transition-colors"
        style={{ color: 'rgba(42,33,24,0.65)' }}>Collection</Link>
      <Link to="/#products" className="mobile-link font-serif text-3xl tracking-widest transition-colors"
        style={{ color: 'rgba(42,33,24,0.65)' }}>Products</Link>
      <Link to="/#ingredients" className="mobile-link font-serif text-3xl tracking-widest transition-colors"
        style={{ color: 'rgba(42,33,24,0.65)' }}>Ingredients</Link>
      <Link to="/#contact" className="mobile-link font-serif text-3xl tracking-widest transition-colors"
        style={{ color: 'rgba(42,33,24,0.65)' }}>Contact</Link>
      <Link to="/bulk-orders" className="mobile-link font-serif text-3xl tracking-widest transition-colors text-gold-400">Bulk Orders</Link>
    </div>
  );
}
