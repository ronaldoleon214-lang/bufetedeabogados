import { FIRM_INFO } from '../data/firmData';

export default function Footer() {
  return (
    <footer className="bg-[#150508] text-[#FFFDF9]/80 py-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-white/10 pb-8">
          <div className="flex items-center gap-3.5">
            <img
              src="/img/monograma.webp"
              alt="Monograma Bufete de Abogados"
              className="h-11 w-11 rounded-full border-2 border-[#DFAA54]"
            />
            <div>
              <strong className="block font-display text-base text-white">
                {FIRM_INFO.lawyer}
              </strong>
              <span className="text-xs text-[#F6D58E]/80">
                {FIRM_INFO.name} · {FIRM_INFO.title} · Cédula desde {FIRM_INFO.since}
              </span>
            </div>
          </div>

          <nav className="flex flex-wrap gap-6 text-sm font-medium" aria-label="Pie de página">
            <a href="#inicio" className="hover:text-[#F6D58E]">Inicio</a>
            <a href="#servicios" className="hover:text-[#F6D58E]">Soluciones</a>
            <a href="#bufete" className="hover:text-[#F6D58E]">Cómo trabajamos</a>
            <a href="#contacto" className="hover:text-[#F6D58E]">Contacto</a>
          </nav>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-white/55">
          <span>{FIRM_INFO.address}</span>
          <a href="#inicio" className="hover:text-[#F6D58E]">Volver arriba ↑</a>
        </div>
      </div>
    </footer>
  );
}
