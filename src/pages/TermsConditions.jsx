import React, { useEffect } from 'react';
import Layout from '../components/Layout';

export default function TermsConditions() {
  useEffect(() => {
    document.title = 'Terms & Conditions | Amor Exotic';
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="bg-[#fbf9f4] text-[#2a2118] min-h-screen">
        
        {/* Elegant Dark Header */}
        <div className="bg-[#1a1610] text-[#fbf9f4] py-32 sm:py-48 relative overflow-hidden">
          
          {/* Custom Amor Oil Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="images/terms_hero_bg.png" 
              alt="Terms and Conditions Premium Background" 
              className="w-full h-full object-cover object-center scale-105 opacity-90"
              style={{ animation: 'float 20s ease-in-out infinite alternate', transformOrigin: 'center center' }}
            />
            {/* Dark Cinematic Gradient Overlays - Reduced for better visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1610]/60 via-[#1a1610]/20 to-[#1a1610]/90"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#1a1610_100%)] opacity-40"></div>
            <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 50% 100%, rgba(200,151,58,0.7) 0px, transparent 60%)' }}></div>
          </div>

          <div className="max-w-4xl mx-auto px-5 relative z-10 text-center reveal-up">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-[#c8973a]/50"></div>
              <p className="text-[11px] tracking-[0.6em] uppercase text-[#c8973a] font-bold">Legal & Compliance</p>
              <div className="h-px w-16 bg-[#c8973a]/50"></div>
            </div>
            <h1 className="font-serif font-light text-5xl sm:text-7xl lg:text-8xl mb-8">Terms & Conditions</h1>
          </div>
        </div>

        {/* Content Body */}
        <div className="max-w-4xl mx-auto px-5 py-24 sm:py-32">
          <div className="bg-white rounded-[40px] p-8 sm:p-16 border border-[#ede8df] shadow-[0_30px_80px_rgba(42,33,24,0.04)] space-y-12 lg:space-y-16 relative overflow-hidden">
            
            {/* Subtle Watermark */}
            <div className="absolute top-0 right-0 p-10 opacity-[0.02] pointer-events-none">
              <svg className="w-64 h-64 text-[#2a2118]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            </div>

            <section className="reveal-up relative z-10">
              <h2 className="font-serif text-3xl sm:text-4xl mb-6 text-[#2a2118] flex items-center gap-4 border-b border-[#ede8df] pb-6">
                <span className="text-[#c8973a] text-lg font-sans tracking-widest font-bold">01.</span> Agreement & Acceptance
              </h2>
              <p className="text-base text-[#2a2118]/80 leading-relaxed font-normal">
                By purchasing our premium fragrances, visiting the Amor Exotic website, communicating with our concierges via WhatsApp, or establishing a B2B wholesale relationship with us, you agree to be bound by these Terms & Conditions. These terms apply to all transactions including single retail purchases and commercial bulk allocations.
              </p>
            </section>

            <section className="reveal-up relative z-10">
              <h2 className="font-serif text-3xl sm:text-4xl mb-6 text-[#2a2118] flex items-center gap-4 border-b border-[#ede8df] pb-6">
                <span className="text-[#c8973a] text-lg font-sans tracking-widest font-bold">02.</span> Retail & Wholesale Purchasing
              </h2>
              <p className="text-base text-[#2a2118]/80 leading-relaxed font-normal mb-4">
                We cater to both exclusive individual patrons and high-volume corporate partners:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-3 text-base text-[#2a2118]/80 font-normal leading-relaxed">
                <li className="pl-2"><strong>Pricing:</strong> All prices are displayed exclusive of applicable luxury taxes and international shipping duties unless strictly stated otherwise.</li>
                <li className="pl-2"><strong>Wholesale Quotas:</strong> B2B orders such as 1 Litre bulk aroma oils or large candle fleets require a formal signed invoice and deposit before production commences due to raw material limits.</li>
                <li className="pl-2"><strong>Payment Security:</strong> Electronic payments are processed securely. Amor Exotic never stores full credit-card credentials on our native servers.</li>
              </ul>
            </section>

            <section className="reveal-up relative z-10">
              <h2 className="font-serif text-3xl sm:text-4xl mb-6 text-[#2a2118] flex items-center gap-4 border-b border-[#ede8df] pb-6">
                <span className="text-[#c8973a] text-lg font-sans tracking-widest font-bold">03.</span> Shipping Fragrances & Serums
              </h2>
              <p className="text-base text-[#2a2118]/80 leading-relaxed font-normal">
                Because concentrated essential oils and perfume compounds often contain alcohol or volatile organic compounds, they are internationally classified as restricted materials for air freight. Therefore, specialized courier logistics are utilized. Delivery timelines may be slightly extended based on customs clearance procedures and hazmat shipping regulations in your destination country.
              </p>
            </section>

            <section className="reveal-up relative z-10">
              <h2 className="font-serif text-3xl sm:text-4xl mb-6 text-[#2a2118] flex items-center gap-4 border-b border-[#ede8df] pb-6">
                <span className="text-[#c8973a] text-lg font-sans tracking-widest font-bold">04.</span> Returns & Hygiene Policy
              </h2>
              <p className="text-base text-[#2a2118]/80 leading-relaxed font-normal">
                Due to strict luxury hygiene standards and the delicate nature of fine fragrances, <strong>we do not accept returns or exchanges on opened or used products.</strong> If an Amour Oil bottle, luxury candle, or bespoke serum is returned sealed, untouched, and in its original premium packaging within 3 days, a store credit or exchange may be granted strictly at our discretion. Shipping fees are non-refundable.
              </p>
            </section>

            <section className="reveal-up relative z-10">
              <h2 className="font-serif text-3xl sm:text-4xl mb-6 text-[#2a2118] flex items-center gap-4 border-b border-[#ede8df] pb-6">
                <span className="text-[#c8973a] text-lg font-sans tracking-widest font-bold">05.</span> Intellectual Property
              </h2>
              <p className="text-base text-[#2a2118]/80 leading-relaxed font-normal">
                All olfactory formulas, website content, imagery, typography, and trade designs are the exclusive global property of Amor Exotic. Replicating our fragrances, using our branded materials for unauthorized commercial gain, or reverse-engineering our aromatic serums is strictly prohibited and protected under international copyright protocols.
              </p>
            </section>

            <section className="reveal-up relative z-10">
              <h2 className="font-serif text-3xl sm:text-4xl mb-6 text-[#2a2118] flex items-center gap-4 border-b border-[#ede8df] pb-6">
                <span className="text-[#c8973a] text-lg font-sans tracking-widest font-bold">06.</span> Governing Law
              </h2>
              <p className="text-base text-[#2a2118]/80 leading-relaxed font-normal">
                These luxury wholesale and retail terms shall be governed by and construed in accordance with international trade laws. Any disputes culminating from the purchase or distribution of Amor Exotic fragrances shall be subject to the exclusive jurisdiction of the designated commerce courts governing our corporate headquarters.
              </p>
            </section>
            
          </div>
        </div>

      </div>
    </Layout>
  );
}
