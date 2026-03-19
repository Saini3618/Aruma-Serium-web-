export default function MobileMenu() {
  return (
    <div id="mobile-menu" className="fixed inset-0 z-40 flex-col items-center justify-center gap-8 hidden">
      <button id="menu-close" className="absolute top-6 right-8 text-gold-400 text-3xl leading-none">&times;</button>
      <a href="#about" className="mobile-link font-serif text-3xl tracking-widest transition-colors"
        style={{ color: 'rgba(42,33,24,0.65)' }}>Story</a>
      <a href="#collection" className="mobile-link font-serif text-3xl tracking-widest transition-colors"
        style={{ color: 'rgba(42,33,24,0.65)' }}>Collection</a>
      <a href="#products" className="mobile-link font-serif text-3xl tracking-widest transition-colors"
        style={{ color: 'rgba(42,33,24,0.65)' }}>Products</a>
      <a href="#ingredients" className="mobile-link font-serif text-3xl tracking-widest transition-colors"
        style={{ color: 'rgba(42,33,24,0.65)' }}>Ingredients</a>
      <a href="#contact" className="mobile-link font-serif text-3xl tracking-widest transition-colors"
        style={{ color: 'rgba(42,33,24,0.65)' }}>Contact</a>
    </div>
  );
}
