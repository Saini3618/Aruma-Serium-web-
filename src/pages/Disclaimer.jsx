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
                <span className="text-[#c8973a] text-lg font-sans tracking-widest font-bold">01.</span> Fragrance & Color Variations
              </h2>
              <p className="text-base text-[#2a2118]/80 leading-relaxed font-normal">
                Because Amor Exotic utilizes pure, natural raw materials across our <strong>luxury oils and candles</strong>, slight variations in scent notes or liquid color between batches are completely normal. Rare botanical harvests (like jasmine or natural Oudh) differ slightly each season, which is a hallmark of genuine luxury natural extraction, not a defect.
              </p>
            </section>

            <section className="reveal-up relative z-10">
              <h2 className="font-serif text-3xl sm:text-4xl mb-6 text-[#2a2118] flex items-center gap-4 border-b border-[#ede8df] pb-6">
                <span className="text-[#c8973a] text-lg font-sans tracking-widest font-bold">02.</span> Scent Longevity & Projection
              </h2>
              <p className="text-base text-[#2a2118]/80 leading-relaxed font-normal mb-4">
                The longevity of our fragrances (how long a scent lasts) depends intimately on various subjective factors:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-3 text-base text-[#2a2118]/80 font-normal leading-relaxed">
                <li className="pl-2">Individual skin chemistry and natural oils.</li>
                <li className="pl-2">Environmental factors such as atmospheric temperature and humidity.</li>
                <li className="pl-2">The application method and diffusion environment for candles and bulk oils.</li>
              </ul>
            </section>

            <section className="reveal-up relative z-10">
              <h2 className="font-serif text-3xl sm:text-4xl mb-6 text-[#2a2118] flex items-center gap-4 border-b border-[#ede8df] pb-6">
                <span className="text-[#c8973a] text-lg font-sans tracking-widest font-bold">03.</span> External & Atmospheric Use Only
              </h2>
              <p className="text-base text-[#2a2118]/80 leading-relaxed font-normal">
                Every Amor Exotic blend—whether it is a signature oil or a luxury candle—is strictly crafted for external or atmospheric enjoyment. These highly concentrated products must <strong>never be ingested</strong> and should be kept safely away from sensitive areas, eyes, and small children.
              </p>
            </section>

            <section className="reveal-up relative z-10">
              <h2 className="font-serif text-3xl sm:text-4xl mb-6 text-[#2a2118] flex items-center gap-4 border-b border-[#ede8df] pb-6">
                <span className="text-[#c8973a] text-lg font-sans tracking-widest font-bold">04.</span> Sensitivities & Patch Testing
              </h2>
              <p className="text-base text-[#2a2118]/80 leading-relaxed font-normal">
                Our luxury oils are crafted with highly concentrated potency. If you have sensitive skin or specific aromatic allergies, we strongly advise performing a small topical patch test 24 hours prior to regular use. Discontinue use immediately if any irritation or discomfort surfaces.
              </p>
            </section>

            <section className="reveal-up relative z-10">
              <h2 className="font-serif text-3xl sm:text-4xl mb-6 text-[#2a2118] flex items-center gap-4 border-b border-[#ede8df] pb-6">
                <span className="text-[#c8973a] text-lg font-sans tracking-widest font-bold">05.</span> B2B Supply & Bulk Fulfillment
              </h2>
              <p className="text-base text-[#2a2118]/80 leading-relaxed font-normal">
                Our bulk manufacturing commitments for hospitality and elite retail partners strive for absolute perfection. However, delivery timelines and large-scale bulk yields may occasionally shift based on rare botanical harvesting seasons globally (e.g., specific floral blooms in France or India). We maintain clear communication with our partners during these periods.
              </p>
            </section>

            <section className="reveal-up relative z-10">
              <h2 className="font-serif text-3xl sm:text-4xl mb-6 text-[#2a2118] flex items-center gap-4 border-b border-[#ede8df] pb-6">
                <span className="text-[#c8973a] text-lg font-sans tracking-widest font-bold">06.</span> Proper Scent Storage
              </h2>
              <p className="text-base text-[#2a2118]/80 leading-relaxed font-normal">
                To preserve the pristine integrity of your delicate floral, fresh aqua, or deep Oudh aromas, we require that all products are stored in cool, dark environments safely sealed. Exposing luxury oils or luxury candles to direct sunlight, extreme heat, or prolonged air exposure degrades their premium aromatic profile and structure.
              </p>
            </section>

          </div>
        </div>

      </div>
    </Layout>
  );
}
