import { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  useEffect(() => {
    /* ========== PARALLAX & HERO SCROLL ========== */
    const heroBg = document.getElementById('about-hero-bg');
    let currentY = 0, targetY = 0;
    let parallaxRafId = null;

    if (heroBg) {
      const lerp = (start, end, factor) => start + (end - start) * factor;
      const animateParallax = () => {
        targetY = window.scrollY;
        currentY = lerp(currentY, targetY, 0.08);
        if (currentY < window.innerHeight * 1.5) {
          heroBg.style.transform = `translate3d(0, ${currentY * 0.4}px, 0)`;
          heroBg.style.opacity = 1 - currentY / (window.innerHeight * 0.9);
        }
        parallaxRafId = requestAnimationFrame(animateParallax);
      };
      parallaxRafId = requestAnimationFrame(animateParallax);
    }

    /* REVEAL UP ANIMATION */
    const reveals = document.querySelectorAll('.about-reveal');
    const revObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.05 });
    reveals.forEach(el => revObs.observe(el));

    return () => {
      if (parallaxRafId) cancelAnimationFrame(parallaxRafId);
      revObs.disconnect();
    };
  }, []);

  return (
    <Layout>
      <style>{`
        .about-reveal {
          opacity: 0;
          transform: translateY(60px);
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .about-reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
        .clip-diagonal {
          clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
        }
        .text-outline-gold {
          color: transparent;
          -webkit-text-stroke: 1px rgba(212,168,66,0.3);
        }
        @keyframes scrolltext {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scrolltext {
          animation: scrolltext 40s linear infinite;
        }
      `}</style>

      {/* HERO SECTION - DARK LUXURY */}
      <section className="relative w-full min-h-[110vh] flex flex-col items-center justify-center bg-[#1a1610] overflow-hidden">
        {/* Parallax Video Background */}
        <div id="about-hero-bg" className="absolute inset-0 z-0 bg-[#0a0806]">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover scale-105 opacity-80"
          >
            <source src="/images/Luxury_Fragrance_Factory_Video_Generation.mp4" type="video/mp4" />
          </video>
          {/* Gradients for readability */}
          <div className="absolute inset-0 bg-[#0a0806]/60 backdrop-blur-[1px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1610]/80 via-transparent to-[#1a1610]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 lg:px-12 text-center pt-20">
          <div className="about-reveal">
            <span className="inline-flex items-center gap-4 text-gold-400 text-[10px] md:text-[11px] tracking-[0.4em] uppercase font-bold mb-10">
              <div className="w-12 h-px bg-gold-400/50"></div>
              Aroma Oils Of Paris
              <div className="w-12 h-px bg-gold-400/50"></div>
            </span>
            
            <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] text-white font-light tracking-tighter mb-8">
              <span className="block mb-4">OUR</span>
              <span className="block italic text-gold-500">STORY</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-white/70 text-sm md:text-base leading-loose tracking-[0.2em] uppercase mt-12 font-medium">
              Born from a relentless pursuit of the absolute, Amor Exotic defines the pinnacle of luxury aroma oils. A legacy crafted in the heart of Paris.
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-24 about-reveal" style={{ transitionDelay: '0.4s' }}>
            <div className="w-px h-24 bg-gradient-to-b from-gold-400 via-gold-400/40 to-transparent mx-auto relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* INFINITE MARQUEE PREMIUM STRIP */}
      <div className="w-full bg-[#1a1610] py-3 md:py-4 overflow-hidden relative z-20 border-y border-gold-400/30 shadow-[0_0_30px_rgba(26,22,16,0.8)]">
        {/* Fading Edges for Premium Look */}
        <div className="absolute top-0 left-0 w-20 md:w-64 h-full bg-gradient-to-r from-[#1a1610] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-20 md:w-64 h-full bg-gradient-to-l from-[#1a1610] to-transparent z-10 pointer-events-none"></div>

        <div className="animate-scrolltext flex whitespace-nowrap items-center w-max text-gold-400/80 font-serif italic text-lg md:text-2xl tracking-widest hover:[animation-play-state:paused] cursor-default transition-all duration-300">
          {/* We repeat the array twice to ensure seamless infinite scroll */}
          {[...Array(12)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 md:gap-12 px-3 md:px-6">
              <span className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-500">Ethical Sourcing</span>
              <span className="text-white/20 text-sm md:text-lg animate-pulse">✦</span>
              <span className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-500">Master Aroma Artisans</span>
              <span className="text-white/20 text-sm md:text-lg animate-pulse">✦</span>
              <span className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-500">Artisanal Craftsmanship</span>
              <span className="text-white/20 text-sm md:text-lg animate-pulse">✦</span>
              <span className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-500">Parisian Heritage</span>
              <span className="text-white/20 text-sm md:text-lg animate-pulse">✦</span>
              <span className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-500">Liquid Opulence</span>
              <span className="text-white/20 text-sm md:text-lg animate-pulse">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* THE MANIFESTO - LIGHT LUXURY */}
      <section className="py-32 md:py-48 bg-[#FAF9F6] relative overflow-hidden">
        {/* Subtle Background Pattern or Text */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold-400/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center about-reveal">
           <span className="text-gold-500 text-[10px] tracking-[0.5em] uppercase font-bold mb-8 block">Our Heritage</span>

           <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1a1610] mb-12 leading-[1.1] font-light">
             The Essence of <br/>
             <span className="italic text-gold-600">Amor Exotic</span>
           </h2>

           <div className="relative inline-block mt-8">
             <span className="absolute -top-12 -left-12 font-serif text-7xl text-gold-400/20 select-none">"</span>
             <p className="text-[#1a1610]/70 text-[16px] md:text-xl leading-[2.2] font-light max-w-3xl mx-auto tracking-wide relative z-10">
               At Amor Exotic, we are a masterfully curated company of true artisans and visionary aroma experts based out of Paris. Since our inception, we have been crafting extraordinary aroma oils that speak the language of absolute luxury and refined elegance. By ethically sourcing the world's finest raw ingredients and blending them with masterful precision, our company stands as a beacon of unmatched quality and sophistication.
             </p>
             <span className="absolute -bottom-16 -right-12 font-serif text-7xl text-gold-400/20 select-none">"</span>
           </div>

           <div className="mt-20 h-px w-32 bg-gradient-to-r from-transparent via-gold-400/40 to-transparent mx-auto"></div>
        </div>
      </section>

      {/* FACTORY HIGHLIGHT - CINEMATIC SPLIT DESIGN */}
      <section className="bg-[#110e0a] relative overflow-hidden border-t border-white/5">
        <div className="flex flex-col lg:flex-row min-h-screen">
          
          {/* Left Text Block */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-16 py-24 lg:py-40 relative z-10">
            <div className="about-reveal">
               <span className="text-gold-500 text-[10px] tracking-[0.5em] uppercase font-bold mb-8 block">The Laboratory</span>
               <h3 className="font-serif text-5xl md:text-7xl text-white mb-10 leading-[1.1]">
                 Where Magic <br/>
                 <span className="italic text-white/50 text-outline-gold">is Born</span>
               </h3>
               <p className="text-white/60 text-[15px] md:text-[17px] leading-[2.2] font-light max-w-lg mb-12">
                 Deep within our state-of-the-art facilities, ancient alchemy meets modern science. This is where rare raw materials are transformed into liquid emotion. Our artisans oversee every step of the maceration, ensuring each drop reflects our signature depth and longevity.
               </p>

               {/* Stats / Features */}
               <div className="grid grid-cols-2 gap-8 md:gap-12 mt-16 pt-12 border-t border-white/10">
                 <div>
                   <h4 className="font-serif text-4xl text-gold-400 mb-2">100%</h4>
                   <span className="text-[10px] tracking-[0.2em] uppercase text-white/50 font-bold">Pure Extractions</span>
                 </div>
                 <div>
                   <h4 className="font-serif text-4xl text-gold-400 mb-2">Zero</h4>
                   <span className="text-[10px] tracking-[0.2em] uppercase text-white/50 font-bold">Compromises</span>
                 </div>
               </div>
            </div>
          </div>

          {/* Right Image Block - The specific factory image */}
          <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-screen group overflow-hidden">
             <div className="absolute inset-0 w-full h-full">
               <img 
                 src="/images/Aroma fectory.webp" 
                 alt="Amor Exotic Factory" 
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] ease-out group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#110e0a] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#110e0a] lg:via-transparent"></div>
               {/* Amber warmth overlay */}
               <div className="absolute inset-0 bg-gold-600/10 mix-blend-color pointer-events-none"></div>
             </div>
           </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION - LIGHT PREMIUM */}
      <section className="py-40 bg-[#f4f0e6] relative overflow-hidden text-center">
         <div className="max-w-3xl mx-auto px-6 relative z-10 about-reveal">
            <h2 className="font-serif text-5xl md:text-7xl text-[#1a1610] mb-8 leading-tight font-light">
              Begin Your <br/>
              <span className="italic text-gold-600">Journey</span>
            </h2>
            <p className="text-[#1a1610]/60 text-[13px] tracking-[0.3em] uppercase font-bold mb-16">
              Experience the unmatched luxury of Amor Exotic
            </p>
            <Link to="/#products" className="inline-flex items-center gap-4 px-12 py-5 bg-[#1a1610] text-gold-400 rounded-full hover:bg-gold-500 hover:text-white transition-colors duration-500 shadow-[0_20px_40px_rgba(26,22,16,0.1)] group">
               <span className="text-[11px] tracking-[0.4em] font-bold uppercase transition-colors">Explore Collection</span>
               <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
               </svg>
            </Link>
         </div>
         {/* Decorative abstract shapes */}
         <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/50 blur-3xl rounded-full pointer-events-none"></div>
         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gold-400/10 blur-3xl rounded-full pointer-events-none"></div>
      </section>

    </Layout>
  );
}
