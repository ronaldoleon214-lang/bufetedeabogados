import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Landmark, ShieldCheck } from 'lucide-react';
import { TIMELINE_STEPS } from '../data/firmData';

export default function TrajectorySection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = TIMELINE_STEPS[activeIdx];

  return (
    <section id="bufete" className="bg-[#FAF6EE] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#8E1322]">
              01 · El Bufete &amp; Trayectoria
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-[1.06] tracking-tight text-[#191314] sm:text-5xl">
              Certeza, discreción y{' '}
              <span className="text-[#8E1322]">estrategia inmediata</span> cuando más importa.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base font-semibold text-[#191314]">
              Quien enfrenta una detención, una auditoría fiscal o un conflicto patrimonial necesita representación técnica firme desde el primer minuto.
            </p>
            <p className="mt-3 text-sm text-[#5A4E4E]">
              Desde 2003, el despacho ejerce la defensa directa ante juzgados del fuero común en Tabasco, tribunales federales y órganos internos de control, sin intermediarios.
            </p>
          </div>
        </div>

        {/* Riel vertical conectado + escenario visual enriquecido */}
        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5 relative pl-6 before:absolute before:left-[7px] before:top-4 before:bottom-4 before:w-[2px] before:bg-[#8E1322]/20">
            <div className="space-y-3">
              {TIMELINE_STEPS.map((step, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <button
                    key={step.year}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    className={`group relative flex w-full items-center justify-between rounded-2xl px-5 py-4 text-left transition-all ${
                      isActive
                        ? 'bg-[#8E1322] text-[#FFFDF9] shadow-xl shadow-[#8E1322]/20 translate-x-1'
                        : 'bg-[#FFFDF9]/80 text-[#191314] hover:bg-[#FFFDF9] hover:translate-x-1'
                    }`}
                  >
                    {/* Nodo sobre el riel vertical */}
                    <span
                      className={`absolute -left-[23px] top-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full border-2 transition-all ${
                        isActive
                          ? 'scale-125 border-[#8E1322] bg-[#F6D58E] shadow-[0_0_0_4px_rgba(142,19,34,0.18)]'
                          : 'border-[#8E1322]/40 bg-[#FAF6EE] group-hover:border-[#8E1322]'
                      }`}
                    />

                    <div>
                      <span
                        className={`block font-display text-2xl font-extrabold tracking-tight ${
                          isActive ? 'text-[#F6D58E]' : 'text-[#8E1322]'
                        }`}
                      >
                        {step.year}
                      </span>
                      <span className="block text-sm font-semibold">{step.title}</span>
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                        isActive
                          ? 'bg-[#F6D58E]/20 text-[#F6D58E]'
                          : 'bg-[#FAF6EE] text-[#5A4E4E]'
                      }`}
                    >
                      {step.tag}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.year}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#3B0811] via-[#25060C] to-[#150508] p-8 text-[#FFFDF9] shadow-2xl sm:p-11"
              >
                {/* Año gigante decorativo en marca de agua */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none select-none absolute -right-4 -bottom-6 font-display text-[7.5rem] font-extrabold leading-none tracking-tighter text-white/[0.04] sm:text-[10rem]"
                >
                  {current.year}
                </span>

                <div className="relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-5">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#F6D58E]/15 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#F6D58E]">
                      <Landmark className="h-3.5 w-3.5" />
                      <span>Hito verificado · {current.tag}</span>
                    </span>
                    <span className="font-display text-3xl font-extrabold text-[#F6D58E]">
                      {current.year}
                    </span>
                  </div>

                  <h3 className="mt-7 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                    {current.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-[#FFFDF9]/90">
                    {current.summary}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#F6D58E]/80">
                    {current.detail}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
                    <div className="flex items-center gap-2 text-xs text-white/75">
                      <ShieldCheck className="h-4 w-4 text-[#DFAA54]" />
                      <span>Registro activo · Tabasco y Fuero Federal</span>
                    </div>

                    <a
                      href="#contacto"
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#F6D58E] px-5 py-2.5 text-xs font-bold text-[#150508] transition hover:bg-[#DFAA54]"
                    >
                      <span>Agendar consulta</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
