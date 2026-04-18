export default function Testimonials() {
  const testimonials = [
    {
      stars: '★★★★★',
      quote: '"Floral Fresh Aroma is intoxicating. Every time I wear it, I get compliments everywhere I go. Absolutely worth every rupee."',
      avatar: 'P',
      name: 'Priya Verma',
      loc: 'Mumbai, India',
      featured: false,
      delay: '0.05s',
    },
    {
      stars: '★★★★★',
      quote: '"Black Oudh Aroma is everything. The depth, the longevity, the sheer commanding presence — I have never worn anything like it. A masterpiece."',
      avatar: 'R',
      name: 'Rahul Khanna',
      loc: 'Delhi, India',
      featured: true,
      delay: '0.1s',
    },
    {
      stars: '★★★★★',
      quote: '"Ocean Breeze smells like a dream holiday. Fresh, clean, and incredibly sophisticated. I\'ve gifted it to 5 friends already!"',
      avatar: 'A',
      name: 'Anika Sharma',
      loc: 'Bangalore, India',
      featured: false,
      delay: '0.15s',
    },
  ];

  return (
    <section className="py-20 px-8 relative overflow-hidden" style={{ background: 'var(--bg-1)' }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-14 reveal-up">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10" style={{ background: 'rgba(200,151,58,0.40)' }}></div>
            <p className="text-[9px] tracking-[0.6em] uppercase text-gold-400">What They Say</p>
            <div className="h-px w-10" style={{ background: 'rgba(200,151,58,0.40)' }}></div>
          </div>
          <h2 className="font-serif font-light" style={{ fontSize: 'clamp(2.2rem,4.5vw,3.2rem)', color: 'var(--text)' }}>
            Voices of <em className="text-gold-400">Devotion</em>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className={`testi-card ${t.featured ? 'featured' : ''} reveal-up`} style={{ animationDelay: t.delay }}>
              <div className="testi-stars">{t.stars}</div>
              <p className="testi-quote">{t.quote}</p>
              <div className="testi-author">
                <div className="testi-avatar">{t.avatar}</div>
                <div>
                  <p className="testi-name">{t.name}</p>
                  <p className="testi-loc">{t.loc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
