export default function Features() {
  const features = [
    { icon: '🌿', title: '100% Natural', desc: 'Only the purest botanical oils — no synthetic fragrances, no fillers.', delay: '0.05s' },
    { icon: '✨', title: 'Long Lasting', desc: 'Concentrated formulas that linger on your skin for 8–12 hours.', delay: '0.10s' },
    { icon: '🐇', title: 'Cruelty Free', desc: 'Never tested on animals. Our ethics are as premium as our scent.', delay: '0.15s' },
    { icon: '🇫🇷', title: 'Paris Inspired', desc: 'Every formula honors the grand tradition of Parisian perfumery.', delay: '0.20s' },
  ];

  return (
    <section className="py-20 px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, var(--bg-0), var(--bg-1))' }}>
      <div className="abs-orb"
        style={{ top: 0, right: '10%', width: '500px', height: '500px', background: 'rgba(200,151,58,0.06)', transform: 'translateY(-50%)' }}>
      </div>
      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="text-center mb-14 reveal-up">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10" style={{ background: 'rgba(200,151,58,0.40)' }}></div>
            <p className="text-[9px] tracking-[0.6em] uppercase text-gold-400">The Serium Promise</p>
            <div className="h-px w-10" style={{ background: 'rgba(200,151,58,0.40)' }}></div>
          </div>
          <h2 className="font-serif font-light split-text" style={{ fontSize: 'clamp(2.2rem,4.5vw,3.2rem)', color: 'var(--text)' }}>
            Why Choose <em className="text-gold-400">Serium</em>
          </h2>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-box reveal-up" style={{ animationDelay: f.delay }}>
              <div className="content-wrapper">
                <div className="feature-icon">{f.icon}</div>
                <h4 className="feature-title">{f.title}</h4>
                <p className="feature-desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
