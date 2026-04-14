import { useEffect } from 'react';
import Layout from '../components/Layout';

export default function IngredientsDetail() {
  useEffect(() => {
    /* ========== PARALLAX & HERO SCROLL ========== */
    const heroVideo = document.getElementById('ing-video-wrap');
    const heroSection = document.getElementById('ing-hero');
    let currentY = 0, targetY = 0;
    let parallaxRafId = null;

    if (heroVideo && heroSection) {
      const lerp = (start, end, factor) => start + (end - start) * factor;
      const animateParallax = () => {
        targetY = window.scrollY;
        currentY = lerp(currentY, targetY, 0.08);
        if (currentY < window.innerHeight * 1.5) {
          heroVideo.style.transform = `translate3d(0, ${currentY * 0.4}px, 0)`;
          heroVideo.style.opacity = 1 - currentY / (window.innerHeight * 0.8);
        }
        parallaxRafId = requestAnimationFrame(animateParallax);
      };
      parallaxRafId = requestAnimationFrame(animateParallax);
    }

    /* REVEAL UP ANIMATION */
    const reveals = document.querySelectorAll('.ing-reveal');
    const revObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.15 });
    reveals.forEach(el => revObs.observe(el));

    return () => {
      if (parallaxRafId) cancelAnimationFrame(parallaxRafId);
      revObs.disconnect();
    };
  }, []);

  const sourcing = [
    {
      num: "01",
      region: "European Elegance",
      location: "Grasse, France",
      ingredient: "Lavender & Rose",
      desc: "Hand-picked from the blooming fields of southern France to ensure the purest, most aromatic extraction. Known as the absolute perfume capital of the world, Grasse provides our delicate floral core.",
      align: "left",
      img: "/images/grasse_lavender.png"
    },
    {
      num: "02",
      region: "American Grandeur",
      location: "Oregon, USA",
      ingredient: "Atlas Cedarwood",
      desc: "Sourced from the deep, untouched forests of the USA. Our Cedarwood offers a robust, earthy foundation that anchors our luxury fragrances with unparalleled longevity.",
      align: "right",
      img: "/images/oregon_cedarwood.png"
    },
    {
      num: "03",
      region: "Indian Heritage",
      location: "Mysore, India",
      ingredient: "Mysore Sandalwood",
      desc: "Revered for centuries, genuine Mysore Sandalwood delivers a creamy, woody depth that harmonizes our entire collection perfectly. A rare, spiritual ingredient.",
      align: "left",
      img: "/images/mysore_sandalwood.png"
    },
    {
      num: "04",
      region: "Middle-Eastern Luxury",
      location: "Dubai, UAE",
      ingredient: "Black Oudh",
      desc: "One of the most expensive and rare ingredients globally. It lends a dark, mesmerizing, and incredibly long-lasting signature scent that commands the room.",
      align: "right",
      img: "/images/11111.webp"
    }
  ];

  return (
    <Layout>
      <style>{`
        .ing-reveal {
          opacity: 0;
          transform: translateY(60px);
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .ing-reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
        .text-outline-light {
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.15);
        }
        /* Custom Video Mask for visual flair */
        .video-mask {
          mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
          -webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
        }
        .rotate-text-anim {
          animation: spinText 15s linear infinite;
        }
        @keyframes spinText {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes scrolltext {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scrolltext {
          width: fit-content;
          animation: scrolltext 30s linear infinite;
        }
      `}</style>

      {/* 
        HERO SECTION: DARK THEME 
      */}
      <section id="ing-hero" className="relative w-full min-h-[110vh] overflow-hidden flex flex-col items-center justify-center bg-[#1a1610] pt-24 pb-12">
        
        {/* Floating background elements */}
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-gold-400/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[100px]"></div>

        {/* Video Background Container */}
        <div id="ing-video-wrap" className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
           {/* Dark Gradient Overlay for optimal text readability */}
           <div className="absolute inset-0 bg-[#1a1610]/70 z-10"></div>
           <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#1a1610] z-10"></div>
           
           <video 
              autoPlay loop muted playsInline
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover opacity-60"
            >
              <source src="/images/Fragrance_Oil_Manufacturing_Commercial.mp4" type="video/mp4" />
           </video>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 lg:px-12 flex flex-col items-center">
          
          <div className="ing-reveal text-center">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold-400 font-bold mb-8">
              The Essence of AMOR EXOTIC
            </p>
            
            <h1 className="font-serif text-7xl md:text-9xl lg:text-[11rem] leading-[0.85] text-white font-light tracking-tighter mb-10">
              <span className="block mb-4">PURE</span>
              <span className="block italic text-gold-600">ELEMENTS</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-white/60 text-sm md:text-base leading-loose tracking-widest uppercase mt-8">
              We travel the world to wild-harvest the most absolute and potent ingredients. Our extraction process honors ancient traditions.
            </p>
          </div>

          {/* Decorative scroll indicator */}
          <div className="mt-20 ing-reveal" style={{ transitionDelay: '0.4s' }}>
            <div className="w-10 h-16 rounded-full border border-white/20 flex justify-center p-2 relative">
              <div className="w-1 h-3 bg-gold-400 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>

      </section>

      {/* INFINITE MARQUEE PREMIUM STRIP */}
      <div className="w-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 py-3 md:py-4 overflow-hidden relative z-20 border-y border-[#1a1610]/50 shadow-[0_10px_30px_rgba(212,168,66,0.1)]">
        <div className="animate-scrolltext flex whitespace-nowrap items-center hover:[animation-play-state:paused]">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-10 md:gap-16 px-5 md:px-8">
              <span className="text-[#1a1610] font-bold text-[10px] md:text-[11px] tracking-[0.4em] uppercase drop-shadow-sm">100% Pure & Absolute</span>
              <span className="text-[#1a1610]/40 text-[10px]">❖</span>
              <span className="text-[#1a1610] font-bold text-[10px] md:text-[11px] tracking-[0.4em] uppercase drop-shadow-sm">Ethically Wild-Harvested</span>
              <span className="text-[#1a1610]/40 text-[10px]">❖</span>
              <span className="text-[#1a1610] font-bold text-[10px] md:text-[11px] tracking-[0.4em] uppercase drop-shadow-sm">Luxury Crafted</span>
              <span className="text-[#1a1610]/40 text-[10px]">❖</span>
              <span className="text-[#1a1610] font-bold text-[10px] md:text-[11px] tracking-[0.4em] uppercase drop-shadow-sm">Global Expedition</span>
              <span className="text-[#1a1610]/40 text-[10px]">❖</span>
            </div>
          ))}
        </div>
      </div>

      {/* SOURCING JOURNEY - LIGHT EDITORIAL MAGAZINE LAYOUT */}
      <section className="py-24 md:py-40 bg-[#FAF9F6] relative overflow-hidden">
        
        {/* Subtle background monogram */}
        <div className="absolute top-0 right-0 p-24 opacity-[0.02] pointer-events-none select-none">
           <span className="font-serif text-[40rem] leading-none text-[#1a1610]">A</span>
        </div>

        <div className="relative z-10 max-w-[90rem] mx-auto px-6 lg:px-12">
          
          {/* Section Header */}
          <div className="max-w-4xl mx-auto text-center mb-32 lg:mb-40 ing-reveal">
            <span className="text-gold-600 text-[9px] md:text-[10px] tracking-[0.5em] uppercase font-bold mb-6 block drop-shadow-sm">Our Heritage</span>
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1a1610] font-light">
              A Global <span className="italic text-gold-500">Expedition</span>
            </h3>
            <div className="mt-8 h-[1px] w-32 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto opacity-50"></div>
          </div>

          <div className="flex flex-col w-full">
            {sourcing.map((item, i) => (
              <div key={i}>
                <div 
                  className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24 group ing-reveal py-12 md:py-24`}
                >
                  {/* Image Showcase */}
                  <div className="w-full lg:w-[55%] relative">
                     {/* Main Image Base - Landscape/Widescreen Aspect Ratio */}
                     <div className="aspect-[16/9] lg:aspect-[3/2] overflow-hidden rounded-lg relative shadow-[0_30px_60px_rgba(26,22,16,0.08)] bg-white border border-[#1a1610]/5 p-2">
                       <div className="relative w-full h-full overflow-hidden rounded-md">
                         <img 
                           src={item.img} 
                           alt={item.location} 
                           className="w-full h-full object-cover transition duration-[15s] ease-out group-hover:scale-110" 
                         />
                         {/* Light Overlay to blend perfectly with bright theme */}
                         <div className="absolute inset-0 bg-[#FAF9F6]/5 mix-blend-overlay pointer-events-none"></div>
                       </div>
                     </div>
                  </div>

                  {/* Typography & Text Content */}
                  <div className="w-full lg:w-[45%] flex flex-col justify-center px-4 md:px-8 lg:px-16 relative z-10 pt-12 lg:pt-0">
                     <div className="flex items-center gap-6 mb-6">
                       <span className="w-12 h-px bg-gold-400/60"></span>
                       <span className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-[#1a1610]/50 font-bold">{item.location}</span>
                     </div>

                     <h4 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1610] mb-6 leading-tight tracking-wide group-hover:text-gold-600 transition-colors duration-700">
                       {item.ingredient}
                     </h4>

                     <p className="text-[#1a1610]/70 text-sm md:text-[15px] leading-loose font-light max-w-lg mb-10 group-hover:text-[#1a1610]/90 transition-colors duration-500">
                       {item.desc}
                     </p>

                     <div className="inline-flex items-center gap-4 px-8 py-4 bg-white border border-[#1a1610]/10 rounded-full hover:bg-[#1a1610] hover:text-white transition-all duration-500 shadow-sm cursor-default group/btn w-fit">
                        <span className="w-2 h-2 rounded-full bg-gold-400 group-hover/btn:bg-white group-hover/btn:animate-pulse transition-colors"></span>
                        <span className="text-[10px] tracking-[0.3em] font-bold uppercase transition-colors">{item.region}</span>
                     </div>
                  </div>
                </div>

                {/* Premium Divider - Shows between sections but not after the last one */}
                {i !== sourcing.length - 1 && (
                  <div className="flex items-center justify-center w-full my-4 lg:my-8 opacity-60 ing-reveal">
                    <div className="h-px w-1/4 max-w-xs bg-gradient-to-r from-transparent to-gold-400/60"></div>
                    <div className="mx-6 w-2.5 h-2.5 rotate-45 border border-gold-400/60 flex items-center justify-center">
                       <div className="w-1 h-1 bg-gold-400"></div>
                    </div>
                    <div className="h-px w-1/4 max-w-xs bg-gradient-to-l from-transparent to-gold-400/60"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* FINAL CTA - ELEGANT BLOCK */}
      <section className="py-40 bg-[#1a1610] relative overflow-hidden border-t border-white/5">
         <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center text-center ing-reveal">
            <span className="px-6 py-2 border border-gold-400 text-gold-600 text-[9px] tracking-[0.4em] uppercase font-bold rounded-full mb-10 bg-gold-400/5">
              The Collection
            </span>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light mb-10 leading-tight">
              Experience the <br/>
              <span className="italic text-gold-500 relative inline-block group">
                Difference
                <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
              </span>
            </h2>
            <p className="text-white/50 text-sm tracking-widest uppercase max-w-xl mx-auto leading-loose mb-14">
              Step into a world where every scent tells a story of distant lands and uncompromising quality.
            </p>
            <a href="/#products" className="relative group/btn overflow-hidden rounded-full shadow-2xl">
               <div className="absolute inset-0 bg-gold-600 group-hover/btn:bg-white transition-colors duration-500"></div>
               <div className="relative px-12 py-5 flex items-center gap-4">
                 <span className="text-black text-[11px] tracking-[0.4em] uppercase font-bold group-hover/btn:text-black transition-colors duration-500">Discover AMOR EXOTIC</span>
                 <svg className="w-4 h-4 text-black group-hover/btn:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                 </svg>
               </div>
            </a>
         </div>
      </section>

    </Layout>
  );
}
