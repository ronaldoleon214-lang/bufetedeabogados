import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';

const NAV_LINKS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'bufete', label: 'Trayectoria' },
  { id: 'servicios', label: 'Práctica' },
  { id: 'contacto', label: 'Contacto' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('inicio');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 36);
      const pos = y + 200;
      let current = 'inicio';
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (el && el.offsetTop <= pos) current = link.id;
      }
      setActiveId(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF6EE]/95 text-[#191314] backdrop-blur-md border-b border-[#191314]/10 shadow-sm'
          : 'bg-transparent text-[#FFFDF9] border-b border-white/10'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-3 group">
          <img
            src="/img/monograma.webp"
            alt="Monograma Bufete de Abogados"
            className="h-10 w-10 rounded-full border-2 border-[#DFAA54] object-cover transition-transform group-hover:scale-105"
          />
          <div className="leading-tight">
            <span className="block font-display text-sm font-bold tracking-tight">
              {FIRM_INFO.lawyer}
            </span>
            <span className="block text-xs opacity-75">
              {FIRM_INFO.name} · Villahermosa, Tab.
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {NAV_LINKS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative py-1 text-sm font-semibold transition-opacity ${
                  isActive ? 'opacity-100' : 'opacity-75 hover:opacity-100'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className={`absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full ${
                      scrolled ? 'bg-[#8E1322]' : 'bg-[#F6D58E]'
                    }`}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#8E1322] px-5 py-2.5 text-xs font-bold tracking-wide text-[#FFFDF9] transition hover:bg-[#B51B2E] hover:-translate-y-0.5 shadow-md shadow-[#8E1322]/25"
          >
            <span>Contáctanos</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden rounded-full p-2 border border-current/20"
            aria-label="Abrir menú"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-[#150508] text-[#FFFDF9] px-6 pb-6 pt-2 border-t border-white/10 flex flex-col gap-2">
          {NAV_LINKS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileOpen(false)}
              className="py-3 text-base font-semibold border-b border-white/10"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMobileOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-[#DFAA54] px-5 py-3 text-sm font-bold text-[#150508]"
          >
            <span>Contáctanos</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </nav>
      )}
    </header>
  );
}
