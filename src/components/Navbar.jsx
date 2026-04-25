import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();
  const isProductPage = pathname.startsWith('/product/');

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
    <nav id="navbar" className={`fixed top-0 left-0 right-0 z-50 ${isProductPage ? 'product-page-nav' : ''}`}>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-4 sm:py-5 flex items-center justify-between gap-3">
        <Link to="/" className="flex flex-col leading-none min-w-0">
          <span className="nav-logo-main font-serif text-[18px] sm:text-2xl font-light tracking-[0.25em] sm:tracking-[0.5em] text-gold-400 uppercase truncate">Amor Exotic</span>
          <span className="nav-logo-sub text-[8px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] text-white/90 uppercase mt-0.5 flex justify-center">Aroma Of Paris</span>
        </Link>
        <div className="hidden lg:flex items-center gap-10">
          <Link to="/#about" onClick={(e) => handleScroll(e, 'about')} className="nav-link magnetic">Our Story</Link>
          <Link to="/#products" onClick={(e) => handleScroll(e, 'products')} className="nav-link magnetic">Products</Link>
          <Link to="/ingredients" className="nav-link magnetic">Ingredients</Link>
          <Link to="/contact" className="nav-link magnetic">Contact</Link>
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
                <Link to="/bulk/oils" className="flex items-center gap-3 px-4 py-3 hover:bg-gold-400/10 text-[10px] tracking-[0.2em] uppercase text-white/70 hover:text-gold-400 transition-all duration-300 group/item border-b border-white/5 last:border-0">
                  <div className="w-1 h-1 rounded-full bg-gold-400/30 group-hover/item:bg-gold-400 transition-colors"></div>
                  <span>Aroma (Oils)</span>
                </Link>
                <Link to="/bulk/candles" className="flex items-center gap-3 px-4 py-3 hover:bg-gold-400/10 text-[10px] tracking-[0.2em] uppercase text-white/70 hover:text-gold-400 transition-all duration-300 group/item">
                  <div className="w-1 h-1 rounded-full bg-gold-400/30 group-hover/item:bg-gold-400 transition-colors"></div>
                  <span>Candles</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Link to="/about"
          className="nav-shop-btn magnetic hidden lg:flex items-center gap-2 border border-gold-400 bg-gold-400 text-white text-[10px] tracking-[0.3em] uppercase px-6 py-3 transition-all duration-300 font-medium group">
          <span>About Us</span>
          <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
        <button id="menu-btn" className="lg:hidden text-gold-400 p-2 -mr-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
