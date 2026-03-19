export default function Marquee() {
  const items = [
    { text: '🌸 Floral Fresh Aroma', dim: false },
    { text: '✦', dot: true },
    { text: '🌊 Ocean Breeze', dim: false },
    { text: '✦', dot: true },
    { text: '🍊 Fruity Exotica', dim: false },
    { text: '✦', dot: true },
    { text: '💧 Aqua Aroma', dim: false },
    { text: '✦', dot: true },
    { text: '🖤 Black Oudh Aroma', dim: true },
    { text: '✦', dot: true },
    { text: 'Aroma Strong Enough to Steal a Kiss', dim: false },
    { text: '✦', dot: true },
    { text: 'Light Me, Love Me, Lose Yourself', dim: true },
    { text: '✦', dot: true },
  ];

  const renderItems = (ariaHidden = false) => (
    <div className="shrink-0 flex gap-16" aria-hidden={ariaHidden || undefined}>
      {items.map((item, i) =>
        item.dot
          ? <span key={i} className="marquee-dot">{item.text}</span>
          : <span key={i} className={item.dim ? 'marquee-item-dim' : 'marquee-item'}>{item.text}</span>
      )}
    </div>
  );

  return (
    <div className="overflow-hidden marquee-strip py-4 relative z-10">
      <div className="marquee-inner flex gap-16 whitespace-nowrap">
        {renderItems()}
        {renderItems(true)}
      </div>
    </div>
  );
}
