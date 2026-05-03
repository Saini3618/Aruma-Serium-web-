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
            <p className="text-white/80 text-sm sm:text-lg tracking-widest max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md mb-10">
              Bespoke consultations, bulk inquiries, and luxury partnerships. Let us elevate your atmosphere to the pinnacle of olfactory art.
            </p>

            {/* Hero CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* WhatsApp Button */}
              <a
                href={createWhatsAppLink('Hello, I would like to connect with Amor Exotic regarding a luxury inquiry.')}
                target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 rounded-full border border-[#c8973a] bg-[#c8973a] hover:bg-transparent text-white text-[11px] tracking-[0.3em] uppercase font-bold transition-all duration-500 hover:shadow-[0_0_40px_rgba(200,151,58,0.5)] hover:scale-105"
                style={{ boxShadow: '0 8px 30px rgba(200,151,58,0.25)' }}
              >
                {/* WhatsApp icon */}
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Chat on WhatsApp</span>
              </a>

              {/* Scroll Down hint */}
              <a
                href="#contact-details"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact-details')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="group flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:border-[#c8973a]/60 hover:bg-[#c8973a]/10 text-white/70 hover:text-white text-[11px] tracking-[0.3em] uppercase font-bold transition-all duration-500"
              >
                <span>Explore Locations</span>
                <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* CLIENTS MARQUEE BLOCK */}
        <Clients />

        {/* GLOBAL REACH - MOVED UP BEFORE PREMIUM PARTNERSHIP */}
        <section id="contact-details" className="relative py-24 px-5 sm:px-8 overflow-hidden bg-[#fbf9f4]">
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

                {/* Social Media Icons */}
                <div className="flex items-center justify-center gap-8 mt-16 pt-12 border-t border-[#c8973a]/20">
                  <p className="text-[11px] tracking-[0.3em] uppercase font-bold text-[#2a2118]/60">Follow Us</p>
                  <a 
                    href="https://www.instagram.com/theamorexotic/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group transition-all duration-300 hover:scale-125"
                    title="Follow us on Instagram"
                  >
                    <svg className="w-6 h-6 text-[#2a2118]/70 group-hover:text-[#c8973a] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
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
                    <svg className="w-6 h-6 text-[#2a2118]/70 group-hover:text-[#c8973a] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
