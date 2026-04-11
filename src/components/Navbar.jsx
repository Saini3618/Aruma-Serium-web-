import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav id="navbar" className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-screen-2xl mx-auto px-8 py-5 flex items-center justify-between">
        <Link to="/" className="flex flex-col leading-none">
          <span className="nav-logo-main font-serif text-2xl font-light tracking-[0.5em] text-gold-400 uppercase">Amor Exotic</span>
          <span className="nav-logo-sub text-[8px] tracking-[0.4em] text-white/30 uppercase mt-0.5">Amor Of Paris</span>
        </Link>
        <div className="hidden lg:flex items-center gap-10">
          <Link to="/#about" className="nav-link magnetic">Our Story</Link>
          <Link to="/#collection" className="nav-link magnetic">Collection</Link>
          <Link to="/#products" className="nav-link magnetic">Products</Link>
          <Link to="/#ingredients" className="nav-link magnetic">Ingredients</Link>
          <Link to="/#contact" className="nav-link magnetic">Contact</Link>
          <div className="relative group/bulk">
            <div className="nav-link cursor-pointer flex items-center gap-1.5 transition-colors duration-300">
              Bulk Orders
              <svg className="w-2.5 h-2.5 opacity-40 group-hover/bulk:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover/bulk:opacity-100 group-hover/bulk:visible transition-all duration-300 translate-y-2 group-hover/bulk:translate-y-0 z-[60]">
              <div className="w-56 bg-[#1a1610] border border-white/5 backdrop-blur-2xl shadow-2xl p-2 rounded-px">
                <Link to="/bulk/serums" className="flex items-center gap-3 px-4 py-3 hover:bg-gold-400/10 text-[10px] tracking-[0.2em] uppercase text-white/70 hover:text-gold-400 transition-all duration-300 group/item border-b border-white/5 last:border-0">
                  <div className="w-1 h-1 rounded-full bg-gold-400/30 group-hover/item:bg-gold-400 transition-colors"></div>
                  <span>Aroma (Oils)</span>
                </Link>
                <Link to="/bulk/candles" className="flex items-center gap-3 px-4 py-3 hover:bg-gold-400/10 text-[10px] tracking-[0.2em] uppercase text-white/70 hover:text-gold-400 transition-all duration-300 group/item">
                  <div className="w-1 h-1 rounded-full bg-gold-400/30 group-hover/item:bg-gold-400 transition-colors"></div>
                  <span>CANDALS (Candles)</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Link to="/#collection"
          className="nav-shop-btn magnetic hidden lg:flex items-center gap-2 border border-gold-400/60 text-gold-400 text-[10px] tracking-[0.3em] uppercase px-6 py-3 hover:bg-gold-400 hover:text-white transition-all duration-300 font-medium group">
          <span>Shop Now</span>
          <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <button id="menu-btn" className="lg:hidden text-gold-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
