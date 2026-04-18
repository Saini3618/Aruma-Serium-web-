import React, { useEffect } from 'react';
import Layout from '../components/Layout';

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy | Amor Exotic';
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
              src="images/privacy_hero_bg.png" 
              alt="Rich Amber Amor Oil Background" 
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
            <h1 className="font-serif font-light text-5xl sm:text-7xl lg:text-8xl mb-8">Privacy Policy</h1>
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
                <span className="text-[#c8973a] text-lg font-sans tracking-widest font-bold">01.</span> Introduction
              </h2>
              <p className="text-base text-[#2a2118]/80 leading-relaxed font-normal">
                Welcome to Amor Exotic. We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website, contact our team, or purchase our signature <strong>Amor Oils</strong> and luxury fragrances. By using our services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section className="reveal-up relative z-10">
              <h2 className="font-serif text-3xl sm:text-4xl mb-6 text-[#2a2118] flex items-center gap-4 border-b border-[#ede8df] pb-6">
                <span className="text-[#c8973a] text-lg font-sans tracking-widest font-bold">02.</span> Information We Collect
              </h2>
              <p className="text-base text-[#2a2118]/80 leading-relaxed font-normal mb-4">
                To provide you with a premium shopping experience, we may collect the following types of information:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-3 text-base text-[#2a2118]/80 font-normal leading-relaxed">
                <li className="pl-2"><strong>Personal Information:</strong> Includes your name, billing address, shipping address, email address, and phone number when you place an order for Amor Oils.</li>
                <li className="pl-2"><strong>Payment Data:</strong> Secure payment details processed entirely through our encrypted and certified payment gateways.</li>
                <li className="pl-2"><strong>Usage Data:</strong> Information on how you navigate our website, including device type, browser, and pages visited, to help us improve our platform.</li>
              </ul>
            </section>

            <section className="reveal-up relative z-10">
              <h2 className="font-serif text-3xl sm:text-4xl mb-6 text-[#2a2118] flex items-center gap-4 border-b border-[#ede8df] pb-6">
                <span className="text-[#c8973a] text-lg font-sans tracking-widest font-bold">03.</span> How We Use Your Information
              </h2>
              <p className="text-base text-[#2a2118]/80 leading-relaxed font-normal mb-4">
                We use the information we collect primarily to process your orders and enhance your experience with Amor Exotic:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-3 text-base text-[#2a2118]/80 font-normal leading-relaxed">
                <li className="pl-2">To fulfill and manage purchases of Amor Oils and custom fragrance requests.</li>
                <li className="pl-2">To provide efficient customer support and respond to your B2B wholesale inquiries.</li>
                <li className="pl-2">To send updates regarding your order status, shipping notifications, and occasionally, exclusive offers and brand news (only if you have opted in).</li>
              </ul>
            </section>

            <section className="reveal-up relative z-10">
              <h2 className="font-serif text-3xl sm:text-4xl mb-6 text-[#2a2118] flex items-center gap-4 border-b border-[#ede8df] pb-6">
                <span className="text-[#c8973a] text-lg font-sans tracking-widest font-bold">04.</span> Data Protection & Security
              </h2>
              <p className="text-base text-[#2a2118]/80 leading-relaxed font-normal">
                We implement stringent security measures to maintain the safety of your personal information. All sensitive data is transmitted via Secure Socket Layer (SSL) technology and safely encrypted. Your personal data is stored on secured networks and is only accessible by a limited number of authorized personnel who are required to keep the information completely confidential.
              </p>
            </section>

            <section className="reveal-up relative z-10">
              <h2 className="font-serif text-3xl sm:text-4xl mb-6 text-[#2a2118] flex items-center gap-4 border-b border-[#ede8df] pb-6">
                <span className="text-[#c8973a] text-lg font-sans tracking-widest font-bold">05.</span> Sharing Your Information
              </h2>
              <p className="text-base text-[#2a2118]/80 leading-relaxed font-normal">
                <strong>We do not sell, trade, or rent your personal information to third parties.</strong> We only share data with trusted partners who assist us in operating our website, conducting our business, or servicing you (such as premium logistics partners ensuring the safe delivery of your Amor Oils), so long as those parties agree to keep this information strictly confidential.
              </p>
            </section>

            <section className="reveal-up relative z-10">
              <h2 className="font-serif text-3xl sm:text-4xl mb-6 text-[#2a2118] flex items-center gap-4 border-b border-[#ede8df] pb-6">
                <span className="text-[#c8973a] text-lg font-sans tracking-widest font-bold">06.</span> Your Rights & Choices
              </h2>
              <p className="text-base text-[#2a2118]/80 leading-relaxed font-normal">
                You have the right to access, update, or request the deletion of your personal information at any time. If you wish to unsubscribe from our marketing communications or have any concerns regarding how we handle your data, please contact our support team directly at <strong>hello@amorexotic.com</strong>.
              </p>
            </section>
            
          </div>
        </div>

      </div>
    </Layout>
  );
}
