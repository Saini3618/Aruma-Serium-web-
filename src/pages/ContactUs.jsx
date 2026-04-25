import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Clients from '../components/Clients';
import { createWhatsAppLink } from '../data/contactConfig';

export default function ContactUs() {
  useEffect(() => {
    document.title = 'Contact | Amor Exotic';
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-[#1a1610] text-white">

        {/* ULTRA PRO MAX HERO SECTION */}
        <section className="relative h-screen min-h-[700px] flex flex-col justify-between items-center overflow-hidden pt-28 pb-24">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="images/ChatGPT Image Apr 16, 2026, 09_34_50 PM.webp"
              alt="Rich Amber Contact Hero"
              className="w-full h-full object-cover object-center scale-105"
              style={{ animation: 'float 20s ease-in-out infinite alternate', transformOrigin: 'center center' }}
            />
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1610]/95 via-[#1a1610]/70 to-[#1a1610]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1610] via-[#1a1610]/30 to-transparent"></div>
          </div>

          <div className="relative z-10 text-center px-5 max-w-4xl mx-auto reveal-up">
            <div className="flex justify-center items-center gap-6 mb-8">
              <div className="h-px w-16 bg-gold-400"></div>
              <p className="text-[10px] tracking-[0.6em] uppercase text-gold-400 font-bold">Client Relations</p>
              <div className="h-px w-16 bg-gold-400"></div>
            </div>

            <h1 className="font-serif font-light leading-[1.1] text-5xl sm:text-7xl lg:text-8xl">
              Connect With <br />
              <span className="italic gold-shimmer-text">Excellence</span>
            </h1>
          </div>

          <div className="relative z-10 text-center px-5 max-w-4xl mx-auto reveal-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-white/80 text-sm sm:text-lg tracking-widest max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md">
              Bespoke consultations, bulk inquiries, and luxury partnerships. Let us elevate your atmosphere to the pinnacle of olfactory art.
            </p>
          </div>
        </section>

        {/* CLIENTS MARQUEE BLOCK */}
        <Clients />

        {/* GLOBAL REACH - MOVED UP BEFORE PREMIUM PARTNERSHIP */}
        <section className="relative py-24 px-5 sm:px-8 overflow-hidden bg-[#fbf9f4]">
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(200,151,58,0.8) 0px, transparent 40%), radial-gradient(circle at 85% 80%, rgba(200,151,58,0.6) 0px, transparent 40%)' }}></div>
          <div className="max-w-screen-xl mx-auto relative z-10">
            <div className="mb-20 text-center reveal-up">
              <div className="flex items-center justify-center gap-4 mb-5">
                <div className="h-px w-14 bg-[#c8973a]/40"></div>
                <p className="text-[10px] tracking-[0.6em] uppercase text-[#c8973a] font-bold">Global Reach</p>
                <div className="h-px w-14 bg-[#c8973a]/40"></div>
              </div>
              <h3 className="font-serif font-light text-5xl sm:text-6xl text-[#2a2118] mb-6">Amor Exotic Office Locations</h3>
              <p className="text-[#2a2118]/60 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed font-medium">
                Our fragrance services are delivered across multiple locations through a globally connected team.
                This model ensures consistent quality, responsive communication, and seamless support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 reveal-up" style={{ animationDelay: '0.2s' }}>
              {[
                { title: 'Paris, France', line1: 'WeWork Paris Hub', line2: '33 Rue La Fayette', line3: '75056 Paris' },
                { title: 'Dubai, UAE', line1: 'Business Bay', line2: 'Downtown District', line3: 'Dubai' },
                { title: 'New Delhi, India', line1: 'Eros Corporate Tower', line2: 'Nehru Place', line3: '110019' }
              ].map((loc, i) => (
                <article key={i} style={{ animation: `float ${6 + i}s ease-in-out infinite ${i * 0.5}s` }} className="group rounded-[28px] p-10 bg-white border border-[#ede8df] shadow-[0_15px_40px_rgba(42,33,24,0.04)] hover:shadow-[0_30px_70px_rgba(200,151,58,0.2)] hover:border-[#c8973a]/50 transition-all duration-700 overflow-hidden relative transform hover:-translate-y-4 hover:scale-[1.02]">
                  <div className="absolute top-0 right-0 p-6 opacity-[0.02] group-hover:opacity-[0.08] transition-all duration-1000 group-hover:scale-150 animate-[spin_30s_linear_infinite]">
                    <svg className="w-32 h-32 text-[#2a2118]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                  </div>
                  <h4 className="font-serif text-3xl text-[#2a2118] mb-8 relative z-10">{loc.title}</h4>
                  <div className="space-y-3 relative z-10">
                    <p className="text-[13px] tracking-wide leading-relaxed text-[#2a2118]/70 font-medium">{loc.line1}</p>
                    <p className="text-[13px] tracking-wide leading-relaxed text-[#2a2118]/70 font-medium">{loc.line2}</p>
                    <p className="text-[13px] tracking-wide leading-relaxed text-[#2a2118]/70 font-medium">{loc.line3}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PREMIUM PARTNERSHIP / WHATSAPP CONNECT - MOVED TO BOTTOM */}
        <section className="py-24 relative flex items-center justify-center overflow-hidden border-t border-[#ede8df] bg-white">
          {/* Animated Ambient Light Orbs */}
          <div className="absolute -top-1/4 right-0 w-[800px] h-[800px] bg-[#c8973a]/10 rounded-full blur-[120px] animate-[spin_20s_linear_infinite]" style={{ transformOrigin: '40% 60%' }}></div>
          <div className="absolute -bottom-1/4 left-0 w-[800px] h-[800px] bg-[#9e7425]/10 rounded-full blur-[120px] animate-[spin_25s_linear_infinite_reverse]" style={{ transformOrigin: '60% 40%' }}></div>

          {/* Overlay Texture */}
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 512 512\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")' }}></div>

          <div className="max-w-4xl mx-auto px-5 relative z-10 w-full reveal-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative p-12 md:p-20 rounded-[30px] border border-[#ede8df] bg-[#fbf9f4]/80 backdrop-blur-3xl shadow-[0_20px_60px_rgba(42,33,24,0.04)] overflow-hidden group hover:border-[#c8973a]/50 hover:shadow-[0_40px_100px_rgba(200,151,58,0.15)] transition-all duration-1000 transform hover:-translate-y-3 hover:scale-[1.01]">

              <div className="relative z-10 text-center flex flex-col items-center">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-16 bg-[#c8973a]/30"></div>
                  <p className="text-[10px] tracking-[0.6em] uppercase text-[#c8973a] font-bold">Premium Partnership</p>
                  <div className="h-px w-16 bg-[#c8973a]/30"></div>
                </div>

                <h2 className="font-serif font-light text-5xl md:text-6xl lg:text-7xl text-[#2a2118] leading-[1.2] mb-8">
                  Define Your <br />
                  <span className="italic gold-shimmer-text drop-shadow-[0_0_15px_rgba(200,151,58,0.2)]">Signature Atmosphere</span>
                </h2>

                <p className="text-[#2a2118]/60 text-[10px] sm:text-[11px] tracking-[0.4em] uppercase mb-12 font-bold">Bulk Gifting · Retail Supply · Hospitality Contracts</p>

                <a href={createWhatsAppLink('Hello I am interested in bulk orders for Amor Exotic')}
                  target="_blank" rel="noopener noreferrer"
                  className="relative overflow-hidden rounded-full p-[2px] group/btn transition-transform hover:scale-105 duration-500 shadow-[0_15px_30px_rgba(200,151,58,0.15)] mt-2">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#e5cf9d] via-[#c8973a] to-[#e5cf9d] rounded-full opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
                  <div className="relative bg-[#1a1610] hover:bg-transparent px-10 sm:px-14 py-5 rounded-full flex items-center gap-4 transition-colors duration-500">
                    <span className="text-[10px] sm:text-[12px] tracking-[0.3em] uppercase font-bold text-white transition-colors duration-500">Contact Business Team</span>
                    <svg className="w-5 h-5 text-[#c8973a] group-hover/btn:text-white group-hover/btn:translate-x-2 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
