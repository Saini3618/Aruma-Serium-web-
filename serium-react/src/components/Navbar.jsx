import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav id="navbar" className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-screen-2xl mx-auto px-8 py-5 flex items-center justify-between">
        <a href="#hero" className="flex flex-col leading-none">
          <span className="nav-logo-main font-serif text-2xl font-light tracking-[0.5em] text-gold-400 uppercase">SERIUM</span>
          <span className="nav-logo-sub text-[8px] tracking-[0.4em] text-white/30 uppercase mt-0.5">Amor Exotic · Paris</span>
        </a>
        <div className="hidden lg:flex items-center gap-10">
          <a href="#about" className="nav-link magnetic">Our Story</a>
          <a href="#collection" className="nav-link magnetic">Collection</a>
          <a href="#products" className="nav-link magnetic">Products</a>
          <a href="#ingredients" className="nav-link magnetic">Ingredients</a>
          <a href="#contact" className="nav-link magnetic">Contact</a>
          <Link to="/bulk-orders" className="nav-link magnetic">Bulk Orders</Link>
        </div>
        <a href="#collection"
          className="nav-shop-btn magnetic hidden lg:flex items-center gap-2 border border-gold-400/60 text-gold-400 text-[10px] tracking-[0.3em] uppercase px-6 py-3 hover:bg-gold-400 hover:text-white transition-all duration-300 font-medium group">
          <span>Shop Now</span>
          <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
        <button id="menu-btn" className="lg:hidden text-gold-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
