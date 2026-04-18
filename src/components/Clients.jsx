const brands = [
  { name: 'Atlantis Dubai', src: '/images/atlantis_dubai_mall.png' },
  { name: 'Dubai Mall', src: '/images/dubai_mall.png' },
  { name: 'Mall Of The Emirates', src: '/images/mall_of_emirates.png', accentBadge: 'ocean' },
  { name: 'Suria Mall', src: '/images/suria_mall.png', accentBadge: 'emerald' },
  { name: 'Pavilion Hotel', src: '/images/pavilion_hotal.png' },
  { name: 'Lylo Hotel', src: '/images/lylo_hotel.png' },
  { name: 'New Zealand Air', src: '/images/newziland_air.png' },
  { name: 'Batik Air', src: '/images/batik_air.png', accentBadge: 'pink' },
];

export default function Clients() {
  // Duplicate for seamless loop
  const duplicatedBrands = [...brands, ...brands];

  const brandFrameClass = (brand) => {
    if (brand.name === 'Batik Air') {
      return 'w-48 h-24 rounded-[22px] bg-[#ff4f9a] border border-[#ff2f87]/70 shadow-[0_18px_40px_rgba(236,72,153,0.24)] px-5 py-3 flex items-center justify-center';
    }

    if (brand.name === 'New Zealand Air') {
      return 'w-60 h-30 px-2 py-1 flex items-center justify-center';
    }

    return `relative w-40 h-24 flex items-center justify-center ${desktopBadgeClass(brand.accentBadge)}`;
  };

  const brandImageClass = (brand) => {
    if (brand.name === 'Batik Air') {
      return 'max-w-full max-h-full object-contain relative z-10 scale-[1.08] drop-shadow-[0_8px_14px_rgba(236,72,153,0.14)]';
    }

    if (brand.name === 'New Zealand Air') {
      return 'max-w-full max-h-full object-contain relative z-10 scale-[1.18]';
    }

    return 'max-w-full max-h-full object-contain filter drop-shadow-md relative z-10';
  };

  const desktopBadgeClass = (badge) => {
    if (badge === 'ocean') {
      return 'rounded-xl bg-[linear-gradient(135deg,rgba(15,42,90,0.68),rgba(22,78,160,0.50),rgba(8,145,178,0.34))] border border-[#60a5fa]/45 shadow-[0_12px_30px_rgba(30,64,175,0.24)] backdrop-blur-md px-3';
    }
    if (badge === 'emerald') {
      return 'rounded-xl bg-[linear-gradient(135deg,rgba(6,78,59,0.70),rgba(5,150,105,0.52),rgba(45,212,191,0.34))] border border-[#5eead4]/45 shadow-[0_12px_30px_rgba(6,95,70,0.22)] backdrop-blur-md px-3';
    }
    if (badge === 'pink') {
      return 'rounded-xl bg-[linear-gradient(135deg,rgba(244,114,182,0.72),rgba(251,146,190,0.54),rgba(253,205,211,0.36))] border border-[#f9a8d4]/55 shadow-[0_12px_30px_rgba(236,72,153,0.20)] backdrop-blur-md px-3';
    }
    return '';
  };

  const mobileBadgeClass = (badge) => {
    if (badge === 'ocean') {
      return 'rounded-lg bg-[linear-gradient(135deg,rgba(15,42,90,0.70),rgba(22,78,160,0.52),rgba(8,145,178,0.36))] border border-[#60a5fa]/50 px-2';
    }
    if (badge === 'emerald') {
      return 'rounded-lg bg-[linear-gradient(135deg,rgba(6,78,59,0.72),rgba(5,150,105,0.55),rgba(45,212,191,0.36))] border border-[#5eead4]/50 px-2';
    }
    if (badge === 'pink') {
      return 'rounded-lg bg-[linear-gradient(135deg,rgba(244,114,182,0.74),rgba(251,146,190,0.56),rgba(253,205,211,0.38))] border border-[#f9a8d4]/55 px-2';
    }
    return '';
  };

  return (
    <section id="clients" className="relative bg-[#fbf9f4] py-32 overflow-hidden border-t border-b border-[#ede8df]">
      {/* Ambient Background Auras */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(200,151,58,0.06),transparent_70%)] blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(200,151,58,0.04),transparent_70%)] blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 mb-16 text-center relative z-10">
        <div className="flex items-center justify-center gap-6 mb-6">
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[#c8973a]/40 to-transparent" />
          <p className="text-[11px] tracking-[0.6em] uppercase text-[#c8973a] font-bold">
            Prestigious Partnership
          </p>
          <div className="h-[1px] w-20 bg-gradient-to-l from-transparent via-[#c8973a]/40 to-transparent" />
        </div>
        
        <h2 className="text-5xl md:text-6xl font-light text-[#2a2118] font-serif mb-6 leading-tight">
          Our <span className="relative inline-block">
            <span className="italic relative z-10 bg-gradient-to-br from-[#9e7425] via-[#c8973a] to-[#7a5a1c] bg-clip-text text-transparent">Global Clients</span>
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#c8973a]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </span>
        </h2>
        
        <p className="text-[#2a2118]/60 max-w-2xl mx-auto text-sm tracking-widest uppercase font-medium">
          Collaborating with industry leaders worldwide
        </p>
      </div>

      {/* The Premium "Patti" (Strip) */}
      <div className="relative w-full group">
        {/* Strip Container */}
        <div className="relative bg-white/40 backdrop-blur-2xl border-y border-[#c8973a]/20 py-16 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
          {/* Subtle Shimmer Border Overlay */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c8973a]/40 to-transparent animate-shimmer" />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c8973a]/40 to-transparent animate-shimmer" />

          {/* Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-48 z-20 bg-gradient-to-r from-[#fbf9f4] via-[#fbf9f4]/80 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-48 z-20 bg-gradient-to-l from-[#fbf9f4] via-[#fbf9f4]/80 to-transparent pointer-events-none" />

          <div className="marquee-inner flex w-max flex-nowrap gap-32 items-center animate-marquee-slow">
            {duplicatedBrands.map((brand, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center shrink-0 relative px-4"
                style={{ width: brand.name === 'New Zealand Air' ? 250 : brand.name === 'Batik Air' ? 210 : 180 }}
              >
                {/* Logo Container */}
                <div className={brandFrameClass(brand)}>
                  <img 
                    src={brand.src} 
                    alt={brand.name}
                    className={brandImageClass(brand)} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Styled Grid for Mobile */}
      <div className="md:hidden grid grid-cols-2 gap-6 px-6 mt-16 relative z-10">
        {brands.map((brand, i) => (
          <div key={i} className="flex flex-col items-center p-10 bg-white/60 backdrop-blur-xl border border-[#c8973a]/10 rounded-3xl shadow-sm">
           <div className={`flex items-center justify-center ${brand.name === 'Batik Air' ? 'w-32 h-[72px] rounded-2xl bg-[#ff4f9a] border border-[#ff2f87]/70 px-4 py-2' : brand.name === 'New Zealand Air' ? 'w-40 h-20 px-1 py-1' : `w-24 h-16 ${mobileBadgeClass(brand.accentBadge)}`}`}>
                <img
                  src={brand.src}
                  alt={brand.name}
                  className={`${brand.name === 'Batik Air' ? 'max-w-full max-h-full object-contain scale-[1.08] drop-shadow-[0_6px_12px_rgba(236,72,153,0.14)]' : brand.name === 'New Zealand Air' ? 'max-w-full max-h-full object-contain scale-[1.16]' : 'max-w-full max-h-full object-contain filter drop-shadow-md'}`}
                />
             </div>
             <p className="mt-6 text-[9px] tracking-[0.3em] uppercase font-bold text-[#c8973a]">{brand.name}</p>
          </div>
        ))}
      </div>

    </section>
  );
}
