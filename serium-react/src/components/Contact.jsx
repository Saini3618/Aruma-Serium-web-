import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-40 relative flex items-center justify-center overflow-hidden min-h-[70vh] bg-[#FDFBF7]">
      {/* Dynamic Glowing Background Orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gold-400/20 rounded-full blur-[120px] mix-blend-multiply animate-pulse-glow"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[100px] mix-blend-multiply animate-float" style={{ animationDuration: '10s' }}></div>
      
      {/* Overlay subtle texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 512 512\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")' }}></div>

      <div className="max-w-5xl mx-auto px-8 relative z-10 w-full reveal-up">
        <div className="relative p-16 md:p-24 rounded-[40px] border border-white/60 shadow-[0_40px_100px_rgba(26,22,16,0.08)] overflow-hidden group">
          {/* Glass effect background */}
          <div className="absolute inset-0 bg-white/40 backdrop-blur-2xl"></div>
          
          {/* Inner border glow */}
          <div className="absolute inset-0 rounded-[40px] border border-white transition-colors duration-1000 group-hover:border-gold-400/40"></div>
          
          <div className="relative z-10 text-center flex flex-col items-center">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
              <p className="text-[11px] tracking-[0.6em] uppercase text-gold-600 font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold-500 to-gold-800">Premium Partnership</p>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
            </div>
            
            <h2 className="font-serif font-light text-5xl md:text-7xl lg:text-8xl text-[#1a1610] leading-[1.1] mb-12 relative">
              Define Your <br />
              <span className="relative inline-block mt-2">
                <span className="absolute -inset-2 bg-gold-400/10 blur-xl rounded-full"></span>
                <span className="relative italic bg-clip-text text-transparent bg-gradient-to-r from-[#B0891D] via-[#D4AF37] to-[#8C6008] drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]">Signature Atmosphere</span>
              </span>
            </h2>
            
            <p className="text-[#1a1610]/50 text-xs tracking-[0.4em] uppercase mb-14 font-light mix-blend-multiply">Bulk Gifting · Retail Supply · Hospitality Contracts</p>
            
            <a href="https://wa.me/8302607949?text=Hello%20I%20am%20interested%20in%20bulk%20orders%20for%20Serium"
              target="_blank" rel="noopener noreferrer" 
              className="relative overflow-hidden rounded-full p-[2px] group/btn transition-transform hover:scale-105 duration-500 shadow-xl shadow-gold-900/10 hover:shadow-gold-900/20">
              <span className="absolute inset-0 bg-gradient-to-r from-gold-400 via-gold-200 to-gold-400 rounded-full opacity-70 group-hover/btn:opacity-100 animate-pulse-glow"></span>
              <div className="relative bg-[#FAF9F6] px-16 py-6 rounded-full flex items-center gap-4 transition-colors group-hover/btn:bg-transparent">
                <span className="text-[12px] tracking-[0.4em] uppercase font-bold text-[#1a1610] transition-colors duration-500">Contact Business Team</span>
                <svg className="w-5 h-5 text-gold-600 group-hover/btn:text-[#1a1610] group-hover/btn:translate-x-2 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

