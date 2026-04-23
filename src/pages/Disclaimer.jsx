import React, { useEffect } from 'react';
import Layout from '../components/Layout';

export default function Disclaimer() {
  useEffect(() => {
    document.title = 'Disclaimer | Amor Exotic';
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="bg-[#fbf9f4] text-[#2a2118] min-h-screen">

        {/* Elegant Dark Header */}
        <div className="bg-[#1a1610] text-[#fbf9f4] py-32 sm:py-48 relative overflow-hidden">

          {/* Custom Amor Exotic Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="images/ChatGPT Image Apr 16, 2026, 02_12_25 AM.webp"
              alt="Disclaimer Hero Background"
              className="w-full h-full object-cover object-center scale-105 opacity-50"
              style={{ animation: 'float 20s ease-in-out infinite alternate', transformOrigin: 'center center' }}
            />
            {/* Dark Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1610]/95 via-[#1a1610]/60 to-[#1a1610]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#1a1610_100%)] opacity-80"></div>
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 50% 100%, rgba(200,151,58,0.5) 0px, transparent 60%)' }}></div>
          </div>

          <div className="max-w-4xl mx-auto px-5 relative z-10 text-center reveal-up">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-[#c8973a]/50"></div>
              <p className="text-[11px] tracking-[0.6em] uppercase text-[#c8973a] font-bold">Legal & Compliance</p>
              <div className="h-px w-16 bg-[#c8973a]/50"></div>
            </div>
            <h1 className="font-serif font-light text-5xl sm:text-7xl lg:text-8xl mb-8">Legal Disclaimer</h1>
          </div>
        </div>

        {/* Content Body */}
        <div className="max-w-4xl mx-auto px-5 py-24 sm:py-32">
          <div className="bg-white rounded-[40px] p-8 sm:p-16 border border-[#ede8df] shadow-[0_30px_80px_rgba(42,33,24,0.04)] space-y-12 lg:space-y-16 relative overflow-hidden">

            {/* Subtle Watermark */}
            <div className="absolute top-0 right-0 p-10 opacity-[0.02] pointer-events-none">
              <svg className="w-64 h-64 text-[#2a2118]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
            </div>

            <section className="reveal-up relative z-10">
              <h2 className="font-serif text-3xl sm:text-4xl mb-6 text-[#2a2118] flex items-center gap-4 border-b border-[#ede8df] pb-6">
                <span className="text-[#c8973a] text-lg font-sans tracking-widest font-bold">01.</span> Natural Variation — A Mark of Authenticity
              </h2>
              <p className="text-base text-[#2a2118]/80 leading-relaxed font-normal">
                At Amor Exotic, every product is formulated using <strong>100% pure, naturally sourced botanical ingredients</strong> — including handpicked jasmine, wild-harvested Oudh, and rare floral extracts from France and India. Because these are real natural ingredients and not synthetic reproductions, minor batch-to-batch variations in colour or scent intensity are completely natural and expected. This is not a defect — it is the defining signature of an authentic luxury product. Just as no two harvests of Damask rose are identical, no two batches of our oils are exactly the same. This variability is proof of the genuine quality of the raw materials we use.
              </p>
            </section>

            <section className="reveal-up relative z-10">
              <h2 className="font-serif text-3xl sm:text-4xl mb-6 text-[#2a2118] flex items-center gap-4 border-b border-[#ede8df] pb-6">
                <span className="text-[#c8973a] text-lg font-sans tracking-widest font-bold">02.</span> Fragrance Performance & Longevity
              </h2>
              <p className="text-base text-[#2a2118]/80 leading-relaxed font-normal mb-4">
                Our fragrance oils are blended for <strong>maximum potency and long-lasting projection</strong>. However, how long a scent lasts and how strongly it diffuses can be influenced by several environmental and personal factors:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-3 text-base text-[#2a2118]/80 font-normal leading-relaxed">
                <li className="pl-2">Your individual skin type and body chemistry — natural oils on the skin interact uniquely with fragrance molecules.</li>
                <li className="pl-2">Ambient temperature and humidity levels — warmth enhances diffusion, while cool dry environments may reduce throw.</li>
                <li className="pl-2">The application method — diffusers, direct application, or candles each release scent differently.</li>
              </ul>
              <p className="text-base text-[#2a2118]/80 leading-relaxed font-normal mt-4">
                For best results, apply to pulse points or use in a well-ventilated space with consistent airflow. All our blends have been professionally tested for optimal longevity under standard conditions.
              </p>
            </section>

            <section className="reveal-up relative z-10">
              <h2 className="font-serif text-3xl sm:text-4xl mb-6 text-[#2a2118] flex items-center gap-4 border-b border-[#ede8df] pb-6">
                <span className="text-[#c8973a] text-lg font-sans tracking-widest font-bold">03.</span> Usage Guidelines — External & Atmospheric Use
              </h2>
              <p className="text-base text-[#2a2118]/80 leading-relaxed font-normal">
                All Amor Exotic aroma oils and luxury candles are <strong>crafted exclusively for external application and atmospheric diffusion</strong>. These are premium-grade, highly concentrated formulations intended for skin, diffusers, or ambient use. As with all concentrated fragrance products — regardless of brand or price point — they must not be ingested and should be kept away from eyes and out of reach of young children. This is a standard global safety guideline followed by all reputable fragrance houses internationally, including those based in Paris, London, and Dubai. Always read the usage label included with your product.
              </p>
            </section>

            <section className="reveal-up relative z-10">
              <h2 className="font-serif text-3xl sm:text-4xl mb-6 text-[#2a2118] flex items-center gap-4 border-b border-[#ede8df] pb-6">
                <span className="text-[#c8973a] text-lg font-sans tracking-widest font-bold">04.</span> Skin Sensitivity & Allergy Awareness
              </h2>
              <p className="text-base text-[#2a2118]/80 leading-relaxed font-normal">
                Amor Exotic oils are professionally blended to the highest concentration standards. All our formulations undergo internal quality checks before dispatch. <strong>We are proud to state that the vast majority of our customers experience no irritation whatsoever.</strong> However, as a responsible luxury brand, we recommend that customers with known skin sensitivities or fragrance allergies perform a small patch test on the inner wrist before full use — this is universally recommended by all dermatologists and premium fragrance brands worldwide. In the unlikely event of any discomfort, simply discontinue use. Your wellbeing is our foremost priority.
              </p>
            </section>

            <section className="reveal-up relative z-10">
              <h2 className="font-serif text-3xl sm:text-4xl mb-6 text-[#2a2118] flex items-center gap-4 border-b border-[#ede8df] pb-6">
                <span className="text-[#c8973a] text-lg font-sans tracking-widest font-bold">05.</span> Bulk Supply & Business Partnerships
              </h2>
              <p className="text-base text-[#2a2118]/80 leading-relaxed font-normal">
                Amor Exotic is an established fragrance manufacturer and bulk supplier, proudly serving hospitality brands, luxury retail stores, corporate gifting houses, and wellness businesses across India and internationally. <strong>All bulk orders are confirmed with a formal order acknowledgement, and our dedicated business team maintains consistent communication with every partner throughout their order lifecycle.</strong> Please note that certain rare botanical raw materials — such as Damascena rose, wild-harvested Oud, and specific French floral absolutes — are subject to seasonal availability. In such cases, we proactively communicate with our B2B partners and offer equivalent premium alternatives. Our client relationships are built on transparency, reliability, and a long-term commitment to excellence.
              </p>
            </section>

            <section className="reveal-up relative z-10">
              <h2 className="font-serif text-3xl sm:text-4xl mb-6 text-[#2a2118] flex items-center gap-4 border-b border-[#ede8df] pb-6">
                <span className="text-[#c8973a] text-lg font-sans tracking-widest font-bold">06.</span> Product Storage for Peak Performance
              </h2>
              <p className="text-base text-[#2a2118]/80 leading-relaxed font-normal">
                To ensure you experience the full depth and complexity of your Amor Exotic fragrance, <strong>we recommend storing all products in a cool, dry environment away from direct sunlight.</strong> The aromatic compounds in premium botanical oils are sensitive to UV light and excessive heat — not because of any compromise in quality, but because this is the nature of all high-grade natural fragrance ingredients. A private drawer, cabinet, or dedicated fragrance shelf at room temperature is ideal. Properly stored, our oils and candles retain their full aromatic profile for an extended period. This storage advice is consistent with international standards followed by top fragrance maisons globally.
              </p>
            </section>
            {/* Section 07 — Aroma Oil Products */}
            <section className="relative z-10">
              <h2 className="font-serif text-3xl sm:text-4xl mb-6 text-[#2a2118] flex items-center gap-4 border-b border-[#ede8df] pb-6">
                <span className="text-[#c8973a] text-lg font-sans tracking-widest font-bold">07.</span> Aroma Oil Collection — Product Reference
              </h2>
              <div className="border border-[#ede8df] rounded-xl overflow-hidden">
                <div className="px-6 py-4 border-b border-[#ede8df] bg-[#faf8f4]">
                  <p className="text-sm text-[#2a2118]/60 italic">"Product image for illustration purposes only. Actual product may vary."</p>
                </div>
                {[
                  'Fruity Exotica',
                  'Ocean Breeze',
                  'Floral Fresh',
                  'Lemongrass',
                  'Lavender',
                  'Green Tea',
                  'Mogra',
                  'Rose',
                  'Nargis',
                  'Tropical Lily',
                  'Vista',
                  'White Oudh',
                  'Aqua Aroma',
                  'Pink Fairy Gumdrop',
                  'Pumpkin Spice',
                ].map((name, i) => (
                  <div key={i} className="px-6 py-3 border-b border-[#ede8df] last:border-0 hover:bg-[#faf6ef] transition-colors duration-150">
                    <span className="text-sm text-[#2a2118]/80 font-light tracking-wide">{name}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>

      </div>
    </Layout>
  );
}
