import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function NotFound() {
  const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'Collection', to: '/#collection' },
    { label: 'Ingredients', to: '/ingredients' },
    { label: 'About', to: '/about' },
  ];

  const popularProducts = [
    { name: 'Lavender Aroma', to: '/product/lavender-aroma' },
    { name: 'Black Oudh Aroma', to: '/product/black-oudh-aroma' },
    { name: 'Ocean Breeze Aroma', to: '/product/ocean-breeze-aroma' },
  ];

  useEffect(() => {
    document.title = '404 | Page Not Found';
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className="relative min-h-screen bg-[#FBF9F4] overflow-hidden pt-28 md:pt-36 pb-20">
        <div
          className="abs-orb"
          style={{
            top: '8%',
            right: '6%',
            width: '520px',
            height: '520px',
            background: 'rgba(212,168,66,0.10)',
          }}
        ></div>
        <div
          className="abs-orb"
          style={{
            bottom: '8%',
            left: '4%',
            width: '460px',
            height: '460px',
            background: 'rgba(160,140,110,0.10)',
          }}
        ></div>

        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <div className="reveal-up bg-white/50 border border-white/70 backdrop-blur-2xl rounded-[36px] shadow-[0_36px_90px_rgba(26,22,16,0.08)] p-8 md:p-14">
            <div className="text-center">
            <p className="text-[11px] tracking-[0.5em] uppercase text-gold-600 font-bold mb-6">Error 404</p>
            <h1 className="font-serif text-5xl md:text-7xl leading-tight text-[#1a1610] mb-6">
              This Fragrance Trail
              <br />
              Ends Here
            </h1>
            <p className="max-w-2xl mx-auto text-[#1a1610]/60 text-sm md:text-base leading-relaxed mb-12">
              The page you tried to open does not exist or may have moved. Let us guide you back to the collection.
            </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/" className="btn-gold px-10 py-4">
                Back To Home
              </Link>
              <Link
                to="/#collection"
                className="px-10 py-4 rounded-full border border-[#1a1610]/20 text-[11px] tracking-[0.28em] uppercase text-[#1a1610]/70 hover:text-gold-600 hover:border-gold-400/40 transition-colors"
              >
                View Collection
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="rounded-[24px] border border-black/10 bg-white/60 p-7">
                <p className="text-[10px] uppercase tracking-[0.4em] text-[#1a1610]/45 mb-4">Quick Links</p>
                <div className="grid grid-cols-2 gap-3">
                  {quickLinks.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      className="rounded-full border border-[#1a1610]/15 px-5 py-3 text-[10px] tracking-[0.25em] uppercase text-[#1a1610]/70 hover:text-gold-600 hover:border-gold-400/40 transition-colors text-center"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-black/10 bg-white/60 p-7">
                <p className="text-[10px] uppercase tracking-[0.4em] text-[#1a1610]/45 mb-4">Popular Products</p>
                <div className="space-y-3">
                  {popularProducts.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="group flex items-center justify-between rounded-2xl border border-[#1a1610]/12 px-4 py-3 hover:border-gold-400/40 transition-colors"
                    >
                      <span className="text-sm text-[#1a1610]/80 group-hover:text-gold-700 transition-colors">{item.name}</span>
                      <span className="text-[10px] tracking-[0.28em] uppercase text-[#1a1610]/35 group-hover:text-gold-600 transition-colors">Open</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="mt-12 pt-8 border-t border-black/10 flex items-center justify-center gap-8">
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#1a1610]/45 font-bold">Stay Connected</p>
              <a 
                href="https://www.instagram.com/theamorexotic/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group transition-all duration-300 hover:scale-125"
                title="Follow us on Instagram"
              >
                <svg className="w-5 h-5 text-[#1a1610]/60 group-hover:text-gold-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110 2.881 1.44 1.44 0 010-2.881z"/>
                </svg>
              </a>
              
              <a 
                href="https://www.facebook.com/profile.php?id=61586168873822" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group transition-all duration-300 hover:scale-125"
                title="Follow us on Facebook"
              >
                <svg className="w-5 h-5 text-[#1a1610]/60 group-hover:text-gold-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}