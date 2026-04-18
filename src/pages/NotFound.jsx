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
          </div>
        </div>
      </section>
    </Layout>
  );
}