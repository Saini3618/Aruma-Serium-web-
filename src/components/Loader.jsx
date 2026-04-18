export default function Loader() {
  return (
    <div id="loader" className="fixed inset-0 z-[9999] flex flex-col items-center justify-center">
      <div className="loader-ring"></div>
      <p className="font-serif text-gold-400 text-2xl tracking-[0.6em] uppercase mt-8 animate-pulse">AMOR EXOTIC</p>
      <p className="text-white/30 text-[10px] tracking-[0.4em] uppercase mt-2">Amor Exotic · Aroma Of Paris</p>
    </div>
  );
}
