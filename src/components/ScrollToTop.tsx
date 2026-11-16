import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 420);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed right-5 bottom-5 z-40 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/90 text-cyan-300 shadow-lg shadow-black/40 backdrop-blur-md transition-all duration-150 hover:-translate-y-0.5 hover:border-cyan-400/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
