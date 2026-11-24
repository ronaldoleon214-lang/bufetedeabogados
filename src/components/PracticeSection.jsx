import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { FIRM_INFO, TIMELINE_STEPS } from '../data/firmData';

export default function PracticeSection() {
  const waUrl = `https://wa.me/${FIRM_INFO.phoneMobileRaw}?text=${encodeURIComponent(
    'Hola Lic. Manuel Enrique Magaña, quiero agendar una valoración de mi caso.'
  )}`;

  return (
    <section
      id="bufete"
      className="bg-gradient-to-br from-[#360810] via-[#22060B] to-[#150508] py-12 text-[#FFFDF9]"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#F6D58E]">
              Por qué contratar al Lic. Magaña Espinosa
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              22 años en tribunales respaldan{' '}
              <span className="bg-gradient-to-r from-[#F6D58E] to-[#DFAA54] bg-clip-text text-transparent">
                cada decisión de tu defensa.
              </span>
            </h2>
            <div className="mt-5 space-y-2.5 text-sm text-white/85">
              <p className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#DFAA54] shrink-0" />
                <span><strong>Paso 1:</strong> Revisamos tu citatorio, carpeta o multa por WhatsApp o en oficina.</span>
              </p>
              <p className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#DFAA54] shrink-0" />
                <span><strong>Paso 2:</strong> Te damos un diagnóstico claro, estrategia y cotización transparente.</span>
              </p>
              <p className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#DFAA54] shrink-0" />
                <span><strong>Paso 3:</strong> Asumimos tu representación formal ante la autoridad de inmediato.</span>
              </p>
            </div>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F6D58E] to-[#DFAA54] px-6 py-3.5 text-sm font-bold text-[#150508] transition hover:brightness-105"
            >
              <span>Agendar valoración hoy</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="lg:col-span-6 grid gap-3 sm:grid-cols-2">
            {TIMELINE_STEPS.map((s) => (
              <div
                key={s.year}
                className="rounded-xl border border-white/10 bg-white/[0.05] p-5"
              >
                <span className="font-display text-2xl font-extrabold text-[#F6D58E]">
                  {s.year}
                </span>
                <h3 className="mt-1 font-display text-base font-bold text-white">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-white/75">
                  {s.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
