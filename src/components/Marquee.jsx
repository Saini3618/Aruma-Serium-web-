export default function Marquee() {
  const items = [
    { text: '💧 Aqua Aroma', dim: false },
    { text: '✦', dot: true },
    { text: '🖤 Black Oudh Aroma', dim: true },
    { text: '✦', dot: true },
    { text: '🌸 Floral Fresh Aroma', dim: false },
    { text: '✦', dot: true },
    { text: '🍊 Fruity Exotica Aroma', dim: false },
    { text: '✦', dot: true },
    { text: '🍵 Green Tea Aroma', dim: false },
    { text: '✦', dot: true },
    { text: '🍋 Lemongrass Aroma', dim: false },
    { text: '✦', dot: true },
    { text: '🌼 Mogra Aroma', dim: false },
    { text: '✦', dot: true },
    { text: '🌊 Ocean Breeze Aroma', dim: false },
    { text: '✦', dot: true },
    { text: '🌹 Rose Aroma', dim: false },
    { text: '✦', dot: true },
    { text: '🕯️ Vanilla Candle', dim: true },
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
